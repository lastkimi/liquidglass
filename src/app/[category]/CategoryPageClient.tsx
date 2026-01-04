"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/layout/Footer";
import { GlassCard, GlassBadge, GlassInput } from "@/components/ui/GlassCard";
import { Resource, getCategoryName, getSubcategoryName } from "@/lib/resources";
import { cn } from "@/lib/utils";
import { ArrowLeft, Search, Filter } from "lucide-react";
import { useState } from "react";

interface CategoryPageClientProps {
  category: string;
  resources: Resource[];
}

export function CategoryPageClient({ category, resources }: CategoryPageClientProps) {
  const { t, locale } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSubcategory, setActiveSubcategory] = useState<string>("all");

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubcategory = activeSubcategory === "all" || resource.subcategory === activeSubcategory;
    return matchesSearch && matchesSubcategory;
  });

  const subcategories = [...new Set(resources.map((r) => r.subcategory))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>返回首页</span>
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <GlassBadge variant="default" className="mb-4">
              {getCategoryName(category as any, locale)}
            </GlassBadge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                {locale === "zh-CN"
                  ? `${getCategoryName(category as any, "zh-CN")} 资源`
                  : `${getCategoryName(category as any, "en")} Resources`
                }
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              {locale === "zh-CN"
                ? `共 ${resources.length} 个优质资源等你探索`
                : `Explore ${resources.length} high-quality resources`
              }
            </p>
          </motion.div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <GlassInput
                placeholder={t("nav.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12"
              />
            </div>

            {/* Subcategory Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveSubcategory("all")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeSubcategory === "all"
                    ? "bg-foreground text-background"
                    : "glass hover:bg-white/20"
                )}
              >
                全部 ({resources.length})
              </button>
              {subcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubcategory(sub)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeSubcategory === sub
                      ? "bg-foreground text-background"
                      : "glass hover:bg-white/20"
                  )}
                >
                  {getSubcategoryName(sub, locale)} ({resources.filter((r) => r.subcategory === sub).length})
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/resources/${resource.slug}`}>
                  <GlassCard hover className="h-full group">
                    {/* Category indicator */}
                    <div className={cn(
                      "absolute top-0 left-0 w-1 h-full rounded-l-2xl",
                      category === "mobile" && "bg-gradient-to-b from-blue-500 to-cyan-400",
                      category === "web" && "bg-gradient-to-b from-purple-500 to-pink-400",
                      category === "design" && "bg-gradient-to-b from-orange-500 to-yellow-400"
                    )} />

                    <div className="pl-3">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-3">
                        <GlassBadge variant="default" className="text-xs">
                          {getSubcategoryName(resource.subcategory, locale)}
                        </GlassBadge>
                        {resource.featured && (
                          <GlassBadge variant="warning" className="text-xs">
                            ⭐ 精选
                          </GlassBadge>
                        )}
                      </div>

                      <h3 className="text-xl font-bold mb-2 line-clamp-1 group-hover:text-cyan-400 transition-colors">
                        {locale === "zh-CN" ? resource.title : resource.titleEn}
                      </h3>

                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {locale === "zh-CN" ? resource.description : resource.descriptionEn}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
                          <span className="text-xs text-muted-foreground">{resource.author}</span>
                        </div>
                        <span className="text-xs text-muted-foreground/60">{resource.dateAdded}</span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-3">
                        {resource.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded text-xs bg-white/10 border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredResources.length === 0 && (
            <div className="text-center py-20">
              <GlassCard className="inline-block px-8 py-12">
                <p className="text-muted-foreground text-lg">
                  {locale === "zh-CN" ? "没有找到匹配的资源" : "No matching resources found"}
                </p>
              </GlassCard>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
