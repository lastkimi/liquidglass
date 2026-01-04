"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { GlassButton } from "@/components/ui/GlassCard";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center px-4 py-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Floating glass elements */}
        <div className="absolute top-20 left-10 w-24 h-24 glass rounded-2xl animate-float opacity-50" />
        <div className="absolute bottom-20 right-10 w-20 h-20 glass rounded-2xl animate-float delay-700 opacity-50" />
        <div className="absolute top-1/3 right-20 w-16 h-16 glass rounded-xl animate-float delay-300 opacity-50" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">2026 年最新资源</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground bg-clip-text text-transparent">
              {t("hero.title")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground/70 mb-10 max-w-3xl mx-auto">
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#categories">
              <GlassButton size="lg" className="gap-2">
                {t("hero.cta")}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </GlassButton>
            </Link>
            <GlassButton variant="outline" size="lg" href="/web">
              浏览全部资源
            </GlassButton>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">77+</div>
              <div className="text-sm text-muted-foreground">资源数量</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">3</div>
              <div className="text-sm text-muted-foreground">分类数量</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">6+</div>
              <div className="text-sm text-muted-foreground">平台支持</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-white/50 animate-pulse" />
        </div>
      </div>
    </header>
  );
}
