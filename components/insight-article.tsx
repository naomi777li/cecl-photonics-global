import { ArrowLeft, MessageCircle } from "lucide-react";
import type { Insight, InsightLang } from "@/lib/insights";
import { getCommercialPage, insightToCommercialPages } from "@/lib/growth-model";
import { BrandLogo } from "@/components/brand-logo";
import { siteOrigin } from "@/lib/site-url";

export function InsightArticle({ insight, lang }: { insight: Insight; lang: InsightLang }) {
  const isZh = lang === "zh";
  const repositoryBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const base = isZh ? `${repositoryBase}/zh` : repositoryBase;
  const alternate = isZh ? `${repositoryBase}/insights/${insight.slug}/` : `${repositoryBase}/zh/insights/${insight.slug}/`;
  const relatedSolutions = (insightToCommercialPages[insight.slug] || []).map(getCommercialPage).filter(Boolean);
  const publicSite = siteOrigin;
  const articleUrl = `${publicSite}${base}/insights/${insight.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: insight.title[lang],
        description: insight.description[lang],
        datePublished: insight.date,
        dateModified: insight.date,
        inLanguage: isZh ? "zh-CN" : "en",
        mainEntityOfPage: articleUrl,
        author: { "@type": "Organization", name: isZh ? "中能芯光技术团队" : "CECL Photonics Technical Team" },
        publisher: { "@type": "Organization", name: isZh ? "中能芯光" : "CECL Photonics" },
        citation: insight.sources?.map(({ url }) => url)
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: isZh ? "首页" : "Home", item: `${publicSite}${base || ""}/` },
          { "@type": "ListItem", position: 2, name: isZh ? "行业知识" : "Insights", item: `${publicSite}${base || ""}/#insights` },
          { "@type": "ListItem", position: 3, name: insight.title[lang], item: articleUrl }
        ]
      }
    ]
  };

  return <main className="article-shell">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <header className="article-header"><BrandLogo href={`${base || ""}/`} /><a className="article-lang" href={alternate}>{isZh ? "EN" : "中文"}</a></header>
    <section className="article-hero"><div><p className="eyebrow">{isZh ? "行业知识 · 光电工程" : "INDUSTRY INSIGHT · PHOTONICS ENGINEERING"}</p><h1>{insight.title[lang]}</h1><p className="article-deck">{insight.description[lang]}</p><div className="article-meta"><span>{insight.date}</span><span>{insight.readTime[lang]}</span><span>{isZh ? "技术审阅：中能芯光技术团队" : "Technical review: CECL Photonics Technical Team"}</span></div></div></section>
    <div className="article-body"><article className="article-content">{insight.sections[lang].map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((p) => <p key={p}>{p}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}{insight.sources && <section className="article-sources"><h2>{isZh ? "参考资料与延伸阅读" : "References and further reading"}</h2><ul>{insight.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul></section>}<div className="article-note">{insight.note[lang]}</div></article><aside className="article-aside"><p>{isZh ? "对应的采购与项目路径" : "Related sourcing and project paths"}</p>{relatedSolutions.map((solution) => <p key={solution!.slug}><a href={`${base}/solutions/${solution!.slug}`} data-analytics-event="select_content" data-content-type="commercial_solution" data-content-id={solution!.slug}>{solution!.h1[lang]}</a></p>)}<p>{isZh ? "准备讨论具体波长、光学引擎或设备项目？" : "Ready to discuss a wavelength, light engine or device program?"}</p><a href="https://wa.me/8615595903230" target="_blank" rel="noreferrer"><MessageCircle size={16}/>{isZh ? "通过 WhatsApp 联系李思澄" : "Contact Li Sicheng on WhatsApp"}</a><p><a href={`${base || "/"}#insights`}><ArrowLeft size={15}/>{isZh ? "返回行业知识" : "Back to insights"}</a></p></aside></div>
  </main>;
}
