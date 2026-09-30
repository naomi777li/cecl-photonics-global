"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, Check, LoaderCircle } from "lucide-react";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Lang = "en" | "zh";

export function InquiryForm({ lang, fields, options, submit }: { lang: Lang; fields: string[]; options: string[]; submit: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const isZh = lang === "zh";

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = new FormData(event.currentTarget);
    const projectType = String(form.get("type") || "");
    const targetMarket = String(form.get("market") || "");
    const phone = String(form.get("phone") || "");
    const lines = [
      "CECL Photonics B2B inquiry",
      `Name: ${form.get("name") || ""}`,
      `Business email: ${form.get("email") || ""}`,
      `Company: ${form.get("company") || ""}`,
      `Phone / WhatsApp: ${phone}`,
      `Project type: ${projectType}`,
      `Target market: ${targetMarket}`,
      `Requirements: ${form.get("requirements") || ""}`,
    ];
    const inquiry = Object.fromEntries(form.entries());
    const whatsappUrl = `https://wa.me/8615595903230?text=${encodeURIComponent(lines.join("\n"))}`;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...inquiry,
          _subject: `New CECL inquiry · ${projectType || "B2B project"} · ${String(form.get("company") || "Unknown company")}`,
          _template: "table",
          source_page: window.location.href,
          referrer: document.referrer || "Direct / unavailable",
          language: lang,
          submitted_at_utc: new Date().toISOString(),
        }),
      });
      const result = await response.json().catch(() => ({})) as { ok?: boolean; delivered?: boolean };
      if (!response.ok || result.ok !== true || result.delivered !== true) throw new Error("Submission was not delivered");

      window.gtag?.("event", "generate_lead", { lead_source: "website_inquiry", project_type: projectType, target_market: targetMarket, page_path: window.location.pathname });
      setStatus("success");
      window.setTimeout(() => {
        window.location.assign(whatsappUrl);
      }, 900);
    } catch {
      setStatus("error");
    }
  }

  return <form className="rfq" onSubmit={submitInquiry} aria-busy={status === "submitting"}>
    <div className="field-row"><label>{fields[0]}<Input required name="name" autoComplete="name"/></label><label>{fields[1]}<Input required type="email" name="email" autoComplete="email"/></label></div>
    <div className="field-row"><label>{fields[2]}<Input required name="company" autoComplete="organization"/></label><label>{fields[3]}<Input name="phone" type="tel" autoComplete="tel" placeholder={isZh ? "+国家代码 手机号" : "+country code number"}/></label></div>
    <div className="field-row"><label>{fields[4]}<NativeSelect required name="type" defaultValue="" className="form-select">{options.map((x,i) => <NativeSelectOption key={x} value={i ? x : ""} disabled={!i}>{x}</NativeSelectOption>)}</NativeSelect></label><label>{fields[5]}<Input name="market" placeholder={isZh ? "国家 / 地区" : "Country / region"}/></label></div>
    <label>{fields[6]}<Textarea required name="requirements" rows={5} placeholder={isZh ? "应用、产品/型号、波长、封装、预计数量、时间计划……" : "Application, product/model, wavelength, package, estimated quantity, timeline…"}/></label>
    <label className="honeypot" aria-hidden="true">Leave this field empty<Input name="_honey" tabIndex={-1} autoComplete="off"/></label>
    <label className="privacy-consent"><input required type="checkbox" name="privacy_consent" value="Accepted"/><span>{isZh ? "我同意按照" : "I agree to the"} <a href={isZh ? "/zh/privacy/" : "/privacy/"} target="_blank">{isZh ? "隐私说明" : "privacy notice"}</a>{isZh ? "处理本次询盘信息。" : " for processing this inquiry."}</span></label>
    <button className="button submit" type="submit" disabled={status === "submitting"} data-analytics-event="generate_lead">{status === "submitting" ? <><LoaderCircle className="spin" size={18}/>{isZh ? "正在安全提交……" : "Submitting securely…"}</> : submit}</button>
    {status === "idle" && <p className="form-note">{isZh ? "提交后将邮件发送并在服务器留档，然后打开预填的 WhatsApp 项目简报。" : "The inquiry is emailed and archived on the server before a prefilled WhatsApp project brief opens."}</p>}
    {status === "success" && <p className="form-success" role="status"><Check size={16}/><span>{isZh ? "询盘已发送到企业邮箱并留档，正在前往 WhatsApp……" : "Inquiry emailed and archived. Opening WhatsApp…"}</span></p>}
    {status === "error" && <p className="form-error" role="alert"><AlertCircle size={16}/><span>{isZh ? "暂时无法安全保存询盘，请稍后重试，或直接通过 WhatsApp / 邮件联系。" : "The inquiry could not be stored securely. Please retry or contact us by WhatsApp or email."}</span></p>}
  </form>;
}
