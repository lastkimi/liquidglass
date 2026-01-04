import { Metadata } from "next";
import { notFound } from "next/navigation";
import { resources, getResourcesByCategory, getCategoryName, Category } from "@/lib/resources";
import { CategoryPageClient } from "./CategoryPageClient";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories: Category[] = ["mobile", "web", "design"];
  return categories.map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  
  if (!["mobile", "web", "design"].includes(category)) {
    return notFound();
  }

  const categoryResources = getResourcesByCategory(category as Category);

  return {
    title: `${getCategoryName(category as Category, "zh-CN")} | Liquid Glass 资源库`,
    description: `探索 ${categoryResources.length} 个 Liquid Glass ${getCategoryName(category as Category, "zh-CN")} 资源和组件`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  
  if (!["mobile", "web", "design"].includes(category)) {
    return notFound();
  }

  const categoryResources = getResourcesByCategory(category as Category);

  return <CategoryPageClient category={category as Category} resources={categoryResources} />;
}
