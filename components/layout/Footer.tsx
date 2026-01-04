import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

const categories = [
  {
    name: "移动开发",
    nameEn: "Mobile Development",
    href: "/mobile",
    items: ["iOS", "Android", "React Native", "Flutter", "Jetpack Compose"]
  },
  {
    name: "Web开发",
    nameEn: "Web Development",
    href: "/web",
    items: ["React", "Vue", "Tailwind CSS", "CSS"]
  },
  {
    name: "设计资源",
    nameEn: "Design Resources",
    href: "/design",
    items: ["Figma", "Framer", "Webflow"]
  }
];

const resources = [
  {
    name: "feature-liquidglass",
    href: "/resources/feature-liquidglass",
    desc: "HTML/CSS 基础玻璃效果"
  },
  {
    name: "vue-liquid-glass",
    href: "/resources/vue-liquid-glass",
    desc: "Vue 3 玻璃组件库"
  },
  {
    name: "react-magic-ui",
    href: "/resources/react-magic-ui",
    desc: "React 魔法UI组件"
  },
  {
    name: "apple-liquid-glass-android",
    href: "/resources/apple-liquid-glass-android",
    desc: "Android 玻璃效果"
  },
  {
    name: "liquid-glass-ui",
    href: "/resources/liquid-glass-ui",
    desc: "React + Tailwind UI"
  },
  {
    name: "tailwind-css-liquid-glass",
    href: "/resources/tailwind-css-liquid-glass",
    desc: "Tailwind CSS 插件"
  }
];

export function Footer() {
  const { t, locale } = useLanguage();

  return (
    <footer className="relative mt-20 border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 backdrop-blur-md flex items-center justify-center border border-white/20">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500" />
              </div>
              <span className="text-lg font-bold">Liquid Glass</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              {locale === "zh-CN" 
                ? "精选的 Liquid Glass 效果实现资源集合，帮助开发者创建精美的玻璃拟态界面。"
                : "Curated collection of Liquid Glass effect implementations to help developers create beautiful glassmorphism interfaces."
              }
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">
              {locale === "zh-CN" ? "资源分类" : "Categories"}
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link 
                    href={cat.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {locale === "zh-CN" ? cat.name : cat.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Resources */}
          <div>
            <h3 className="font-semibold mb-4">
              {locale === "zh-CN" ? "热门资源" : "Popular Resources"}
            </h3>
            <ul className="space-y-2">
              {resources.map((res) => (
                <li key={res.href}>
                  <Link 
                    href={res.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors line-clamp-1"
                  >
                    {res.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">
              {locale === "zh-CN" ? "关于我们" : "About"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.submit")}
                </Link>
              </li>
              <li>
                <Link 
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.sponsor")}
                </Link>
              </li>
              <li>
                <Link 
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  隐私政策
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ for Liquid Glass lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
