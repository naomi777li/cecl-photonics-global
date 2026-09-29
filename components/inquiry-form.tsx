"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Lang = "en" | "zh";

export function InquiryForm({ lang, fields, options, submit }: { lang: Lang; fields: string[]; options: string[]; submit: string }) {
  const [prepared, setPrepared] = useState(false);
  const isZh = lang === "zh";

  function prepareInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const projectType = String(form.get("type") || "");
    const targetMarket = String(form.get("market") || "");
    const lines = [
      "CECL Photonics B2B inquiry",
      `Name: ${form.get("name") || ""}`,
      `Business email: ${form.get("email") || ""}`,
      `Company: ${form.get("company") || ""}`,
      `Project type: ${projectType}`,
      `Target market: ${targetMarket}`,
      `Requirements: ${form.get("requirements") || ""}`,
    ];
    window.gtag?.("event", "generate_lead", { lead_source: "website_inquiry", project_type: projectType, target_market: targetMarket, page_path: window.location.pathname });
    window.open(`https://wa.me/8615595903230?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    setPrepared(true);
  }

  return <form className="rfq" onSubmit={prepareInquiry}>
    <div className="field-row"><label>{fields[0]}<Input required name="name" autoComplete="name"/></label><label>{fields[1]}<Input required type="email" name="email" autoComplete="email"/></label></div>
    <div className="field-row"><label>{fields[2]}<Input required name="company" autoComplete="organization"/></label><label>{fields[3]}<NativeSelect required name="type" defaultValue="" className="form-select">{options.map((x,i) => <NativeSelectOption key={x} value={i ? x : ""} disabled={!i}>{x}</NativeSelectOption>)}</NativeSelect></label></div>
    <label>{fields[4]}<Input name="market" placeholder={isZh ? "国家 / 地区" : "Country / region"}/></label>
    <label>{fields[5]}<Textarea name="requirements" rows={5} placeholder={isZh ? "应用、波长、封装、采购阶段、时间计划……" : "Application, wavelength, package, volume stage, timeline…"}/></label>
    <button className="button submit" type="submit" data-analytics-event="generate_lead">{submit}</button>
    <p className={prepared ? "form-success" : "form-note"}>{prepared && <Check size={16}/>}<span>{prepared ? (isZh ? "已在 WhatsApp 打开项目简报；请检查后发送。" : "Your project brief is open in WhatsApp. Review it before sending.") : (isZh ? "提交后将在 WhatsApp 打开预填的项目简报，不会自动发送。" : "Submitting opens a prefilled project brief in WhatsApp; it is not sent automatically.")}</span></p>
  </form>;
}
