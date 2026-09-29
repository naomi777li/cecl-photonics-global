import fs from "node:fs";
import path from "node:path";
import { commercialPages, measurementModel } from "../lib/growth-model.ts";

const root = process.cwd();
const sourceDir = path.join(root, "data", "analytics");
const outputPath = path.join(sourceDir, "recommendations.md");

function readJson(name) {
  const file = path.join(sourceDir, name);
  if (!fs.existsSync(file)) return [];
  const parsed = JSON.parse(fs.readFileSync(file, "utf8"));
  return Array.isArray(parsed) ? parsed : parsed.rows || [];
}

function expectedCtr(position) {
  if (position <= 3) return 0.08;
  if (position <= 5) return 0.045;
  if (position <= 10) return 0.025;
  return 0.01;
}

const gsc = readJson("gsc.json");
const ga4 = readJson("ga4.json");
const actions = [];

for (const row of gsc) {
  const impressions = Number(row.impressions || 0);
  const clicks = Number(row.clicks || 0);
  const position = Number(row.position || 100);
  const ctr = row.ctr == null ? (impressions ? clicks / impressions : 0) : Number(row.ctr);
  const page = String(row.page || "");
  const query = String(row.query || "");
  const modelPage = commercialPages.find((item) => page.includes(`/solutions/${item.slug}`));
  if (impressions >= 100 && position <= 20 && ctr < expectedCtr(position) * 0.7) {
    actions.push({
      priority: Math.round(impressions * Math.max(1, 21 - position)),
      type: "CTR / intent alignment",
      page,
      reason: `Query "${query}" has ${impressions} impressions, ${(ctr * 100).toFixed(1)}% CTR and average position ${position.toFixed(1)}.`,
      action: modelPage
        ? `Review the title and description against the ${modelPage.intent} promise for "${modelPage.primaryKeyword}". Preserve model-level evidence and avoid adding unrelated keyword variants.`
        : "Map the query to the closest existing persona and page before changing copy or creating a new URL.",
    });
  }
  if (impressions >= 50 && position > 4 && position <= 20 && modelPage) {
    actions.push({
      priority: Math.round(impressions * (21 - position) * 0.7),
      type: "Page-one opportunity",
      page,
      reason: `Commercial page is within positions 5–20 for "${query}".`,
      action: "Add first-hand model data, comparison conditions, a source document or a focused supporting guide; strengthen internal links in both directions.",
    });
  }
}

for (const row of ga4) {
  const page = String(row.pagePath || row.page || "");
  const sessions = Number(row.sessions || 0);
  const engaged = Number(row.engagedSessions || 0);
  const leads = Number(row.leads || row.generateLead || 0);
  const contacts = Number(row.whatsappClicks || 0) + Number(row.phoneClicks || 0);
  const modelPage = commercialPages.find((item) => page.includes(`/solutions/${item.slug}`));
  if (sessions >= 30 && (leads + contacts) === 0) {
    actions.push({
      priority: sessions * 15,
      type: "Conversion gap",
      page,
      reason: `${sessions} sessions and no measured inquiry or contact action.`,
      action: modelPage
        ? `Audit the page against personas ${modelPage.personaIds.join(", ")}: confirm the proof, deliverables and CTA answer the actual buying stage before expanding traffic.`
        : "Check whether the page has a clear next step and an internal path to the relevant commercial solution.",
    });
  }
  if (sessions >= 30 && engaged / Math.max(sessions, 1) < 0.45) {
    actions.push({
      priority: sessions * 8,
      type: "Engagement gap",
      page,
      reason: `Engaged-session rate is ${((engaged / sessions) * 100).toFixed(1)}%.`,
      action: "Inspect search-query mismatch, first-screen clarity, mobile experience and whether the page gives a concrete answer before the CTA.",
    });
  }
}

actions.sort((a, b) => b.priority - a.priority);
const generated = new Date().toISOString();
const lines = [
  "# CECL growth recommendations",
  "",
  `Generated: ${generated}`,
  "",
  `North-star metric: **${measurementModel.northStar}**`,
  "",
  gsc.length || ga4.length ? "## Prioritized actions" : "## Waiting for normalized GSC / GA4 exports",
  "",
];

if (!gsc.length && !ga4.length) {
  lines.push("Add `data/analytics/gsc.json` and/or `data/analytics/ga4.json`, then rerun this script.");
} else if (!actions.length) {
  lines.push("No rule threshold was triggered. Keep collecting data and review model assumptions monthly.");
} else {
  actions.slice(0, 25).forEach((item, index) => {
    lines.push(`### ${index + 1}. ${item.type}`, "", `- Page: ${item.page || "(not provided)"}`, `- Why: ${item.reason}`, `- Action: ${item.action}`, "");
  });
}

lines.push("## Guardrails", "", ...measurementModel.decisionRules.map((rule) => `- ${rule}`), "");
fs.mkdirSync(sourceDir, { recursive: true });
fs.writeFileSync(outputPath, `${lines.join("\n")}\n`);
console.log(outputPath);

