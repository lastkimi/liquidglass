"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Locale = "zh-CN" | "en";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<string, string>> = {
  "zh-CN": {
    "nav.home": "首页",
    "nav.mobile": "移动开发",
    "nav.web": "Web开发",
    "nav.design": "设计资源",
    "nav.search": "搜索资源...",
    "nav.toggleTheme": "切换主题",
    "nav.toggleLanguage": "切换语言",
    "hero.title": "Liquid Glass 资源库",
    "hero.subtitle": "精选的 Liquid Glass 效果实现资源集合",
    "hero.description": "探索最新的玻璃拟态设计资源和代码示例，提升您的应用界面设计",
    "hero.cta": "开始探索",
    "categories.title": "资源分类",
    "categories.mobile": "移动开发",
    "categories.mobile.desc": "iOS、Android、React Native、Flutter、Jetpack Compose",
    "categories.web": "Web开发",
    "categories.web.desc": "React、Vue、Tailwind CSS、纯CSS",
    "categories.design": "设计资源",
    "categories.design.desc": "Figma、Framer、Webflow 设计模板",
    "featured.title": "精选资源",
    "featured.viewAll": "查看全部",
    "resources.title": "全部资源",
    "resources.filter": "筛选",
    "resources.sort": "排序",
    "resources.newest": "最新",
    "resources.popular": "最热",
    "resources.items": "个资源",
    "footer.submit": "提交资源",
    "footer.sponsor": "成为赞助商",
    "footer.copyright": "© 2026 Liquid Glass 资源库",
  },
  en: {
    "nav.home": "Home",
    "nav.mobile": "Mobile Development",
    "nav.web": "Web Development",
    "nav.design": "Design Resources",
    "nav.search": "Search resources...",
    "nav.toggleTheme": "Toggle theme",
    "nav.toggleLanguage": "Toggle language",
    "hero.title": "Liquid Glass Resources",
    "hero.subtitle": "Curated collection of Liquid Glass effect implementations",
    "hero.description": "Explore the latest glassmorphism design resources and code examples to enhance your app UI",
    "hero.cta": "Start Exploring",
    "categories.title": "Categories",
    "categories.mobile": "Mobile Development",
    "categories.mobile.desc": "iOS, Android, React Native, Flutter, Jetpack Compose",
    "categories.web": "Web Development",
    "categories.web.desc": "React, Vue, Tailwind CSS, Pure CSS",
    "categories.design": "Design Resources",
    "categories.design.desc": "Figma, Framer, Webflow templates",
    "featured.title": "Featured Resources",
    "featured.viewAll": "View All",
    "resources.title": "All Resources",
    "resources.filter": "Filter",
    "resources.sort": "Sort",
    "resources.newest": "Newest",
    "resources.popular": "Popular",
    "resources.items": "items",
    "footer.submit": "Submit Resource",
    "footer.sponsor": "Become a Sponsor",
    "footer.copyright": "© 2026 Liquid Glass Resources",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ 
  children, 
  defaultLocale = "zh-CN" 
}: { 
  children: ReactNode; 
  defaultLocale?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale;
    if (stored && (stored === "zh-CN" || stored === "en")) {
      setLocale(stored);
    } else {
      const browserLang = navigator.language;
      if (browserLang.startsWith("zh")) {
        setLocale("zh-CN");
      } else {
        setLocale("en");
      }
    }
  }, []);

  const t = (key: string): string => {
    return translations[locale]?.[key] || translations["zh-CN"][key] || key;
  };

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
    document.documentElement.lang = newLocale === "zh-CN" ? "zh-CN" : "en";
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
