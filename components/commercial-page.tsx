import { ArrowLeft, ArrowUpRight, Check, FileCheck2, Mail, MessageCircle } from "lucide-react";
import { buyerPersonas, siteOrigin, type CommercialPage, type GrowthLang } from "@/lib/growth-model";
import { getInsight } from "@/lib/insights";

export function CommercialPageView({ page, lang }: { page: CommercialPage; lang: GrowthLang }) {
  const isZh = lang === "zh";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const langBase = isZh ? `${basePath}/zh` : basePath;
  const pagePath = `${isZh ? "/zh" : ""}/solutions/${page.slug}`;
  const alternatePath = `${isZh ? "" : "/zh"}/solutions/${page.slug}`;
  const url = `${siteOrigin}${pagePath}`;
  const personas = page.personaIds
    .map((id) => buyerPersonas.find((persona) => persona.id === id))
    .filter(Boolean);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.h1[lang],
        description: page.description[lang],
        provider: { "@type": "Organization", "@id": `${siteOrigin}/#organization`, name: isZh ? "中能芯光" : "CECL Photonics", url: siteOrigin },
        areaServed: "Worldwide",
        serviceType: page.primaryKeyword,
        audience: personas.map((persona) => ({ "@type": "Audience", audienceType: persona!.role[lang] })),
        url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: isZh ? "首页" : "Home", item: `${siteOrigin}${isZh ? "/zh" : ""}/` },
          { "@type": "ListItem", position: 2, name: isZh ? "解决方案" : "Solutions", item: url },
          { "@type": "ListItem", position: 3, name: page.primaryKeyword, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.questions.map(({ question, answer }) => ({
          "@type": "Question",
          name: question[lang],
          acceptedAnswer: { "@type": "Answer", text: answer[lang] },
        })),
      },
    ],
  };

  return (
    <main className="commercial-shell" data-persona={page.personaIds.join(",")} data-intent={page.intent}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="article-header">
        <a className="brand" href={`${langBase || ""}/`} aria-label={isZh ? "中能芯光首页" : "CECL Photonics home"}>
          <span className="brand-mark">C</span><span><strong>CECL</strong><small>PHOTONICS · 中能芯光</small></span>
        </a>
        <div className="commercial-header-actions">
          <a className="article-lang" href={`${basePath}${alternatePath}/`}>{isZh ? "EN" : "中文"}</a>
          <a className="button compact" href="#project-brief" data-analytics-event="select_content" data-content-type="cta" data-content-id={`${page.slug}-header`}>
            {page.cta[lang]}
          </a>
        </div>
      </header>

      <section className="commercial-hero">
        <div>
          <p className="eyebrow">{page.eyebrow[lang]}</p>
          <h1>{page.h1[lang]}</h1>
          <p>{page.lead[lang]}</p>
          <div className="hero-actions">
            <a className="button" href="#project-brief" data-analytics-event="select_content" data-content-type="cta" data-content-id={`${page.slug}-hero`}>{page.cta[lang]}</a>
            <a className="text-link" href={`${langBase || ""}/#documents`}>{isZh ? "查看资料中心" : "Review source documents"}</a>
          </div>
        </div>
        <aside className="intent-panel">
          <p>{isZh ? "购买者任务" : "BUYER JOBS"}</p>
          {personas.map((persona) => <div key={persona!.id}><strong>{persona!.role[lang]}</strong><span>{persona!.jobs[0][lang]}</span></div>)}
          <small>{isZh ? "搜索意图" : "Search intent"}: {page.intent}</small>
        </aside>
      </section>

      <section className="commercial-proof-strip">
        <div><span>{isZh ? "主要主题" : "Primary topic"}</span><strong>{page.primaryKeyword}</strong></div>
        <div><span>{isZh ? "适合阶段" : "Best-fit stage"}</span><strong>{isZh ? "供应商评估 → 项目简报" : "Supplier review → project brief"}</strong></div>
        <div><span>{isZh ? "证据原则" : "Evidence rule"}</span><strong>{isZh ? "文件与具体型号对应" : "Documents matched to the model"}</strong></div>
      </section>

      <section className="section commercial-section">
        <div className="section-heading split"><div><p className="eyebrow">{isZh ? "常见风险" : "COMMON BUYER RISKS"}</p><h2>{isZh ? "项目失败往往不是因为缺少一个参数。" : "Projects rarely fail because one parameter is missing."}</h2></div><p>{isZh ? "更常见的原因是需求、接口、验证和资料范围没有在同一个项目模型中对齐。" : "The more common cause is that requirements, interfaces, verification and document scope were never aligned in one project model."}</p></div>
        <div className="pain-grid">{page.pains.map((pain, index) => <article key={pain.en}><span>0{index + 1}</span><p>{pain[lang]}</p></article>)}</div>
      </section>

      <section className="section capability-section">
        <div className="section-heading"><p className="eyebrow">{isZh ? "能力范围" : "CAPABILITY SCOPE"}</p><h2>{isZh ? "从采购问题出发组织技术内容。" : "Technical content organized around the buying decision."}</h2></div>
        <div className="capability-grid">{page.capabilities.map((capability, index) => <article key={capability.title.en}><span>0{index + 1}</span><h3>{capability.title[lang]}</h3><p>{capability.body[lang]}</p></article>)}</div>
      </section>

      <section className="commercial-deliverables">
        <div><p className="eyebrow">{isZh ? "评审输出" : "REVIEW OUTPUTS"}</p><h2>{isZh ? "一次有效沟通应当产生什么？" : "What should a useful first conversation produce?"}</h2></div>
        <ul>{page.deliverables.map((item) => <li key={item.en}><Check size={18}/><span>{item[lang]}</span></li>)}</ul>
      </section>

      <section className="section faq commercial-faq">
        <div className="section-heading"><p className="eyebrow">{isZh ? "采购问答" : "BUYER ANSWERS"}</p><h2>{isZh ? "可被搜索和引用的明确答案。" : "Direct answers that can be verified and cited."}</h2></div>
        <div className="faq-list">{page.questions.map(({ question, answer }, index) => <details key={question.en}><summary className="faq-question"><span>0{index + 1}</span>{question[lang]}</summary><p className="faq-answer">{answer[lang]}</p></details>)}</div>
      </section>

      <section className="section related-insights">
        <div className="section-heading"><p className="eyebrow">{isZh ? "延伸阅读" : "SUPPORTING GUIDES"}</p><h2>{isZh ? "先理解工程决策，再确定供应范围。" : "Understand the engineering decision before fixing supply scope."}</h2></div>
        <div className="related-grid">{page.relatedInsights.map((slug) => { const insight = getInsight(slug); if (!insight) return null; return <article key={slug}><FileCheck2 size={22}/><h3>{insight.title[lang]}</h3><p>{insight.description[lang]}</p><a href={`${langBase}/insights/${slug}/`} data-analytics-event="select_content" data-content-type="article" data-content-id={slug}>{isZh ? "阅读指南" : "Read the guide"}<ArrowUpRight size={16}/></a></article>; })}</div>
      </section>

      <section className="commercial-cta" id="project-brief">
        <div><p className="eyebrow">{isZh ? "项目简报" : "PROJECT BRIEF"}</p><h2>{page.cta[lang]}</h2><p>{isZh ? "请准备应用、目标市场、关键参数、采购阶段与时间计划。我们会先确认问题范围，再进入型号或方案评审。" : "Prepare the application, destination market, key parameters, volume stage and timeline. We will define the review scope before proposing a model or architecture."}</p></div>
        <div className="commercial-cta-actions">
          <a className="button" href={`https://wa.me/8615595903230?text=${encodeURIComponent(`CECL project inquiry: ${page.primaryKeyword}`)}`} target="_blank" rel="noreferrer" data-analytics-event="contact" data-method="whatsapp" data-intent={page.intent}><MessageCircle size={18}/>{isZh ? "WhatsApp 联系李思澄" : "Contact Li Sicheng on WhatsApp"}</a>
          <a className="text-link" href={`mailto:sales@ceclphotonics.com?subject=${encodeURIComponent(`CECL project inquiry: ${page.primaryKeyword}`)}`} data-analytics-event="contact" data-method="email" data-intent={page.intent}><Mail size={16}/>sales@ceclphotonics.com</a>
          <a className="text-link" href={`${langBase || ""}/#contact`}><ArrowLeft size={16}/>{isZh ? "返回完整询盘表单" : "Open the full inquiry form"}</a>
        </div>
      </section>
    </main>
  );
}
