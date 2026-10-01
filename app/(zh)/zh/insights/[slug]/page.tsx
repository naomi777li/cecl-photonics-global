import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightArticle } from "@/components/insight-article";
import { getInsight, insights } from "@/lib/insights";

export function generateStaticParams() { return insights.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getInsight(slug);
  if (!item) return {};
  return { title: `${item.title.zh}｜中能芯光`, description: item.description.zh, alternates: { canonical: `/zh/insights/${slug}`, languages: { en: `/insights/${slug}`, "zh-CN": `/zh/insights/${slug}` } }, openGraph: { title: item.title.zh, description: item.description.zh, type: "article", publishedTime: item.date, url: `/zh/insights/${slug}` } };
}

export default async function ZhInsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getInsight(slug);
  if (!item) notFound();
  return <InsightArticle insight={item} lang="zh" />;
}
