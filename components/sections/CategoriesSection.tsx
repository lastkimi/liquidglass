"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { GlassCard, GlassBadge } from "@/components/ui/GlassCard";
import { getCategoryName } from "@/lib/resources";
import { cn } from "@/lib/utils";

const categories = [
  {
    key: "mobile",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-400",
    subcategories: ["iOS", "Android", "React Native", "Flutter", "Jetpack Compose"],
  },
  {
    key: "web",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    gradient: "from-purple-500 to-pink-400",
    subcategories: ["React", "Vue", "Tailwind CSS", "CSS"],
  },
  {
    key: "design",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    gradient: "from-orange-500 to-yellow-400",
    subcategories: ["Figma", "Framer", "Webflow"],
  },
];

export function CategoriesSection() {
  const { t, locale } = useLanguage();

  return (
    <section id="categories" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <GlassBadge variant="default" className="mb-4">
            {t("categories.title")}
          </GlassBadge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              {locale === "zh-CN" ? "探索各类资源" : "Explore Categories"}
            </span>
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/${category.key}`}>
                <GlassCard hover className="h-full min-h-[300px] relative overflow-hidden group">
                  {/* Background gradient */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br",
                    category.gradient
                  )} />

                  {/* Icon */}
                  <div className={cn(
                    "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 text-white",
                    category.gradient
                  )}>
                    {category.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-2">
                    {getCategoryName(category.key as any, locale)}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {category.subcategories.join(" • ")}
                  </p>

                  {/* Subcategories */}
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.slice(0, 4).map((sub) => (
                      <span
                        key={sub}
                        className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/20"
                      >
                        {sub}
                      </span>
                    ))}
                    {category.subcategories.length > 4 && (
                      <span className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/20">
                        +{category.subcategories.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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
