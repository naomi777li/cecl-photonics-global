import { ArrowLeft, ArrowUpRight, Check, Download, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import { productFamilies, type ProductFamily, type ProductLang } from "@/lib/product-catalog";
import { BrandLogo } from "@/components/brand-logo";

const siteOrigin = "https://ceclphotonics.com";

function Header({ lang, alternate }: { lang: ProductLang; alternate: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return <header className="article-header"><BrandLogo href={`${basePath}${lang === "zh" ? "/zh/" : "/"}`} /><a className="article-lang" href={`${basePath}${alternate}`}>{lang === "zh" ? "EN" : "中文"}</a></header>;
}

export function ProductIndex({ lang }: { lang: ProductLang }) {
  const zh = lang === "zh";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const prefix = zh ? "/zh" : "";
  const groups = ["semiconductor", "module"] as const;
  return <main className="product-hub">
    <Header lang={lang} alternate={`${zh ? "" : "/zh"}/products/`} />
    <section className="product-hub-hero"><p className="eyebrow">{zh ? "产品中心" : "PRODUCT PLATFORM"}</p><h1>{zh ? "从发光芯片到应用光学引擎。" : "From emitter die to application-ready light engines."}</h1><p>{zh ? "按采购任务浏览产品。公开参数来自现有产品目录；定制模块参数需在项目评审后确认。" : "Browse by sourcing task. Published figures come from the supplied catalogs; custom-module parameters are confirmed through project review."}</p></section>
    {groups.map((group) => <section className="section product-family-section" key={group}><div className="section-heading"><p className="eyebrow">{group === "semiconductor" ? (zh ? "半导体产品" : "SEMICONDUCTORS") : (zh ? "模块与光学引擎" : "MODULES & LIGHT ENGINES")}</p><h2>{group === "semiconductor" ? (zh ? "选择发光器件" : "Select the emitter platform") : (zh ? "定义集成项目" : "Define the integration program")}</h2></div><div className="product-family-grid">{productFamilies.filter((item) => item.group === group).map((item, index) => <article key={item.slug}><figure><Image src={`${basePath}${item.image}`} alt={item.imageAlt[lang]} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"/></figure><span>0{index + 1}</span><p className="eyebrow">{item.eyebrow[lang]}</p><h3>{item.name[lang]}</h3><p>{item.summary[lang]}</p><a href={`${basePath}${prefix}/products/${item.slug}/`}>{zh ? "查看产品详情" : "View product details"}<ArrowUpRight size={16}/></a></article>)}</div></section>)}
  </main>;
}

export function ProductDetail({ product, lang }: { product: ProductFamily; lang: ProductLang }) {
  const zh = lang === "zh";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const prefix = zh ? "/zh" : "";
  const path = `${prefix}/products/${product.slug}/`;
  const url = `${siteOrigin}${path}`;
  const mailSubject = encodeURIComponent(`CECL inquiry: ${product.name.en}`);
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "ProductGroup", "@id": `${url}#product`, name: product.name[lang], description: product.summary[lang], image: `${siteOrigin}${product.image}`, category: product.group === "semiconductor" ? "Photonic semiconductor" : "Optical module", manufacturer: { "@type": "Organization", "@id": `${siteOrigin}/#organization`, name: "CECL Photonics" }, url },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: zh ? "首页" : "Home", item: `${siteOrigin}${prefix}/` },
      { "@type": "ListItem", position: 2, name: zh ? "产品中心" : "Products", item: `${siteOrigin}${prefix}/products/` },
      { "@type": "ListItem", position: 3, name: product.name[lang], item: url }
    ] }
  ] };
  return <main className="product-detail">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Header lang={lang} alternate={`${zh ? "" : "/zh"}/products/${product.slug}/`} />
    <section className="product-detail-hero"><div><a className="back-link" href={`${basePath}${prefix}/products/`}><ArrowLeft size={15}/>{zh ? "全部产品" : "All products"}</a><p className="eyebrow">{product.eyebrow[lang]}</p><h1>{product.name[lang]}</h1><p>{product.summary[lang]}</p></div><aside><figure><Image src={`${basePath}${product.image}`} alt={product.imageAlt[lang]} fill priority sizes="(max-width: 900px) 100vw, 34vw"/><figcaption>{zh ? "原创品类示意图 · 实际外观以样品及图纸为准" : "Original category visualization · confirm appearance against samples and drawings"}</figcaption></figure><span>{zh ? "适用方向" : "APPLICATION FIT"}</span>{product.applications[lang].map((item) => <strong key={item}>{item}</strong>)}</aside></section>
    <section className="section product-review"><div className="section-heading split"><div><p className="eyebrow">{zh ? "选型与项目评审" : "SELECTION & PROJECT REVIEW"}</p><h2>{zh ? "先确认约束，再锁定型号或架构。" : "Define constraints before fixing a model or architecture."}</h2></div><p>{zh ? "以下是首次沟通需要确认的关键输入。定制模块不使用未经项目验证的通用参数。" : "These are the inputs needed for the first review. Custom modules do not use generic specifications that have not been validated for the project."}</p></div><div className="review-grid">{product.reviewItems[lang].map((item, index) => <article key={item}><span>0{index + 1}</span><Check size={18}/><h3>{item}</h3></article>)}</div></section>
    <section className="section representative-data"><div className="section-heading"><p className="eyebrow">{zh ? "代表性目录数据" : "REPRESENTATIVE CATALOG DATA"}</p><h2>{product.samples.length ? (zh ? "用于初步筛选，不替代正式数据表。" : "For initial screening—not a substitute for the model datasheet.") : (zh ? "参数按项目定义。" : "Specifications are project-defined.")}</h2></div>{product.samples.length ? <div className="spec-table" role="table">{product.samples.map((sample, index) => <article role="row" key={`${sample.model}-${index}`}><div><small>{zh ? "型号 / 系列" : "MODEL / FAMILY"}</small><strong>{sample.model}</strong></div><div><small>{zh ? "应用" : "APPLICATION"}</small><strong>{sample.application[lang]}</strong></div><div><small>{zh ? "测试电流" : "TEST CURRENT"}</small><strong>{sample.drive}</strong></div><div><small>{zh ? "代表性输出" : "REPRESENTATIVE OUTPUT"}</small><strong>{sample.output[lang]}</strong></div><div><small>{zh ? "其他目录信息" : "OTHER CATALOG DATA"}</small><strong>{sample.detail[lang]}</strong></div></article>)}</div> : <div className="project-defined"><p>{zh ? "本系列为定制项目框架。波长、光功率、尺寸、散热、控制、接口与验证范围将在需求评审后形成项目规格。" : "This family is a custom-program framework. Wavelength, optical output, dimensions, thermal design, controls, interfaces and validation scope become a project specification after review."}</p></div>}
      <p className="data-notice">{zh ? "提示：以上参数摘自现有 2025 Q2 目录中的代表性条目。采购、设计导入或对外声明前，必须以具体型号的最新数据表和书面确认结果为准。" : "Notice: figures above are representative entries from the supplied 2025 Q2 catalogs. Before purchasing, design-in or making external claims, verify the exact model against its current datasheet and written confirmation."}</p>
      {product.catalog && <a className="button catalog-cta" href={`${basePath}${product.catalog}`} target="_blank" rel="noreferrer"><Download size={17}/>{product.catalogLabel?.[lang]}</a>}
    </section>
    <section className="product-contact"><div><p className="eyebrow">{zh ? "发起选型或项目" : "START A SELECTION OR PROJECT"}</p><h2>{zh ? "把应用、关键参数和目标市场发给我们。" : "Send the application, key parameters and destination market."}</h2><p>{zh ? "联系人：李思澄。我们会先确认信息范围，再提供型号、样品或项目评审路径。" : "Contact: Li Sicheng. We will define the information scope before proposing a model, sample or project-review path."}</p></div><div className="product-contact-actions"><a className="button" href={`mailto:sales@ceclphotonics.com?subject=${mailSubject}`}><Mail size={18}/>sales@ceclphotonics.com</a><a className="text-link" href={`https://wa.me/8615595903230?text=${encodeURIComponent(`CECL inquiry: ${product.name.en}`)}`} target="_blank" rel="noreferrer"><MessageCircle size={18}/>WhatsApp · +86 15595903230</a></div></section>
  </main>;
}
