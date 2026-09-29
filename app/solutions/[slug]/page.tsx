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
    title: page.title.en,
    description: page.description.en,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    alternates: { canonical: `/solutions/${slug}`, languages: { en: `/solutions/${slug}`, "zh-CN": `/zh/solutions/${slug}`, "x-default": `/solutions/${slug}` } },
    openGraph: { title: page.title.en, description: page.description.en, url: `/solutions/${slug}`, type: "website" },
  };
}

export default async function CommercialSolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getCommercialPage(slug);
  if (!page) notFound();
  return <CommercialPageView page={page} lang="en" />;
}

