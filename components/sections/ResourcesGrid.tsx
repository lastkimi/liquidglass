"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { GlassCard, GlassBadge, GlassInput } from "@/components/ui/GlassCard";
import { resources, getCategoryName, getSubcategoryName, Category } from "@/lib/resources";
import { cn } from "@/lib/utils";
import { Search, Filter, ArrowRight } from "lucide-react";

const sortOptions = [
  { key: "newest", label: "最新" },
  { key: "popular", label: "最热" },
  { key: "name", label: "名称" },
];

export function ResourcesGrid() {
  const { t, locale } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [sortBy, setSortBy] = useState("newest");

  const filteredResources = resources
    .filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = activeCategory === "all" || resource.category === activeCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      }
      if (sortBy === "popular") {
        return b.tags.length - a.tags.length;
      }
      return a.title.localeCompare(b.title);
    });

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <GlassBadge variant="default" className="mb-3">
            📚 {t("resources.title")}
          </GlassBadge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              {locale === "zh-CN" ? "全部资源列表" : "All Resources"}
            </span>
          </h2>
          <p className="text-muted-foreground">
            {locale === "zh-CN" 
              ? `共 ${resources.length} 个优质资源等你探索`
              : `Explore ${resources.length} high-quality resources`
            }
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search and Sort */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <GlassInput
                placeholder={t("nav.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12"
              />
            </div>
            
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="glass px-4 py-3 rounded-xl bg-white/10 border-white/20 cursor-pointer outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.key} value={option.key} className="bg-background">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === "all"
                  ? "bg-foreground text-background"
                  : "glass hover:bg-white/20"
              )}
            >
              全部 ({resources.length})
            </button>
            {(["mobile", "web", "design"] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "glass hover:bg-white/20"
                )}
              >
                {getCategoryName(cat, locale)} ({resources.filter((r) => r.category === cat).length})
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link href={`/resources/${resource.slug}`}>
                <GlassCard hover className="h-full flex flex-col group">
                  {/* Category indicator */}
                  <div className={cn(
                    "absolute top-0 left-0 w-1 h-full rounded-l-2xl",
                    resource.category === "mobile" && "bg-gradient-to-b from-blue-500 to-cyan-400",
                    resource.category === "web" && "bg-gradient-to-b from-purple-500 to-pink-400",
                    resource.category === "design" && "bg-gradient-to-b from-orange-500 to-yellow-400"
                  )} />

                  {/* Header */}
                  <div className="pl-3">
                    <div className="flex items-center gap-2 mb-3">
                      <GlassBadge variant="default" className="text-xs">
                        {getSubcategoryName(resource.subcategory, locale)}
                      </GlassBadge>
                      {resource.featured && (
                        <GlassBadge variant="warning" className="text-xs">
                          ⭐ 精选
                        </GlassBadge>
                      )}
                    </div>

                    <h3 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-cyan-400 transition-colors">
                      {locale === "zh-CN" ? resource.title : resource.titleEn}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {locale === "zh-CN" ? resource.description : resource.descriptionEn}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
                        <span className="text-xs text-muted-foreground line-clamp-1">
                          {resource.author}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
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
                {locale === "zh-CN"
                  ? "没有找到匹配的资源"
                  : "No matching resources found"
                }
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 text-cyan-400 hover:underline"
              >
                {locale === "zh-CN" ? "清除筛选" : "Clear filters"}
              </button>
            </GlassCard>
          </div>
        )}
      </div>
    </section>
  );
}
