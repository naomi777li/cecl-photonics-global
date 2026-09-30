import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Privacy Notice | CECL Photonics",
  description: "How CECL Photonics handles website analytics and information submitted through its B2B inquiry channels.",
  alternates: { canonical: "/privacy", languages: { en: "/privacy", "zh-CN": "/zh/privacy", "x-default": "/privacy" } },
  robots: { index: true, follow: true }
};

export default function PrivacyPage() {
  return <main className="legal-page">
    <header className="legal-header"><BrandLogo href="/" /><Link className="article-lang" href="/zh/privacy/">中文</Link></header>
    <article className="legal-content">
      <p className="eyebrow">WEBSITE INFORMATION</p><h1>Privacy notice</h1><p>Last updated: September 30, 2026</p>
      <h2>Information you choose to provide</h2><p>When you submit an inquiry, contact us by phone, or continue to WhatsApp, you may provide your name, company, contact details, target market and technical requirements. The inquiry is processed by CECL&apos;s self-hosted website service, recorded in its protected server archive and sent to sales@ceclphotonics.com through Hostinger business mail before a prepared WhatsApp message opens. Your work email is used as the Reply-To address so CECL can answer you directly.</p>
      <h2>Website measurement</h2><p>We may use Google Analytics 4 after a measurement ID is enabled. It can collect device, browser, approximate location, referral and interaction information so we can understand which product and technical pages are useful. We do not use this website to sell personal information.</p>
      <h2>How information is used</h2><ul><li>Respond to technical, sourcing and partnership inquiries.</li><li>Evaluate product or OEM/ODM requirements and prepare follow-up.</li><li>Improve website content, navigation and search visibility.</li><li>Maintain security and comply with applicable obligations.</li></ul>
      <h2>External services and documents</h2><p>Hostinger processes transactional RFQ delivery and provides CECL&apos;s business mailbox. WhatsApp and other externally hosted services operate under their own privacy terms. Downloadable catalogs and reports are provided for business evaluation; their contents and model coverage should be reviewed before reliance.</p>
      <h2>Retention and requests</h2><p>CECL retains inquiry records only as reasonably needed for the business conversation, record keeping and applicable legal requirements. To ask about information you sent, contact Li Sicheng at <a href="mailto:sales@ceclphotonics.com">sales@ceclphotonics.com</a>, or by phone or WhatsApp at +86 15595903230.</p>
      <h2>Changes</h2><p>This notice may be updated as the website, analytics configuration and contact workflow develop. The date above identifies the current version.</p>
    </article>
  </main>;
}
