import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const catalogPath = path.join(root, "lib", "product-catalog.ts");
const source = fs.readFileSync(catalogPath, "utf8");
const imagePaths = [...source.matchAll(/\bimage:\s*"([^"]+)"/g)].map((match) => match[1]);
const altLabels = [...source.matchAll(/\bimageAlt:\s*\{\s*en:\s*"([^"]+)"\s*,\s*zh:\s*"([^"]+)"\s*\}/g)];
const errors = [];

if (imagePaths.length === 0) errors.push("No product-family images were found in the catalog.");
if (imagePaths.length !== altLabels.length) {
  errors.push(`Expected one English/Chinese alt-text pair per image (${imagePaths.length} images, ${altLabels.length} pairs).`);
}

const seenPaths = new Set();
const seenFiles = new Map();
for (const imagePath of imagePaths) {
  if (seenPaths.has(imagePath)) errors.push(`Product families reuse the same image path: ${imagePath}`);
  seenPaths.add(imagePath);

  const filePath = path.join(root, "public", imagePath.replace(/^\//, ""));
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    errors.push(`Missing product-family image: ${imagePath}`);
    continue;
  }

  const digest = createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
  if (seenFiles.has(digest)) errors.push(`Product families use identical image files: ${seenFiles.get(digest)} and ${imagePath}`);
  else seenFiles.set(digest, imagePath);
}

for (const [index, match] of altLabels.entries()) {
  if (!match[1].trim() || !match[2].trim()) errors.push(`Image ${index + 1} is missing English or Chinese alt text.`);
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Verified ${imagePaths.length} unique product-family images, file paths, and bilingual alt-text pairs.`);
}
