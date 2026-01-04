"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/layout/Footer";
import { GlassCard, GlassBadge, GlassButton } from "@/components/ui/GlassCard";
import { DefaultDemo } from "@/components/demos/DefaultDemo";
import { CodeExampleDemo } from "@/components/demos/CodeExampleDemo";
import { Resource, getCategoryName, getSubcategoryName } from "@/lib/resources";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Tag,
  Code,
  Eye,
  Copy,
  Check
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";

interface ResourcePageClientProps {
  resource: Resource;
  relatedResources: Resource[];
}

// Dynamic demo component loader
function useDemoComponent(demoComponentName: string) {
  const [DemoComponent, setDemoComponent] = useState<React.ComponentType<any> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const demoMapping: Record<string, () => Promise<any>> = {
          ReactMagicUIDemo: () => import("@/components/demos/ReactMagicUIDemo").then(mod => mod.ReactMagicUIDemo),
          LiquidGlassUIDemo: () => import("@/components/demos/LiquidGlassUIDemo").then(mod => mod.LiquidGlassUIDemo),
          CreativomaGlassDemo: () => import("@/components/demos/CreativomaGlassDemo").then(mod => mod.CreativomaGlassDemo),
          ReactTailwindGlassDemo: () => import("@/components/demos/ReactTailwindGlassDemo").then(mod => mod.ReactTailwindGlassDemo),
          GlassUIDemo: () => import("@/components/demos/GlassUIDemo").then(mod => mod.GlassUIDemo),
          FrostedGlassDemo: () => import("@/components/demos/FrostedGlassDemo").then(mod => mod.FrostedGlassReactDemo),
          FrostedGlassReactDemo: () => import("@/components/demos/FrostedGlassDemo").then(mod => mod.FrostedGlassReactDemo),
          GlassmorphismKitDemo: () => import("@/components/demos/GlassUIDemo").then(mod => mod.GlassmorphismKitDemo),
          ClearGlassDemo: () => import("@/components/demos/FrostedGlassDemo").then(mod => mod.CrystalDemo),
          IceGlassDemo: () => import("@/components/demos/FrostedGlassDemo").then(mod => mod.IceGlassDemo),
          CrystalDemo: () => import("@/components/demos/FrostedGlassDemo").then(mod => mod.CrystalDemo),
          VueLiquidDemo: () => import("@/components/demos/VueLiquidDemo").then(mod => mod.VueLiquidDemo),
          VueGlassMorphismDemo: () => import("@/components/demos/VueTailwindCSSDemo").then(mod => mod.VueGlassMorphismDemo),
          TailwindPluginDemo: () => import("@/components/demos/TailwindPluginDemo").then(mod => mod.TailwindPluginDemo),
          TailwindGlassmorphismDemo: () => import("@/components/demos/VueTailwindCSSDemo").then(mod => mod.TailwindGlassmorphismDemo),
          TailwindFrostedDemo: () => import("@/components/demos/VueTailwindCSSDemo").then(mod => mod.TailwindGlassmorphismDemo),
          TailwindBlurDemo: () => import("@/components/demos/VueTailwindCSSDemo").then(mod => mod.TailwindGlassmorphismDemo),
          TailwindBackdropDemo: () => import("@/components/demos/VueTailwindCSSDemo").then(mod => mod.TailwindGlassmorphismDemo),
          TailwindAcrylicDemo: () => import("@/components/demos/VueTailwindCSSDemo").then(mod => mod.TailwindGlassmorphismDemo),
          TailwindGlassDemo: () => import("@/components/demos/VueTailwindCSSDemo").then(mod => mod.TailwindGlassmorphismDemo),
          TailwindFrostDemo: () => import("@/components/demos/VueTailwindCSSDemo").then(mod => mod.TailwindGlassmorphismDemo),
          WaterDemo: () => import("@/components/demos/WaterDemo").then(mod => mod.WaterDemo),
          GlawinduiDemo: () => import("@/components/demos/GlawinduiDemo").then(mod => mod.GlawinduiDemo),
          FeatureLiquidDemo: () => import("@/components/demos/FeatureLiquidDemo").then(mod => mod.FeatureLiquidDemo),
          AppleGlassUIDemo: () => import("@/components/demos/AppleGlassUIDemo").then(mod => mod.AppleGlassUIDemo),
          AppleSwitcherDemo: () => import("@/components/demos/AppleGlassUIDemo").then(mod => mod.AppleGlassUIDemo),
          UserCardDemo: () => import("@/components/demos/FeatureLiquidDemo").then(mod => mod.FeatureLiquidDemo),
          CSSGlassmorphismDemo: () => import("@/components/demos/VueTailwindCSSDemo").then(mod => mod.CSSGlassmorphismDemo),
          CSSBackdropDemo: () => import("@/components/demos/VueTailwindCSSDemo").then(mod => mod.CSSGlassmorphismDemo),
          GlassCardCSSDemo: () => import("@/components/demos/VueTailwindCSSDemo").then(mod => mod.CSSGlassmorphismDemo),
          AnimatedGlassCSSDemo: () => import("@/components/demos/VueTailwindCSSDemo").then(mod => mod.CSSGlassmorphismDemo),
          FlutterNavbarDemo: () => import("@/components/demos/FlutterNavbarDemo").then(mod => mod.FlutterNavbarDemo),
          OneClientDemo: () => import("@/components/demos/OneClientDemo").then(mod => mod.OneClientDemo),
          FlutterGlassmorphismDemo: () => import("@/components/demos/MobilePlatformDemo").then(mod => mod.FlutterGlassmorphismDemo),
          FlutterFrostedDemo: () => import("@/components/demos/MobilePlatformDemo").then(mod => mod.FlutterGlassmorphismDemo),
          FlutterAcrylicDemo: () => import("@/components/demos/MobilePlatformDemo").then(mod => mod.FlutterGlassmorphismDemo),
          FlutterContainerDemo: () => import("@/components/demos/MobilePlatformDemo").then(mod => mod.FlutterGlassmorphismDemo),
          AndroidAppleGlassDemo: () => import("@/components/demos/AndroidAppleGlassDemo").then(mod => mod.AndroidAppleGlassDemo),
          AndroidGlassmorphismDemo: () => import("@/components/demos/MobilePlatformDemo").then(mod => mod.AndroidGlassmorphismDemo),
          AndroidFrostedDemo: () => import("@/components/demos/MobilePlatformDemo").then(mod => mod.AndroidGlassmorphismDemo),
          AndroidBlurDemo: () => import("@/components/demos/MobilePlatformDemo").then(mod => mod.AndroidGlassmorphismDemo),
          DSKitDemo: () => import("@/components/demos/MobilePlatformDemo").then(mod => mod.iOSGlassmorphismDemo),
          iOSGlassmorphismDemo: () => import("@/components/demos/MobilePlatformDemo").then(mod => mod.iOSGlassmorphismDemo),
          SwiftUIGlassDemo: () => import("@/components/demos/MobilePlatformDemo").then(mod => mod.iOSGlassmorphismDemo),
          iOSBlurDemo: () => import("@/components/demos/MobilePlatformDemo").then(mod => mod.iOSGlassmorphismDemo),
          ReactNativeGlassDemo: () => import("@/components/demos/ReactNativeGlassDemo").then(mod => mod.ReactNativeGlassDemo),
          RNGlassmorphismDemo: () => import("@/components/demos/MobileDemos").then(mod => mod.ReactNativeGlassDemo),
          RNBlurDemo: () => import("@/components/demos/MobileDemos").then(mod => mod.ReactNativeGlassDemo),
          ComposeGlassDemo: () => import("@/components/demos/ComposeGlassDemo").then(mod => mod.ComposeGlassDemo),
          ComposeGlassmorphismDemo: () => import("@/components/demos/MobileDemos").then(mod => mod.ComposeGlassmorphismDemo),
          ComposeBlurDemo: () => import("@/components/demos/MobileDemos").then(mod => mod.ComposeGlassmorphismDemo),
          FigmaGlassDemo: () => import("@/components/demos/DesignResourcesDemo").then(mod => mod.FigmaGlassDemo),
          FigmaCardsDemo: () => import("@/components/demos/DesignResourcesDemo").then(mod => mod.FigmaGlassDemo),
          FigmaUIKitDemo: () => import("@/components/demos/DesignResourcesDemo").then(mod => mod.FigmaGlassDemo),
          FramerAnimationDemo: () => import("@/components/demos/DesignResourcesDemo").then(mod => mod.FramerAnimationDemo),
          FramerGlassmorphismDemo: () => import("@/components/demos/DesignResourcesDemo").then(mod => mod.FramerAnimationDemo),
          FramerCardsDemo: () => import("@/components/demos/DesignResourcesDemo").then(mod => mod.FramerAnimationDemo),
          InteractiveGlassFramerDemo: () => import("@/components/demos/DesignResourcesDemo").then(mod => mod.FramerAnimationDemo),
          WebflowGlassDemo: () => import("@/components/demos/DesignResourcesDemo").then(mod => mod.WebflowTemplateDemo),
          WebflowGlassmorphismDemo: () => import("@/components/demos/DesignResourcesDemo").then(mod => mod.WebflowTemplateDemo),
          WebflowCardsDemo: () => import("@/components/demos/DesignResourcesDemo").then(mod => mod.WebflowTemplateDemo),
        };

        const loadFn = demoMapping[demoComponentName];
        if (loadFn) {
          const mod = await loadFn();
          const Component = mod.default || mod[Object.keys(mod)[0]];
          if (Component) {
            setDemoComponent(() => Component);
          }
        }
      } catch (error) {
        console.error("Failed to load demo component:", error);
      } finally {
        setLoading(false);
      }
    };

    loadComponent();
  }, [demoComponentName]);

  return { DemoComponent, loading };
}

export function ResourcePageClient({ resource, relatedResources }: ResourcePageClientProps) {
  const { t, locale } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Demo component loader
  const { DemoComponent, loading } = useDemoComponent(resource.demoComponent);
  
  // Get sample code for demo
  const sampleCode = useMemo(() => getSampleCode(resource), [resource]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link href={`/${resource.category}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>
              {locale === "zh-CN"
                ? `返回 ${getCategoryName(resource.category, "zh-CN")}`
                : `Back to ${getCategoryName(resource.category, "en")}`
              }
            </span>
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <GlassBadge variant="default">
                    {getSubcategoryName(resource.subcategory, locale)}
                  </GlassBadge>
                  {resource.featured && (
                    <GlassBadge variant="warning">⭐ 精选资源</GlassBadge>
                  )}
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                  {locale === "zh-CN" ? resource.title : resource.titleEn}
                </h1>

                <p className="text-lg text-muted-foreground mb-6">
                  {locale === "zh-CN" ? resource.description : resource.descriptionEn}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{resource.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{resource.dateAdded}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    <GlassButton className="gap-2">
                      <Github className="w-5 h-5" />
                      {locale === "zh-CN" ? "查看源码" : "View Source"}
                      <ExternalLink className="w-4 h-4" />
                    </GlassButton>
                  </a>
                </div>
              </motion.div>

              {/* Live Demo Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <GlassCard className="overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-cyan-400" />
                      <h2 className="text-xl font-bold">
                        {locale === "zh-CN" ? "实时演示" : "Live Demo"}
                      </h2>
                    </div>
                  </div>

                  {/* Demo Component - Always use code example to show the actual effect */}
                  <div className="relative min-h-[400px] rounded-xl overflow-hidden">
                    <CodeExampleDemo
                      resource={resource}
                      code={sampleCode}
                    />
                  </div>
                </GlassCard>
              </motion.div>

              {/* Code Example */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <GlassCard>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <Code className="w-5 h-5 text-purple-400" />
                      {locale === "zh-CN" ? "代码示例" : "Code Example"}
                    </h2>
                    <button
                      onClick={() => copyToClipboard(getSampleCode(resource))}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass hover:bg-white/20 transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      <span className="text-sm">{copied ? "已复制" : "复制"}</span>
                    </button>
                  </div>

                  <pre className="p-4 rounded-xl bg-black/50 overflow-x-auto">
                    <code className="text-sm text-gray-300">{getSampleCode(resource)}</code>
                  </pre>
                </GlassCard>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Info Card */}
              <GlassCard>
                <h3 className="font-bold mb-4">
                  {locale === "zh-CN" ? "资源信息" : "Resource Info"}
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-muted-foreground mb-1">
                      {locale === "zh-CN" ? "分类" : "Category"}
                    </dt>
                    <dd>{getCategoryName(resource.category, locale)}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground mb-1">
                      {locale === "zh-CN" ? "子分类" : "Subcategory"}
                    </dt>
                    <dd>{getSubcategoryName(resource.subcategory, locale)}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground mb-1">
                      {locale === "zh-CN" ? "作者" : "Author"}
                    </dt>
                    <dd>{resource.author}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground mb-1">
                      {locale === "zh-CN" ? "添加日期" : "Date Added"}
                    </dt>
                    <dd>{resource.dateAdded}</dd>
                  </div>
                </dl>
              </GlassCard>

              {/* Tags */}
              <GlassCard>
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {locale === "zh-CN" ? "标签" : "Tags"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>

              {/* Related Resources */}
              {relatedResources.length > 0 && (
                <GlassCard>
                  <h3 className="font-bold mb-4">
                    {locale === "zh-CN" ? "相关资源" : "Related Resources"}
                  </h3>
                  <div className="space-y-3">
                    {relatedResources.map((related) => (
                      <Link
                        key={related.id}
                        href={`/resources/${related.slug}`}
                        className="block p-3 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <h4 className="font-medium line-clamp-1 mb-1">
                          {locale === "zh-CN" ? related.title : related.titleEn}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {locale === "zh-CN" ? related.description : related.descriptionEn}
                        </p>
                      </Link>
                    ))}
                  </div>
                </GlassCard>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Sample code generator - 使用我们网站上的组件库
function getSampleCode(resource: Resource): string {
  // 预定义的代码示例 - 使用我们网站上的组件库
  const codes: Record<string, string> = {
    // React 组件库
    "react-magic-ui": `import { GlassCard, GlassButton } from '@/components/ui/GlassCard';

function MyComponent() {
  return (
    <GlassCard hover>
      <h2>Liquid Glass Card</h2>
      <p>Beautiful glassmorphism effect</p>
      <GlassButton variant="primary">
        Click Me
      </GlassButton>
    </GlassCard>
  );
}`,
    "liquid-glass-ui": `import { GlassCard, GlassButton } from '@/components/ui/GlassCard';

function App() {
  return (
    <GlassCard hover glow>
      <h2>Liquid Glass UI</h2>
      <p>A beautiful glassmorphism component library</p>
      <GlassButton variant="primary">
        Get Started
      </GlassButton>
    </GlassCard>
  );
}`,
    "creativoma-liquid-glass": `import { GlassCard, GlassButton } from '@/components/ui/GlassCard';

function Component() {
  return (
    <GlassCard hover>
      <h2>Creativoma Glass</h2>
      <p>React + Tailwind CSS implementation</p>
      <GlassButton variant="primary">
        Learn More
      </GlassButton>
    </GlassCard>
  );
}`,
    "glass-ui-react": `import { GlassCard, GlassButton } from '@/components/ui/GlassCard';

function GlassCardExample() {
  return (
    <GlassCard hover>
      <h2>Glass UI React</h2>
      <p>Glassmorphism UI component library for React</p>
      <GlassButton variant="primary">
        Explore
      </GlassButton>
    </GlassCard>
  );
}`,
    "react-glass-effect": `import { GlassCard, GlassButton } from '@/components/ui/GlassCard';

function App() {
  return (
    <GlassCard hover>
      <h2>React Glass Effect</h2>
      <p>Beautiful glass effects for React</p>
      <GlassButton variant="primary">
        Try It
      </GlassButton>
    </GlassCard>
  );
}`,
    "glassify-react": `import { GlassCard, GlassButton } from '@/components/ui/GlassCard';

function GlassifyDemo() {
  return (
    <GlassCard hover>
      <h2>Glassify</h2>
      <p>Modern glassmorphism for React</p>
      <GlassButton variant="primary">
        Demo
      </GlassButton>
    </GlassCard>
  );
}`,
    "zen-glass": `import { GlassCard, GlassButton } from '@/components/ui/GlassCard';

function ZenGlassDemo() {
  return (
    <GlassCard hover>
      <h2>Zen Glass</h2>
      <p>Zen-like glassmorphism components</p>
      <GlassButton variant="primary">
        View Demo
      </GlassButton>
    </GlassCard>
  );
}`,
    "nebula-glass": `import { GlassCard, GlassButton } from '@/components/ui/GlassCard';

function NebulaGlassDemo() {
  return (
    <GlassCard hover glow>
      <h2>Nebula Glass</h2>
      <p>Cosmic glassmorphism effects</p>
      <GlassButton variant="primary">
        Explore
      </GlassButton>
    </GlassCard>
  );
}`,
    "transparent-ui": `import { GlassCard, GlassButton } from '@/components/ui/GlassCard';

function TransparentUIDemo() {
  return (
    <GlassCard hover>
      <h2>Transparent UI</h2>
      <p>Transparent and glass-like components</p>
      <GlassButton variant="primary">
        Get Started
      </GlassButton>
    </GlassCard>
  );
}`,
    "frost-react": `import { GlassCard, GlassButton } from '@/components/ui/GlassCard';

function FrostReactDemo() {
  return (
    <GlassCard hover>
      <h2>Frost React</h2>
      <p>Frosted glass effects for React</p>
      <GlassButton variant="primary">
        View Demo
      </GlassButton>
    </GlassCard>
  );
}`,
    "glass-pane": `import { GlassCard, GlassButton } from '@/components/ui/GlassCard';

function GlassPaneDemo() {
  return (
    <GlassCard hover>
      <h2>Glass Pane</h2>
      <p>Glass pane effect components</p>
      <GlassButton variant="primary">
        Try It
      </GlassButton>
    </GlassCard>
  );
}`,
    "acrylic-react": `import { GlassCard, GlassButton } from '@/components/ui/GlassCard';

function AcrylicReactDemo() {
  return (
    <GlassCard hover>
      <h2>Acrylic React</h2>
      <p>Acrylic material design for React</p>
      <GlassButton variant="primary">
        Learn More
      </GlassButton>
    </GlassCard>
  );
}`,
    "frosted-kit": `import { GlassCard, GlassButton } from '@/components/ui/GlassCard';

function FrostedKitDemo() {
  return (
    <GlassCard hover>
      <h2>Frosted Kit</h2>
      <p>Complete frosted glass component kit</p>
      <GlassButton variant="primary">
        Get Started
      </GlassButton>
    </GlassCard>
  );
}`,
    "glassmorphism-official": `import { GlassCard, GlassButton } from '@/components/ui/GlassCard';

function GlassmorphismOfficialDemo() {
  return (
    <GlassCard hover>
      <h2>Glassmorphism Official</h2>
      <p>Official glassmorphism implementation</p>
      <GlassButton variant="primary">
        Demo
      </GlassButton>
    </GlassCard>
  );
}`,
    
    // Vue 组件库
    "vue-liquid-glass": `<template>
  <GlassCard hover>
    <h2>Liquid Glass Card</h2>
    <p>Beautiful glassmorphism effect</p>
    <GlassButton variant="primary">
      Click Me
    </GlassButton>
  </GlassCard>
</template>

<script setup>
import { GlassCard, GlassButton } from '@/components/ui/GlassCard';
</script>`,
    "vue-glassmorphism": `<template>
  <GlassCard hover>
    <h2>Vue Glassmorphism</h2>
    <p>Glassmorphism for Vue.js</p>
    <GlassButton variant="primary">
      View Demo
    </GlassButton>
  </GlassCard>
</template>

<script setup>
import { GlassCard, GlassButton } from '@/components/ui/GlassCard';
</script>`,
    "vue-frosted": `<template>
  <GlassCard hover>
    <h2>Vue Frosted</h2>
    <p>Frosted glass effects for Vue</p>
    <GlassButton variant="primary">
      Try It
    </GlassButton>
  </GlassCard>
</template>

<script setup>
import { GlassCard, GlassButton } from '@/components/ui/GlassCard';
</script>`,
    "vue-glass-ui": `<template>
  <GlassCard hover>
    <h2>Vue Glass UI</h2>
    <p>Glass UI components for Vue</p>
    <GlassButton variant="primary">
      Get Started
    </GlassButton>
  </GlassCard>
</template>

<script setup>
import { GlassCard, GlassButton } from '@/components/ui/GlassCard';
</script>`,
    "vue-acrylic": `<template>
  <GlassCard hover>
    <h2>Vue Acrylic</h2>
    <p>Acrylic material design for Vue</p>
    <GlassButton variant="primary">
      Demo
    </GlassButton>
  </GlassCard>
</template>

<script setup>
import { GlassCard, GlassButton } from '@/components/ui/GlassCard';
</script>`,
    "vue-clear-glass": `<template>
  <GlassCard hover>
    <h2>Vue Clear Glass</h2>
    <p>Clear glass effects for Vue</p>
    <GlassButton variant="primary">
      View Demo
    </GlassButton>
  </GlassCard>
</template>

<script setup>
import { GlassCard, GlassButton } from '@/components/ui/GlassCard';
</script>`,
    "vue-glass-card": `<template>
  <GlassCard hover>
    <h2>Vue Glass Card</h2>
    <p>Beautiful glass cards for Vue</p>
    <GlassButton variant="primary">
      Explore
    </GlassButton>
  </GlassCard>
</template>

<script setup>
import { GlassCard, GlassButton } from '@/components/ui/GlassCard';
</script>`,
    "nuxt-glass": `<template>
  <GlassCard hover>
    <h2>Nuxt Glass</h2>
    <p>Glassmorphism for Nuxt.js</p>
    <GlassButton variant="primary">
      Get Started
    </GlassButton>
  </GlassCard>
</template>

<script setup>
import { GlassCard, GlassButton } from '@/components/ui/GlassCard';
</script>`,
    
    // Tailwind CSS
    "tailwind-css-liquid-glass": `@tailwind components;

<div class="glass-card hover:glass-effect">
  <h2>Liquid Glass Card</h2>
  <p>Beautiful glassmorphism effect</p>
  <button class="glass-button">
    Click Me
  </button>
</div>`,
    "tailwind-glassmorphism": `@tailwind components;

<div class="glass-card hover:glass-effect">
  <h2>Tailwind Glassmorphism</h2>
  <p>Glassmorphism plugin for Tailwind CSS</p>
  <button class="glass-button">
    View Demo
  </button>
</div>`,
    "tailwind-frosted-glass": `@tailwind components;

<div class="glass-card hover:glass-effect">
  <h2>Tailwind Frosted Glass</h2>
  <p>Frosted glass utilities for Tailwind</p>
  <button class="glass-button">
    Try It
  </button>
</div>`,
    "tailwind-blur": `@tailwind components;

<div class="glass-card hover:glass-effect">
  <h2>Tailwind Blur</h2>
  <p>Blur utilities for Tailwind CSS</p>
  <button class="glass-button">
    Demo
  </button>
</div>`,
    "tailwind-backdrop": `@tailwind components;

<div class="glass-card hover:glass-effect">
  <h2>Tailwind Backdrop</h2>
  <p>Backdrop filter utilities</p>
  <button class="glass-button">
    Explore
  </button>
</div>`,
    "tailwind-acrylic": `@tailwind components;

<div class="glass-card hover:glass-effect">
  <h2>Tailwind Acrylic</h2>
  <p>Acrylic material utilities</p>
  <button class="glass-button">
    Get Started
  </button>
</div>`,
    "tailwind-glass": `@tailwind components;

<div class="glass-card hover:glass-effect">
  <h2>Tailwind Glass</h2>
  <p>Glass utilities for Tailwind CSS</p>
  <button class="glass-button">
    View Demo
  </button>
</div>`,
    "tailwind-frost": `@tailwind components;

<div class="glass-card hover:glass-effect">
  <h2>Tailwind Frost</h2>
  <p>Frost effect utilities</p>
  <button class="glass-button">
    Try It
  </button>
</div>`,
    
    // CSS 组件库
    "feature-liquidglass": `<!-- Liquid Glass CSS -->
<div class="glass-effect">
  <h2>Feature Liquid Glass</h2>
  <p>Beautiful liquid glass effect with CSS</p>
</div>

<style>
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
}
</style>`,
    "apple-liquid-glass-android": `<!-- Apple Liquid Glass for Android -->
<div class="glass-effect">
  <h2>Apple Liquid Glass</h2>
  <p>Apple-style glass effect for Android</p>
</div>

<style>
.glass-effect {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
}
</style>`,
    "apple-glass-ui": `<!-- Apple Glass UI -->
<div class="glass-effect">
  <h2>Apple Glass UI</h2>
  <p>Apple-inspired glass interface</p>
</div>

<style>
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 2rem;
}
</style>`,
    "css-glassmorphism": `<!-- CSS Glassmorphism -->
<div class="glass-effect">
  <h2>CSS Glassmorphism</h2>
  <p>Pure CSS glassmorphism effect</p>
</div>

<style>
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
}
</style>`,
    "css-backdrop-filter": `<!-- CSS Backdrop Filter -->
<div class="glass-effect">
  <h2>CSS Backdrop Filter</h2>
  <p>Using backdrop-filter for glass effects</p>
</div>

<style>
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 2rem;
}
</style>`,
    "glass-card-css": `<!-- Glass Card CSS -->
<div class="glass-card">
  <h2>Glass Card</h2>
  <p>A beautiful glass card component</p>
</div>

<style>
.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 2rem;
}
</style>`,
    "animated-glass-css": `<!-- Animated Glass CSS -->
<div class="glass-effect animated">
  <h2>Animated Glass</h2>
  <p>Animated glassmorphism with CSS</p>
</div>

<style>
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
}

.animated {
  animation: shimmer 2s infinite linear;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
</style>`,
    "liquid-glass-for-react-tailwind": `<!-- Liquid Glass for React & Tailwind -->
<div class="glass-effect">
  <h2>Liquid Glass for React & Tailwind</h2>
  <p>专为 React 和 Tailwind CSS 设计的 Liquid Glass 效果组件。</p>
</div>`,
  };

  // 根据资源类型生成代码示例 - 使用我们网站上的组件库
  if (!codes[resource.slug]) {
    // React 组件
    if (resource.subcategory === "react") {
      // 检查资源名称是否包含特定关键词
      if (resource.title.toLowerCase().includes("glass card") || 
          resource.title.toLowerCase().includes("card") ||
          resource.title.toLowerCase().includes("button")) {
        return `import { GlassCard, GlassButton } from '@/components/ui/GlassCard';

function MyComponent() {
  return (
    <GlassCard hover>
      <h2>${resource.title}</h2>
      <p>${resource.description}</p>
      <GlassButton variant="primary">
        Click Me
      </GlassButton>
    </GlassCard>
  );
}`;
      } else {
        return `import { GlassCard } from '@/components/ui/GlassCard';

function MyComponent() {
  return (
    <GlassCard>
      <h2>${resource.title}</h2>
      <p>${resource.description}</p>
    </GlassCard>
  );
}`;
      }
    }
    // Vue 组件
    else if (resource.subcategory === "vue") {
      if (resource.title.toLowerCase().includes("glass card") || 
          resource.title.toLowerCase().includes("card") ||
          resource.title.toLowerCase().includes("button")) {
        return `<template>
  <GlassCard hover>
    <h2>${resource.title}</h2>
    <p>${resource.description}</p>
    <GlassButton variant="primary">
      Click Me
    </GlassButton>
  </GlassCard>
</template>

<script setup>
import { GlassCard, GlassButton } from '@/components/ui/GlassCard';
</script>`;
      } else {
        return `<template>
  <div class="glass-effect">
    <h2>${resource.title}</h2>
    <p>${resource.description}</p>
  </div>
</template>`;
      }
    }
    // Tailwind CSS
    else if (resource.subcategory === "tailwind") {
      return `@tailwind components;

<div class="glass-card hover:glass-effect">
  <h2>${resource.title}</h2>
  <p>${resource.description}</p>
  <button class="glass-button">
    Click Me
  </button>
</div>`;
    }
    // CSS
    else if (resource.subcategory === "css") {
      return `<!-- ${resource.title} -->
<div class="glass-effect">
  <h2>${resource.title}</h2>
  <p>${resource.description}</p>
</div>

<style>
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 2rem;
}
</style>`;
    }
    // 移动端资源
    else if (resource.category === "mobile") {
      if (resource.subcategory === "flutter") {
        return `// ${resource.title}
Container(
  decoration: BoxDecoration(
    color: Colors.white.withOpacity(0.1),
    borderRadius: BorderRadius.circular(16),
    border: Border.all(
      color: Colors.white.withOpacity(0.2),
    ),
  ),
  child: Column(
    children: [
      Text('${resource.title}'),
      Text('${resource.description}'),
    ],
  ),
)`;
      } else if (resource.subcategory === "android" || resource.subcategory === "ios") {
        return `<!-- ${resource.title} -->
<div class="glass-effect">
  <h2>${resource.title}</h2>
  <p>${resource.description}</p>
</div>`;
      } else {
        return `<!-- ${resource.title} -->
<div class="glass-effect">
  <h2>${resource.title}</h2>
  <p>${resource.description}</p>
</div>`;
      }
    }
    // 设计资源
    else if (resource.category === "design") {
      return `<!-- ${resource.title} -->
<div class="glass-effect">
  <h2>${resource.title}</h2>
  <p>${resource.description}</p>
</div>`;
    }
    // 默认HTML
    else {
      return `<!-- ${resource.title} -->
<div class="glass-effect">
  <h2>${resource.title}</h2>
  <p>${resource.description}</p>
</div>`;
    }
  }

  return codes[resource.slug];
}
