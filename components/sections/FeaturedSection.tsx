"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { GlassCard, GlassBadge } from "@/components/ui/GlassCard";
import { getFeaturedResources, getCategoryName, getSubcategoryName } from "@/lib/resources";
import { cn } from "@/lib/utils";

export function FeaturedSection() {
  const { t, locale } = useLanguage();
  const featured = getFeaturedResources();

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12"
        >
          <div>
            <GlassBadge variant="success" className="mb-3">
              ⭐ {t("featured.title")}
            </GlassBadge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                {locale === "zh-CN" ? "精选资源推荐" : "Featured Resources"}
              </span>
            </h2>
          </div>
          <Link href="/resources">
            <GlassCard hover className="px-6 py-3 flex items-center gap-2 cursor-pointer">
              <span>{t("featured.viewAll")}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </GlassCard>
          </Link>
        </motion.div>

        {/* Featured Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/resources/${resource.slug}`}>
                <GlassCard hover className="h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={cn(
                      "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg",
                      resource.category === "mobile" && "from-blue-500 to-cyan-400",
                      resource.category === "web" && "from-purple-500 to-pink-400",
                      resource.category === "design" && "from-orange-500 to-yellow-400"
                    )}>
                      {resource.title.charAt(0)}
                    </div>
                    <GlassBadge variant="default">
                      {getSubcategoryName(resource.subcategory, locale)}
                    </GlassBadge>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 line-clamp-1">
                    {locale === "zh-CN" ? resource.title : resource.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                    {locale === "zh-CN" ? resource.description : resource.descriptionEn}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
                      <span className="text-sm text-muted-foreground">{resource.author}</span>
                    </div>
                    <span className="text-xs text-muted-foreground/60">
                      {resource.dateAdded}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {resource.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs bg-white/10 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
