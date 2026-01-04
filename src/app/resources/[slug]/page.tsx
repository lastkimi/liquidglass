import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getResourceBySlug, getResourcesByCategory, resources } from "@/lib/resources";
import { ResourcePageClient } from "./ResourcePageClient";

interface ResourcePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return notFound();
  }

  return {
    title: resource.title,
    description: resource.description,
    openGraph: {
      title: resource.title,
      description: resource.description,
      type: "article",
      authors: [resource.author],
    },
  };
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return notFound();
  }

  const relatedResources = getResourcesByCategory(resource.category)
    .filter((r) => r.id !== resource.id)
    .slice(0, 4);

  return (
    <ResourcePageClient
      resource={resource}
      relatedResources={relatedResources}
    />
  );
}
