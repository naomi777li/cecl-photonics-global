import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CommercialPageView } from "@/components/commercial-page";
import { commercialPages, getCommercialPage } from "@/lib/growth-model";

export function generateStaticParams() { return commercialPages.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getCommercialPage(slug);
  if (!page) return {};
  return {
    title: page.title.zh,
    description: page.description.zh,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    alternates: { canonical: `/zh/solutions/${slug}`, languages: { en: `/solutions/${slug}`, "zh-CN": `/zh/solutions/${slug}`, "x-default": `/solutions/${slug}` } },
    openGraph: { title: page.title.zh, description: page.description.zh, url: `/zh/solutions/${slug}`, type: "website", locale: "zh_CN" },
  };
}

export default async function ZhCommercialSolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getCommercialPage(slug);
  if (!page) notFound();
  return <CommercialPageView page={page} lang="zh" />;
}

