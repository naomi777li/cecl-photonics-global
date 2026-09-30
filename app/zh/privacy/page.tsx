import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "隐私说明｜中能芯光",
  description: "中能芯光如何处理网站分析数据及 B2B 询盘渠道中由访客主动提交的信息。",
  alternates: { canonical: "/zh/privacy", languages: { en: "/privacy", "zh-CN": "/zh/privacy", "x-default": "/privacy" } },
  robots: { index: true, follow: true }
};

export default function ZhPrivacyPage() {
  return <main className="legal-page">
    <header className="legal-header"><BrandLogo href="/zh/" /><Link className="article-lang" href="/privacy/">EN</Link></header>
    <article className="legal-content">
      <p className="eyebrow">网站信息</p><h1>隐私说明</h1><p>更新日期：2026 年 9 月 30 日</p>
      <h2>您主动提供的信息</h2><p>当您提交询盘、通过电话联系或继续前往 WhatsApp 时，可能会提供姓名、公司、联系方式、目标市场及技术需求。企业邮箱询盘通道激活后，询盘会先发送至 sales@ceclphotonics.com，并由表单处理服务留档，再打开预填的 WhatsApp 消息。激活前，表单会直接继续到 WhatsApp，不会建立服务器留档。</p>
      <h2>网站数据分析</h2><p>启用测量 ID 后，我们可能使用 Google Analytics 4。它可能收集设备、浏览器、大致地区、访问来源及互动信息，帮助我们判断哪些产品与技术页面更有价值。本站不会出售个人信息。</p>
      <h2>信息用途</h2><ul><li>回复技术、采购及合作询盘；</li><li>评估产品或 OEM/ODM 要求并安排后续沟通；</li><li>改善网站内容、导航与搜索可见性；</li><li>维护安全并履行适用义务。</li></ul>
      <h2>外部服务与资料</h2><p>通道激活后，Formspree 将负责表单投递，并在所选免费方案中将提交记录最多保存 30 天。WhatsApp 及其他外部托管服务遵循各自的隐私条款。可下载目录与报告用于商务评估，依赖前应核验其内容及型号覆盖范围。</p>
      <h2>保存期限与查询</h2><p>表单处理服务最多保存提交记录 30 天；中能芯光仅在商务沟通、记录保存和适用法律要求所合理需要的期限内保存已收到的询盘信息。如需查询您曾发送的信息，请发送邮件至 <a href="mailto:sales@ceclphotonics.com">sales@ceclphotonics.com</a>，或通过电话、WhatsApp 联系李思澄：+86 15595903230。</p>
      <h2>变更</h2><p>本说明可能随网站、分析配置和联系方式的完善而更新。页面上方日期代表当前版本。</p>
    </article>
  </main>;
}
