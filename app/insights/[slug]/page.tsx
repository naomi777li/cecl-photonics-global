import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightArticle } from "@/components/insight-article";
import { getInsight, insights } from "@/lib/insights";

export function generateStaticParams() { return insights.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getInsight(slug);
  if (!item) return {};
  return { title: `${item.title.en} | CECL Photonics`, description: item.description.en, alternates: { canonical: `/insights/${slug}`, languages: { en: `/insights/${slug}`, "zh-CN": `/zh/insights/${slug}` } }, openGraph: { title: item.title.en, description: item.description.en, type: "article", publishedTime: item.date, url: `/insights/${slug}` } };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getInsight(slug);
  if (!item) notFound();
  return <InsightArticle insight={item} lang="en" />;
}
