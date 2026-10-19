import { ArrowLeft, ArrowUpRight, Check, Download, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import { productFamilies, type ProductFamily, type ProductLang } from "@/lib/product-catalog";
import { getInsight } from "@/lib/insights";
import { BrandLogo } from "@/components/brand-logo";
import { InquiryForm } from "@/components/inquiry-form";

const siteOrigin = "https://ceclphotonics.com";

const vcselUseCases = [
  {
    wavelengths: "808 / 850 nm",
    title: { en: "Robot-vacuum obstacle sensing", zh: "扫地机器人避障感知" },
    body: { en: "Catalog-listed dual-line emitters for triangulation-based sensing. Receiver geometry, calibration and robot-level detection remain system design inputs.", zh: "目录列出的双线光型发射器，面向三角测距感知。接收几何、标定和机器人级识别仍需系统设计验证。" },
    insight: true,
  },
  {
    wavelengths: "850 / 940 nm",
    title: { en: "Proximity sensing", zh: "接近传感" },
    body: { en: "Compare wavelength, drive point, field of view, target reflectance and cover-window transmission against the receiver and operating environment.", zh: "结合接收器与环境，比较波长、驱动点、视场、目标反射率及盖板透过率。" },
  },
  {
    wavelengths: "940 nm",
    title: { en: "Industrial ToF integration", zh: "工业 ToF 集成" },
    body: { en: "Treat the VCSEL as an emitter component within a matched timing, driver, receiver and processing architecture; evaluate the complete module for system performance.", zh: "将 VCSEL 作为发射器件，匹配时序、驱动、接收和处理架构；系统性能须在完整模块上评估。" },
  },
  {
    wavelengths: "940 nm",
    title: { en: "Liquid & smart-bathroom sensing", zh: "液位与智能卫浴传感" },
    body: { en: "Define container or surface geometry, sensing distance, condensation, ambient light and receiver response before selecting a catalog candidate.", zh: "选型前明确容器或表面几何、感知距离、冷凝、环境光及接收器响应。" },
  },
];

function Header({ lang, alternate }: { lang: ProductLang; alternate: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return <header className="article-header"><BrandLogo href={`${basePath}${lang === "zh" ? "/zh" : "/"}`} /><div className="product-header-actions"><a className="article-lang" href={`${basePath}${alternate}`}>{lang === "zh" ? "EN" : "中文"}</a><a className="button compact" href={`https://wa.me/8615595903230?text=${encodeURIComponent(lang === "zh" ? "您好，我想咨询中能芯光产品。" : "Hello, I would like to discuss a CECL Photonics product.")}`} target="_blank" rel="noreferrer"><MessageCircle size={15}/>{lang === "zh" ? "产品询价" : "Request quote"}</a></div></header>;
}

export function ProductIndex({ lang }: { lang: ProductLang }) {
  const zh = lang === "zh";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const prefix = zh ? "/zh" : "";
  const groups = ["semiconductor", "module"] as const;
  return <main className="product-hub">
    <Header lang={lang} alternate={`${zh ? "" : "/zh"}/products`} />
    <section className="product-hub-hero"><p className="eyebrow">{zh ? "产品中心" : "PRODUCT PLATFORM"}</p><h1>{zh ? "从发光芯片到应用光学引擎。" : "From emitter die to application-ready light engines."}</h1><p>{zh ? "按采购任务浏览产品。公开参数来自现有产品目录；定制模块参数需在项目评审后确认。" : "Browse by sourcing task. Published figures come from the supplied catalogs; custom-module parameters are confirmed through project review."}</p></section>
    <section className="sourcing-paths" aria-labelledby="sourcing-paths-title"><div className="section-heading"><p className="eyebrow">{zh ? "按采购形态开始" : "CHOOSE YOUR SOURCING SCOPE"}</p><h2 id="sourcing-paths-title">{zh ? "你需要芯片，还是可集成的光源方案？" : "Source the emitter—or scope an integration-ready light engine."}</h2><p>{zh ? "两条路径对应不同的工程输入。选择最接近当前项目阶段的一项，我们会据此确认目录型号或项目评审范围。" : "The two routes need different engineering inputs. Choose the one closest to your project stage to focus the catalog shortlist or project review."}</p></div><div className="sourcing-path-grid"><article><span className="eyebrow">01 · {zh ? "器件采购" : "COMPONENT SOURCING"}</span><h3>{zh ? "LED / VCSEL 芯片" : "LED & VCSEL chips"}</h3><p>{zh ? "适合已有封装、驱动或模组产线的采购与研发团队。先从目录系列匹配，再核对具体型号数据表。" : "For sourcing and engineering teams with an established packaging, driver or module workflow. Shortlist a catalog family, then verify the exact model datasheet."}</p><ul><li>{zh ? "告知目标波长 / 颜色与应用" : "Target wavelength / color and application"}</li><li>{zh ? "提供驱动条件、封装 / 尺寸及目标数量" : "Drive conditions, package / dimensions and target volume"}</li></ul><a href="#semiconductors">{zh ? "浏览芯片产品" : "Browse chip families"}<ArrowUpRight size={16}/></a></article><article><span className="eyebrow">02 · {zh ? "集成方案" : "INTEGRATION SCOPE"}</span><h3>{zh ? "LED 模块与光学引擎" : "LED modules & light engines"}</h3><p>{zh ? "适合正在定义光源子组件的 OEM 团队。把目标应用和机械、电气、散热及验证边界交给工程评审。" : "For OEM teams defining a light-source subassembly. Scope the target application together with mechanical, electrical, thermal and validation constraints."}</p><ul><li>{zh ? "应用 / 工作距离与光学目标" : "Application, working distance and optical target"}</li><li>{zh ? "安装空间、供电 / 控制及散热限制" : "Envelope, power / control and thermal limits"}</li></ul><a href="#modules">{zh ? "浏览模块产品" : "Browse module programs"}<ArrowUpRight size={16}/></a></article></div></section>
    {groups.map((group) => <section className="section product-family-section" id={group === "semiconductor" ? "semiconductors" : "modules"} key={group}><div className="section-heading"><p className="eyebrow">{group === "semiconductor" ? (zh ? "半导体产品" : "SEMICONDUCTORS") : (zh ? "模块与光学引擎" : "MODULES & LIGHT ENGINES")}</p><h2>{group === "semiconductor" ? (zh ? "选择发光器件" : "Select the emitter platform") : (zh ? "定义集成项目" : "Define the integration program")}</h2></div><div className="product-family-grid">{productFamilies.filter((item) => item.group === group).map((item, index) => <article key={item.slug}><a className="family-card-link" href={`${basePath}${prefix}/products/${item.slug}`}><figure><Image src={`${basePath}${item.image}`} alt={item.imageAlt[lang]} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"/></figure><span>0{index + 1}</span><p className="eyebrow">{item.eyebrow[lang]}</p><h3>{item.name[lang]}</h3><p>{item.summary[lang]}</p><strong>{zh ? "查看参数与询价" : "View specifications & inquire"}<ArrowUpRight size={16}/></strong></a></article>)}</div></section>)}
    <section className="product-hub-cta"><div><p className="eyebrow">{zh ? "不确定如何选型？" : "NOT SURE WHICH PLATFORM FITS?"}</p><h2>{zh ? "告诉我们应用和目标参数。" : "Send the application and target specifications."}</h2><p>{zh ? "李思澄将协助确认产品系列、目录资料、样品或定制项目路径。" : "Li Sicheng will help identify the product family, catalog documents, sample path or custom-program route."}</p></div><a className="button" href={`https://wa.me/8615595903230?text=${encodeURIComponent(zh ? "您好，我需要中能芯光产品选型支持。" : "Hello, I need help selecting a CECL Photonics product.")}`} target="_blank" rel="noreferrer"><MessageCircle size={18}/>{zh ? "获取选型支持" : "Get selection support"}</a></section>
  </main>;
}

export function ProductDetail({ product, lang }: { product: ProductFamily; lang: ProductLang }) {
  const zh = lang === "zh";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const prefix = zh ? "/zh" : "";
  const path = `${prefix}/products/${product.slug}`;
  const url = `${siteOrigin}${path}`;
  const mailSubject = encodeURIComponent(`CECL inquiry: ${product.name.en}`);
  const inquiryText = encodeURIComponent(zh ? `您好，我想咨询${product.name.zh}，需要确认型号、参数、样品和报价。` : `Hello, I am interested in ${product.name.en}. Please help confirm the model, specifications, sample and quotation.`);
  const inquiryFields = zh
    ? ["姓名", "邮箱（企业邮箱优先）", "公司", "电话 / WhatsApp", "产品 / 服务", "目标市场", "型号、参数、数量与时间计划"]
    : ["Name", "Email (business preferred)", "Company", "Phone / WhatsApp", "Product / service", "Target market", "Model, specifications, quantity and timeline"];
  const inquiryOptions = [zh ? "选择产品" : "Select product", product.name[lang]];
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "ProductGroup", "@id": `${url}#product`, name: product.name[lang], description: product.summary[lang], image: `${siteOrigin}${product.image}`, category: product.group === "semiconductor" ? "Photonic semiconductor" : "Optical module", manufacturer: { "@type": "Organization", "@id": `${siteOrigin}/#organization`, name: "CECL Photonics" }, url },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: zh ? "首页" : "Home", item: `${siteOrigin}${prefix || "/"}` },
      { "@type": "ListItem", position: 2, name: zh ? "产品中心" : "Products", item: `${siteOrigin}${prefix}/products` },
      { "@type": "ListItem", position: 3, name: product.name[lang], item: url }
    ] }
  ] };
  return <main className="product-detail">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Header lang={lang} alternate={`${zh ? "" : "/zh"}/products/${product.slug}`} />
    <section className="product-detail-hero"><div><a className="back-link" href={`${basePath}${prefix}/products`}><ArrowLeft size={15}/>{zh ? "全部产品" : "All products"}</a><p className="eyebrow">{product.eyebrow[lang]}</p><h1>{product.name[lang]}</h1><p className="product-summary">{product.summary[lang]}</p><div className="product-hero-actions"><a className="button" href={`https://wa.me/8615595903230?text=${inquiryText}`} target="_blank" rel="noreferrer"><MessageCircle size={18}/>{zh ? "索取型号、样品与报价" : "Request model, sample & quote"}</a>{product.catalog && <a className="text-link" href={`${basePath}${product.catalog}`} target="_blank" rel="noreferrer"><Download size={17}/>{zh ? "查看产品目录" : "View product catalog"}</a>}</div></div><aside><figure><Image src={`${basePath}${product.image}`} alt={product.imageAlt[lang]} fill priority sizes="(max-width: 900px) 100vw, 34vw"/><figcaption>{zh ? "原创品类示意图 · 实际外观以样品及图纸为准" : "Original category visualization · confirm appearance against samples and drawings"}</figcaption></figure><span>{zh ? "适用方向" : "APPLICATION FIT"}</span>{product.applications[lang].map((item) => <strong key={item}>{item}</strong>)}</aside></section>
    {product.slug === "vcsel-chips" && <section className="section vcsel-use-cases"><div className="section-heading split"><div><p className="eyebrow">{zh ? "按应用筛选" : "START WITH THE APPLICATION"}</p><h2>{zh ? "先匹配感知任务，再评估器件。" : "Match the sensing task before shortlisting an emitter."}</h2></div><p>{zh ? "以下方向来自 CECL 现有 VCSEL 目录。所列波长是候选系列，不代表完整传感器或设备的已验证性能。" : "These paths reflect applications in CECL's supplied VCSEL catalog. Wavelengths identify candidate families—not verified performance of a complete sensor or device."}</p></div><div className="vcsel-use-case-grid">{vcselUseCases.map((item) => <article key={item.title.en}><span>{item.wavelengths}</span><h3>{item.title[lang]}</h3><p>{item.body[lang]}</p><div><a href="#product-inquiry">{zh ? "提交应用需求" : "Share application requirements"}<ArrowUpRight size={15}/></a>{item.insight && <a href={`${basePath}${prefix}/insights/vcsel-robot-vacuum-obstacle-sensing`}>{zh ? "查看避障工程指南" : "Read obstacle-sensing guide"}<ArrowUpRight size={15}/></a>}</div></article>)}</div></section>}
    <section className="product-conversion-proof"><div><span>{zh ? "参数依据" : "DATA BASIS"}</span><strong>{zh ? "2025 Q2 产品目录" : "2025 Q2 product catalogs"}</strong></div><div><span>{zh ? "采购支持" : "BUYER SUPPORT"}</span><strong>{zh ? "型号、样品与项目评审" : "Model, sample & project review"}</strong></div><div><span>{zh ? "直接联系" : "DIRECT CONTACT"}</span><strong>{zh ? "李思澄 · 企业邮箱与 WhatsApp" : "Li Sicheng · business email & WhatsApp"}</strong></div></section>
    <section className="section product-review"><div className="section-heading split"><div><p className="eyebrow">{zh ? "选型与项目评审" : "SELECTION & PROJECT REVIEW"}</p><h2>{zh ? "先确认约束，再锁定型号或架构。" : "Define constraints before fixing a model or architecture."}</h2></div><p>{zh ? "以下是首次沟通需要确认的关键输入。定制模块不使用未经项目验证的通用参数。" : "These are the inputs needed for the first review. Custom modules do not use generic specifications that have not been validated for the project."}</p></div><div className="review-grid">{product.reviewItems[lang].map((item, index) => <article key={item}><span>0{index + 1}</span><Check size={18}/><h3>{item}</h3></article>)}</div></section>
    <section className="section representative-data"><div className="section-heading"><p className="eyebrow">{zh ? "代表性目录数据" : "REPRESENTATIVE CATALOG DATA"}</p><h2>{product.samples.length ? (zh ? "用于初步筛选，不替代正式数据表。" : "For initial screening—not a substitute for the model datasheet.") : (zh ? "参数按项目定义。" : "Specifications are project-defined.")}</h2></div>{product.group === "semiconductor" && <figure className="package-lineup"><Image src={`${basePath}/products/visuals/wafer-package-lineup.webp`} alt={zh ? "晶圆、裸芯片及多种封装尺寸原创选型示意图" : "Original selection visualization of wafer, bare dies and multiple package sizes"} fill sizes="(max-width: 900px) 100vw, 88vw"/><figcaption>{zh ? "尺寸与封装选型示意 · 具体型号以目录、图纸与样品为准" : "Size and package selection visualization · verify the exact model against catalog, drawing and sample"}</figcaption></figure>}{product.samples.length ? <div className="spec-table" role="table">{product.samples.map((sample, index) => <article role="row" key={`${sample.model}-${index}`}><div><small>{zh ? "型号 / 系列" : "MODEL / FAMILY"}</small><strong>{sample.model}</strong></div><div><small>{zh ? "应用" : "APPLICATION"}</small><strong>{sample.application[lang]}</strong></div><div><small>{zh ? "测试电流" : "TEST CURRENT"}</small><strong>{sample.drive}</strong></div><div><small>{zh ? "代表性输出" : "REPRESENTATIVE OUTPUT"}</small><strong>{sample.output[lang]}</strong></div><div><small>{zh ? "其他目录信息" : "OTHER CATALOG DATA"}</small><strong>{sample.detail[lang]}</strong></div></article>)}</div> : <div className="project-defined"><p>{zh ? "本系列为定制项目框架。波长、光功率、尺寸、散热、控制、接口与验证范围将在需求评审后形成项目规格。" : "This family is a custom-program framework. Wavelength, optical output, dimensions, thermal design, controls, interfaces and validation scope become a project specification after review."}</p></div>}
      <p className="data-notice">{zh ? "提示：以上参数摘自现有 2025 Q2 目录中的代表性条目。采购、设计导入或对外声明前，必须以具体型号的最新数据表和书面确认结果为准。" : "Notice: figures above are representative entries from the supplied 2025 Q2 catalogs. Before purchasing, design-in or making external claims, verify the exact model against its current datasheet and written confirmation."}</p>
      {product.relatedInsights?.map((slug) => { const insight = getInsight(slug); return insight && <a className="product-related-insight" href={`${basePath}${prefix}/insights/${slug}`} key={slug}><span>{zh ? "应用工程指南" : "APPLICATION ENGINEERING GUIDE"}</span><strong>{insight.title[lang]}</strong><span>{zh ? "了解系统架构与选型输入 →" : "Review system architecture and selection inputs →"}</span></a>; })}
      {product.catalog && <a className="button catalog-cta" href={`${basePath}${product.catalog}`} target="_blank" rel="noreferrer"><Download size={17}/>{product.catalogLabel?.[lang]}</a>}
    </section>
    <section className="product-contact"><div><p className="eyebrow">{zh ? "发起选型或项目" : "START A SELECTION OR PROJECT"}</p><h2>{zh ? "把应用、关键参数和目标市场发给我们。" : "Send the application, key parameters and destination market."}</h2><p>{zh ? "联系人：李思澄。我们会先确认信息范围，再提供型号、样品或项目评审路径。" : "Contact: Li Sicheng. We will define the information scope before proposing a model, sample or project-review path."}</p></div><div className="product-contact-actions"><a className="button" href={`mailto:sales@ceclphotonics.com?subject=${mailSubject}`}><Mail size={18}/>sales@ceclphotonics.com</a><a className="text-link" href={`https://wa.me/8615595903230?text=${inquiryText}`} target="_blank" rel="noreferrer"><MessageCircle size={18}/>WhatsApp · +86 15595903230</a></div></section>
    <section className="product-rfq" id="product-inquiry"><div className="product-rfq-copy"><p className="eyebrow">{zh ? "专属询价表" : "PRODUCT-SPECIFIC RFQ"}</p><h2>{zh ? `咨询${product.name.zh}` : `Request ${product.name.en}`}</h2><p>{zh ? "表单已预选当前产品。提交后会先发送至中能芯光企业邮箱，然后继续到 WhatsApp。" : "The current product is preselected. The RFQ is first accepted by the CECL business mailbox, then continues to WhatsApp."}</p></div><InquiryForm lang={lang} fields={inquiryFields} options={inquiryOptions} defaultProjectType={product.name[lang]} submit={zh ? "发送产品询价" : "Send product RFQ"}/></section>
    <a className="product-quick-contact" href={`https://wa.me/8615595903230?text=${inquiryText}`} target="_blank" rel="noreferrer" aria-label={zh ? `通过 WhatsApp 咨询${product.name.zh}` : `Inquire about ${product.name.en} on WhatsApp`}><MessageCircle size={19}/><span>{zh ? "询价 / 样品" : "Quote / sample"}</span></a>
  </main>;
}
