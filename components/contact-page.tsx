import { Check, Mail, MessageCircle, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { InquiryForm } from "@/components/inquiry-form";

type Lang = "en" | "zh";

const copy = {
  en: {
    label: "CONTACT & PROJECT INQUIRY",
    title: "Talk with CECL about your photonics project.",
    intro: "Tell us what you are sourcing or developing. Our team can route chip, VCSEL module and OEM/ODM requirements for a model-specific review.",
    name: "Li Sicheng",
    scope: "Specifications, commercial terms and compliance documents are confirmed for the selected model and destination market.",
    fields: ["Name", "Email (business preferred)", "Company", "Phone / WhatsApp", "Project type", "Target market", "Project requirements"],
    options: ["Select project type", "Semiconductor / chip", "Optical module / light engine", "Medical beauty OEM / ODM", "Distribution partnership"],
    submit: "Send inquiry & continue to WhatsApp",
    back: "Explore products",
  },
  zh: {
    label: "联系与项目询盘",
    title: "与中能芯光沟通您的光电项目。",
    intro: "告诉我们您正在采购或开发的产品。我们会将芯片、VCSEL 模块和 OEM/ODM 需求转入对应型号评审。",
    name: "李思澄",
    scope: "最终规格、商务条款和合规资料，均针对选定型号及目标市场确认。",
    fields: ["姓名", "邮箱（企业邮箱优先）", "公司", "电话 / WhatsApp", "项目类型", "目标市场", "项目需求"],
    options: ["请选择项目类型", "半导体 / 芯片", "光学模块 / 光引擎", "医疗美容 OEM / ODM", "渠道合作"],
    submit: "发送询盘并继续到 WhatsApp",
    back: "浏览产品",
  },
} satisfies Record<Lang, { label: string; title: string; intro: string; name: string; scope: string; fields: string[]; options: string[]; submit: string; back: string }>;

export function ContactPage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = lang === "zh" ? "/zh" : "/";
  const productUrl = lang === "zh" ? "/zh/products" : "/products";
  const alternates = lang === "zh" ? "/contact" : "/zh/contact";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: lang === "zh" ? "联系中能芯光" : "Contact CECL Photonics",
    url: `https://ceclphotonics.com${lang === "zh" ? "/zh/contact" : "/contact"}`,
    mainEntity: {
      "@type": "Organization",
      name: lang === "zh" ? "中能芯光" : "CECL Photonics",
      url: "https://ceclphotonics.com/",
      email: "sales@ceclphotonics.com",
      contactPoint: {
        "@type": "ContactPoint",
        name: t.name,
        telephone: "+86-155-9590-3230",
        email: "sales@ceclphotonics.com",
        contactType: "sales",
        availableLanguage: ["English", "Chinese"],
      },
    },
  };

  return (
    <main className="contact-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="legal-header">
        <BrandLogo href={home} />
        <nav className="contact-page-nav" aria-label={lang === "zh" ? "主导航" : "Main navigation"}>
          <a href={productUrl}>{t.back}</a>
          <a className="article-lang" href={alternates}>{lang === "zh" ? "EN" : "中文"}</a>
        </nav>
      </header>
      <section className="contact contact-page-section">
        <div className="contact-copy">
          <p className="eyebrow">{t.label}</p>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
          <div className="contact-details">
            <p><span>{lang === "zh" ? "联系人" : "CONTACT"}</span><strong>{t.name}</strong></p>
            <a href="mailto:sales@ceclphotonics.com"><Mail size={18} /><span>sales@ceclphotonics.com</span></a>
            <a href="tel:+8615595903230"><Phone size={18} /><span>+86 155 9590 3230</span></a>
            <a href="https://wa.me/8615595903230" target="_blank" rel="noreferrer" data-analytics-event="contact" data-method="whatsapp"><MessageCircle size={18} /><span>WhatsApp · +86 15595903230</span></a>
          </div>
          <div className="contact-note"><Check size={17} /><span>{t.scope}</span></div>
        </div>
        <InquiryForm lang={lang} fields={t.fields} options={t.options} submit={t.submit} />
      </section>
      <footer className="contact-page-footer">
        <BrandLogo href={home} className="footer-logo" />
        <p>{lang === "zh" ? "面向全球 B2B 客户的光电芯片、模块与应用开发平台。" : "Photonics components, modules and application development for global B2B partners."}</p>
        <a href={lang === "zh" ? "/zh/privacy" : "/privacy"}>{lang === "zh" ? "隐私说明" : "Privacy"}</a>
      </footer>
    </main>
  );
}
