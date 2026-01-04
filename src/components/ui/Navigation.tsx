"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ThemeToggle } from "./ThemeToggle";
import { GlassInput } from "./GlassCard";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", labelKey: "nav.home", icon: "home" },
  { href: "/mobile", labelKey: "nav.mobile", icon: "mobile" },
  { href: "/web", labelKey: "nav.web", icon: "web" },
  { href: "/design", labelKey: "nav.design", icon: "design" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t, locale, setLocale } = useLanguage();

  return (
    <nav className="glass-nav sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:border-cyan-400/50 transition-colors">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            </div>
            <span className="hidden sm:block text-lg font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Liquid Glass
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  "hover:bg-white/10",
                  pathname === item.href
                    ? "bg-white/20 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-3 flex-1 max-w-xs ml-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <GlassInput
                placeholder={t("nav.search")}
                className="pl-10"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLocale(locale === "zh-CN" ? "en" : "zh-CN")}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-button text-sm font-medium"
            >
              <span className="text-lg">{locale === "zh-CN" ? "🇨🇳" : "🇺🇸"}</span>
              <span className="hidden lg:inline">{locale === "zh-CN" ? "EN" : "中文"}</span>
            </motion.button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg glass-button"
              aria-label="菜单"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-all",
                      "hover:bg-white/10",
                      pathname === item.href
                        ? "bg-white/20 text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {t(item.labelKey)}
                  </Link>
                ))}
                
                {/* Mobile Search */}
                <div className="px-4 pt-2">
                  <GlassInput
                    placeholder={t("nav.search")}
                    className="w-full"
                  />
                </div>
                
                {/* Mobile Language Toggle */}
                <button
                  onClick={() => {
                    setLocale(locale === "zh-CN" ? "en" : "zh-CN");
                    setIsOpen(false);
                  }}
                  className="w-full mx-4 mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg glass-button text-sm font-medium"
                >
                  <span className="text-lg">{locale === "zh-CN" ? "🇨🇳" : "🇺🇸"}</span>
                  {locale === "zh-CN" ? "切换到 English" : "Switch to 中文"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
