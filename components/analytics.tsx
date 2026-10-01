"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Each independent site must use its own GA4 property. Do not provide a
// cross-site fallback: analytics stays disabled until CECL's build-time ID is
// configured in its own deployment environment.
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";

function text(value: string | undefined | null) {
  return value?.trim().slice(0, 100) || undefined;
}

export function Analytics() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("a,button") : null;
      if (!target || !window.gtag) return;
      const href = target instanceof HTMLAnchorElement ? target.href : "";
      const explicit = target.dataset.analyticsEvent;
      let eventName = explicit;
      const parameters: Record<string, string | undefined> = {
        link_text: text(target.textContent),
        page_path: window.location.pathname,
        content_type: target.dataset.contentType,
        content_id: target.dataset.contentId,
        method: target.dataset.method,
        intent: target.dataset.intent || target.closest<HTMLElement>("[data-intent]")?.dataset.intent,
        persona: target.closest<HTMLElement>("[data-persona]")?.dataset.persona,
      };
      if (!eventName && href.includes("wa.me/")) { eventName = "contact"; parameters.method = "whatsapp"; }
      if (!eventName && href.startsWith("tel:")) { eventName = "contact"; parameters.method = "phone"; }
      if (!eventName && href.includes("/documents/")) { eventName = "view_document"; parameters.document_name = href.split("/").pop(); }
      if (!eventName && href.includes("/solutions/")) { eventName = "select_content"; parameters.content_type = "commercial_solution"; parameters.content_id = href.split("/solutions/")[1]?.replaceAll("/", ""); }
      if (!eventName && href.includes("/insights/")) { eventName = "select_content"; parameters.content_type = "article"; parameters.content_id = href.split("/insights/")[1]?.replaceAll("/", ""); }
      if (eventName) window.gtag("event", eventName, parameters);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!measurementId) return null;

  return <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
    <Script id="ga4-configuration" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', '${measurementId}', { send_page_view: true });
    `}</Script>
  </>;
}
