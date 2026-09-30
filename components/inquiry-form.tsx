"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, Check, LoaderCircle } from "lucide-react";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Lang = "en" | "zh";
type ApiResult = { ok?: boolean; accepted?: boolean; error?: string; errors?: string[]; fallbackEmail?: string };

const FALLBACK_EMAIL = "sales@ceclphotonics.com";

function track(event: "rfq_submit" | "rfq_submit_error", parameters: Record<string, string>) {
  window.gtag?.("event", event, parameters);
}

export function InquiryForm({ lang, fields, options, submit }: { lang: Lang; fields: string[]; options: string[]; submit: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const isZh = lang === "zh";

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const projectType = String(form.get("type") || "");
    const targetMarket = String(form.get("market") || "");
    const phone = String(form.get("phone") || "");
    const analytics = { project_type: projectType, target_market: targetMarket, page_path: window.location.pathname };
    const lines = [
      "CECL Photonics B2B inquiry",
      `Name: ${form.get("name") || ""}`,
      `Business email: ${form.get("email") || ""}`,
      `Company: ${form.get("company") || ""}`,
      `Phone / WhatsApp: ${phone}`,
      `Product / service: ${projectType}`,
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
          source_page: window.location.href,
          referrer: document.referrer || "Direct / unavailable",
          language: lang,
        }),
      });
      const result = await response.json().catch(() => ({})) as ApiResult;
      if (!response.ok || result.ok !== true || result.accepted !== true) {
        const details = result.errors?.join(" ") || result.error;
        throw new Error(details || (isZh ? "邮件服务未接受本次询盘。" : "The email service did not accept this inquiry."));
      }

      track("rfq_submit", analytics);
      setStatus("success");
      formElement.reset();
      window.setTimeout(() => window.location.assign(whatsappUrl), 1100);
    } catch (error) {
      const details = error instanceof Error ? error.message : "";
      setErrorMessage(details);
      setStatus("error");
      track("rfq_submit_error", { ...analytics, error_type: details ? "api_error" : "network_error" });
    }
  }

  return <form className="rfq" onSubmit={submitInquiry} aria-busy={status === "submitting"}>
    <div className="field-row"><label>{fields[0]}<Input required name="name" autoComplete="name" maxLength={120}/></label><label>{fields[1]}<Input required type="email" name="email" autoComplete="email" inputMode="email" maxLength={200}/></label></div>
    <div className="field-row"><label>{fields[2]}<Input required name="company" autoComplete="organization" maxLength={180}/></label><label>{fields[3]}<Input name="phone" type="tel" autoComplete="tel" maxLength={80} placeholder={isZh ? "+国家代码 手机号" : "+country code number"}/></label></div>
    <div className="field-row"><label>{fields[4]}<NativeSelect required name="type" defaultValue="" className="form-select">{options.map((x,i) => <NativeSelectOption key={x} value={i ? x : ""} disabled={!i}>{x}</NativeSelectOption>)}</NativeSelect></label><label>{fields[5]}<Input name="market" maxLength={180} placeholder={isZh ? "国家 / 地区" : "Country / region"}/></label></div>
    <label>{fields[6]}<Textarea required name="requirements" maxLength={6000} rows={5} placeholder={isZh ? "应用、产品/型号、波长、封装、预计数量、时间计划……" : "Application, product/model, wavelength, package, estimated quantity, timeline…"}/></label>
    <label className="honeypot" aria-hidden="true">Leave this field empty<Input name="_honey" tabIndex={-1} autoComplete="off"/></label>
    <label className="privacy-consent"><input required type="checkbox" name="privacy_consent" value="Accepted"/><span>{isZh ? "我同意按照" : "I agree to the"} <a href={isZh ? "/zh/privacy/" : "/privacy/"} target="_blank">{isZh ? "隐私说明" : "privacy notice"}</a>{isZh ? "处理本次询盘信息。" : " for processing this inquiry."}</span></label>
    <button className="button submit" type="submit" disabled={status === "submitting"}>{status === "submitting" ? <><LoaderCircle className="spin" size={18}/>{isZh ? "正在安全提交……" : "Submitting securely…"}</> : submit}</button>
    {status === "idle" && <p className="form-note">{isZh ? "Hostinger 企业邮箱确认接受后才会显示成功，并继续打开预填的 WhatsApp 项目简报。" : "Success appears only after Hostinger business mail accepts the RFQ, followed by a prefilled WhatsApp project brief."}</p>}
    {status === "success" && <p className="form-success" role="status"><Check size={16}/><span>{isZh ? "询盘已被企业邮箱接受，正在前往 WhatsApp……" : "RFQ accepted by our business mailbox. Opening WhatsApp…"}</span></p>}
    {status === "error" && <p className="form-error" role="alert"><AlertCircle size={16}/><span>{errorMessage ? `${errorMessage} ` : ""}{isZh ? "请重试，或直接发送邮件至 " : "Please retry, or email "}<a href={`mailto:${FALLBACK_EMAIL}`}>{FALLBACK_EMAIL}</a>{isZh ? "。" : "."}</span></p>}
  </form>;
}
