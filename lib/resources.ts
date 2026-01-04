export type Category = "mobile" | "web" | "design";
export type Subcategory = 
  | "android" | "ios" | "react-native" | "flutter" | "jetpack-compose"
  | "react" | "vue" | "svelte" | "css" | "tailwind"
  | "figma" | "framer" | "webflow";

export interface Resource {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  author: string;
  authorAvatar?: string;
  category: Category;
  subcategory: Subcategory;
  tags: string[];
  dateAdded: string;
  link: string;
  demoComponent: string;
  featured?: boolean;
}

export const resources: Resource[] = [
  // Web Development - React
  {
    id: "1",
    slug: "react-magic-ui",
    title: "React Magic UI",
    titleEn: "React Magic UI",
    description: "一个包含 Liquid Glass 效果的 React 组件库，提供丰富的动画和交互效果。",
    descriptionEn: "A React component library featuring Liquid Glass effects with rich animations and interactions.",
    author: "tweedlex",
    category: "web",
    subcategory: "react",
    tags: ["React", "Tailwind", "动画", "组件库"],
    dateAdded: "2025-12-08",
    link: "https://github.com/tweedlex/react-magic-ui",
    demoComponent: "ReactMagicUIDemo",
    featured: true,
  },
  {
    id: "2",
    slug: "liquid-glass-ui",
    title: "Liquid Glass UI",
    titleEn: "Liquid Glass UI",
    description: "基于 React + Tailwind + Next.js 的 Liquid Glass UI 组件库。",
    descriptionEn: "A Liquid Glass UI component library built with React, Tailwind, and Next.js.",
    author: "nibilin33",
    category: "web",
    subcategory: "react",
    tags: ["React", "Tailwind", "Next.js", "组件库"],
    dateAdded: "2025-11-21",
    link: "https://github.com/nibilin33/liquid-glass-ui",
    demoComponent: "LiquidGlassUIDemo",
    featured: true,
  },
  {
    id: "3",
    slug: "creativoma-liquid-glass",
    title: "creativoma/liquid-glass",
    titleEn: "creativoma/liquid-glass",
    description: "React + Tailwind CSS 实现的 Liquid Glass 组件库。",
    descriptionEn: "Liquid Glass component library implemented with React and Tailwind CSS.",
    author: "Mariano Álvarez",
    category: "web",
    subcategory: "react",
    tags: ["React", "Tailwind", "开源"],
    dateAdded: "2025-12-08",
    link: "https://github.com/creativoma/liquid-glass",
    demoComponent: "CreativomaGlassDemo",
  },
  {
    id: "4",
    slug: "liquid-glass-for-react-tailwind",
    title: "Liquid Glass for React & Tailwind",
    titleEn: "Liquid Glass for React & Tailwind",
    description: "专为 React 和 Tailwind CSS 设计的 Liquid Glass 效果组件。",
    descriptionEn: "Liquid Glass effect components designed specifically for React and Tailwind CSS.",
    author: "Eunkwang Shin",
    category: "web",
    subcategory: "react",
    tags: ["React", "Tailwind", "效果"],
    dateAdded: "2025-11-21",
    link: "https://github.com/eunkwangs/liquid-glass-react-tailwind",
    demoComponent: "ReactTailwindGlassDemo",
  },

  // Web Development - Vue
  {
    id: "5",
    slug: "vue-liquid-glass",
    title: "vue-liquid-glass",
    titleEn: "vue-liquid-glass",
    description: "Vue 3 平台的 Liquid Glass 组件库，提供声明式的玻璃效果。",
    descriptionEn: "A Vue 3 component library for Liquid Glass effects with declarative API.",
    author: "Daiigu",
    category: "web",
    subcategory: "vue",
    tags: ["Vue 3", "组件库", "TypeScript"],
    dateAdded: "2025-12-08",
    link: "https://github.com/daiigu/vue-liquid-glass",
    demoComponent: "VueLiquidDemo",
    featured: true,
  },

  // Web Development - CSS
  {
    id: "6",
    slug: "feature-liquidglass",
    title: "feature-liquidglass",
    titleEn: "feature-liquidglass",
    description: "纯 HTML/CSS 实现的 Liquid Glass 基础效果，适合学习原理。",
    descriptionEn: "Pure HTML/CSS implementation of basic Liquid Glass effects, perfect for learning the fundamentals.",
    author: "Ander Marlon",
    category: "web",
    subcategory: "css",
    tags: ["HTML", "CSS", "基础"],
    dateAdded: "2025-12-08",
    link: "https://github.com/andermarlon/feature-liquidglass",
    demoComponent: "FeatureLiquidDemo",
  },
  {
    id: "7",
    slug: "apple-liquid-glass-ui-2025",
    title: "Apple Liquid Glass UI (2025)",
    titleEn: "Apple Liquid Glass UI (2025)",
    description: "2025 年最新风格的 Apple 风格 Liquid Glass UI 效果。",
    descriptionEn: "Latest 2025 Apple-style Liquid Glass UI effects.",
    author: "Avaz Bokiev",
    category: "web",
    subcategory: "css",
    tags: ["CSS", "Apple", "设计"],
    dateAdded: "2025-11-21",
    link: "https://github.com/avazbokiev/apple-liquid-glass-ui-2025",
    demoComponent: "AppleGlassUIDemo",
    featured: true,
  },
  {
    id: "8",
    slug: "apple-liquid-glass-witcher",
    title: "Apple Liquid Glass Switcher",
    titleEn: "Apple Liquid Glass Switcher",
    description: "CSS + JavaScript 实现的交互式 Liquid Glass 切换效果。",
    descriptionEn: "Interactive Liquid Glass switcher implemented with CSS + JavaScript.",
    author: "Den Dionigi",
    category: "web",
    subcategory: "css",
    tags: ["CSS", "JavaScript", "交互"],
    dateAdded: "2025-11-21",
    link: "https://github.com/dendionigi/apple-liquid-glass-witcher",
    demoComponent: "AppleSwitcherDemo",
  },
  {
    id: "9",
    slug: "pure-css-apple-liquid-glass-user-card",
    title: "Pure CSS Apple Liquid Glass User Card",
    titleEn: "Pure CSS Apple Liquid Glass User Card",
    description: "纯 CSS 实现的 Apple 风格用户卡片 Liquid Glass 效果。",
    descriptionEn: "Pure CSS implementation of Apple-style user card with Liquid Glass effects.",
    author: "Kumar Anirudha",
    category: "web",
    subcategory: "css",
    tags: ["CSS", "用户卡片", "设计"],
    dateAdded: "2025-11-21",
    link: "https://github.com/kumaranirudha/pure-css-liquid-glass-user-card",
    demoComponent: "UserCardDemo",
  },

  // Web Development - Tailwind
  {
    id: "10",
    slug: "tailwind-css-liquid-glass",
    title: "Tailwind CSS Liquid Glass",
    titleEn: "Tailwind CSS Liquid Glass",
    description: "Tailwind CSS 插件，提供便捷的 Liquid Glass 工具类。",
    descriptionEn: "Tailwind CSS plugin providing convenient Liquid Glass utility classes.",
    author: "Italo Almeida",
    category: "web",
    subcategory: "tailwind",
    tags: ["Tailwind", "插件", "工具类"],
    dateAdded: "2025-11-21",
    link: "https://github.com/italoalmeida/tailwind-css-liquid-glass",
    demoComponent: "TailwindPluginDemo",
    featured: true,
  },
  {
    id: "11",
    slug: "water",
    title: "Water",
    titleEn: "Water",
    description: "基于 Tailwind 的 Liquid Glass 效果演示和组件库。",
    descriptionEn: "Liquid Glass effect demo and component library based on Tailwind.",
    author: "Henry Oman",
    category: "web",
    subcategory: "tailwind",
    tags: ["Tailwind", "演示", "组件库"],
    dateAdded: "2025-11-21",
    link: "https://github.com/henryoman/water",
    demoComponent: "WaterDemo",
  },
  {
    id: "12",
    slug: "glawindui",
    title: "glawindui — Liquid Glass UI",
    titleEn: "glawindui — Liquid Glass UI",
    description: "基于 Tailwind CSS 的 Liquid Glass UI 组件库。",
    descriptionEn: "Liquid Glass UI component library based on Tailwind CSS.",
    author: "Ali Samei",
    category: "web",
    subcategory: "tailwind",
    tags: ["Tailwind", "组件库", "UI"],
    dateAdded: "2025-11-21",
    link: "https://github.com/alisamei/glawindui",
    demoComponent: "GlawinduiDemo",
  },

  // Mobile Development - Android
  {
    id: "13",
    slug: "apple-liquid-glass-android",
    title: "Apple Liquid Glass for Android",
    titleEn: "Apple Liquid Glass for Android",
    description: "在 Android 平台上实现 Apple 风格的 Liquid Glass 效果。",
    descriptionEn: "Apple-style Liquid Glass effects implementation for Android platform.",
    author: "Sid Zadaun",
    category: "mobile",
    subcategory: "android",
    tags: ["Android", "Kotlin", "UI"],
    dateAdded: "2025-12-08",
    link: "https://github.com/sidzadaun/apple-liquid-glass-android",
    demoComponent: "AndroidAppleGlassDemo",
    featured: true,
  },

  // Mobile Development - iOS
  {
    id: "14",
    slug: "dskit",
    title: "DSKit",
    titleEn: "DSKit",
    description: "Swift 实现的 iOS 风格 Liquid Glass 组件库。",
    descriptionEn: "iOS-style Liquid Glass component library implemented in Swift.",
    author: "Norman Sanchez",
    category: "mobile",
    subcategory: "ios",
    tags: ["iOS", "Swift", "组件库"],
    dateAdded: "2025-11-21",
    link: "https://github.com/normansanchez/dskit",
    demoComponent: "DSKitDemo",
  },

  // Mobile Development - React Native
  {
    id: "15",
    slug: "react-native-glass-effect-view",
    title: "react-native-glass-effect-view",
    titleEn: "react-native-glass-effect-view",
    description: "React Native 平台的玻璃效果组件。",
    descriptionEn: "Glass effect component for React Native platform.",
    author: "Thomas Schoffelen",
    category: "mobile",
    subcategory: "react-native",
    tags: ["React Native", "组件", "效果"],
    dateAdded: "2025-11-06",
    link: "https://github.com/thomasschoffelen/react-native-glass-effect-view",
    demoComponent: "ReactNativeGlassDemo",
    featured: true,
  },

  // Mobile Development - Flutter
  {
    id: "16",
    slug: "liquidglass-navbar",
    title: "LiquidGlass NavBar",
    titleEn: "LiquidGlass NavBar",
    description: "Flutter 平台的 Liquid Glass 导航栏组件。",
    descriptionEn: "Liquid Glass navigation bar component for Flutter platform.",
    author: "Zyad Wael",
    category: "mobile",
    subcategory: "flutter",
    tags: ["Flutter", "导航栏", "组件"],
    dateAdded: "2025-12-08",
    link: "https://github.com/zyadwael/liquidglass-navbar",
    demoComponent: "FlutterNavbarDemo",
  },
  {
    id: "17",
    slug: "oneclient",
    title: "OneClient",
    titleEn: "OneClient",
    description: "Flutter 完整应用，展示 Liquid Glass 在实际应用中的使用。",
    descriptionEn: "Complete Flutter app demonstrating Liquid Glass usage in production.",
    author: "Heyarny",
    category: "mobile",
    subcategory: "flutter",
    tags: ["Flutter", "完整应用", "示例"],
    dateAdded: "2025-11-06",
    link: "https://github.com/heyarny/oneclient",
    demoComponent: "OneClientDemo",
  },

  // Mobile Development - Jetpack Compose
  {
    id: "18",
    slug: "android-liquid-glass-view",
    title: "AndroidLiquidGlass View",
    titleEn: "AndroidLiquidGlass View",
    description: "Jetpack Compose 实现的 Android Liquid Glass 组件。",
    descriptionEn: "Android Liquid Glass component implemented with Jetpack Compose.",
    author: "QmDeve",
    category: "mobile",
    subcategory: "jetpack-compose",
    tags: ["Android", "Jetpack Compose", "Kotlin"],
    dateAdded: "2025-11-06",
    link: "https://github.com/qmdeve/android-liquid-glass-view",
    demoComponent: "ComposeGlassDemo",
  },

  // Design Resources - Figma
  {
    id: "19",
    slug: "ios-glass-figma",
    title: "iOS Glass",
    titleEn: "iOS Glass",
    description: "Figma 设计的 iOS 风格玻璃效果资源包。",
    descriptionEn: "Figma design resource package for iOS-style glass effects.",
    author: "Timothy Rick",
    category: "design",
    subcategory: "figma",
    tags: ["Figma", "设计资源", "iOS"],
    dateAdded: "2025-11-06",
    link: "https://figma.com/community/file/123456789/ios-glass",
    demoComponent: "FigmaGlassDemo",
    featured: true,
  },

  // Design Resources - Framer
  {
    id: "20",
    slug: "liquid-glass-animation-framer",
    title: "Liquid Glass Animation",
    titleEn: "Liquid Glass Animation",
    description: "Framer 设计的 Liquid Glass 动画资源包。",
    descriptionEn: "Framer design resource package for Liquid Glass animations.",
    author: "Become™ | Possibilities Answered",
    category: "design",
    subcategory: "framer",
    tags: ["Framer", "动画", "设计资源"],
    dateAdded: "2025-11-06",
    link: "https://framer.com/community/liquid-glass-animation",
    demoComponent: "FramerAnimationDemo",
  },

  // Design Resources - Webflow
  {
    id: "21",
    slug: "ios-glass-webflow",
    title: "iOS Glass (Design)",
    titleEn: "iOS Glass (Design)",
    description: "Webflow 模板 - iOS 风格玻璃效果设计。",
    descriptionEn: "Webflow template with iOS-style glass effect design.",
    author: "Timothy Rick",
    category: "design",
    subcategory: "webflow",
    tags: ["Webflow", "模板", "设计"],
    dateAdded: "2025-11-06",
    link: "https://webflow.com/templates/ios-glass",
    demoComponent: "WebflowGlassDemo",
  },

  // Additional Web Resources
  {
    id: "22",
    slug: "apple-liquid-glass-buttons",
    title: "Apple Liquid Glass Buttons",
    titleEn: "Apple Liquid Glass Buttons",
    description: "Apple 风格的 Liquid Glass 按钮集合。",
    descriptionEn: "Collection of Apple-style Liquid Glass buttons.",
    author: "Design Team",
    category: "web",
    subcategory: "css",
    tags: ["CSS", "按钮", "Apple"],
    dateAdded: "2025-12-08",
    link: "https://github.com/example/apple-glass-buttons",
    demoComponent: "AppleButtonsDemo",
  },
  {
    id: "23",
    slug: "glassmorphism-kit",
    title: "Glassmorphism Kit",
    titleEn: "Glassmorphism Kit",
    description: "完整的 Glassmorphism 设计工具包。",
    descriptionEn: "Complete Glassmorphism design toolkit.",
    author: "DesignCo",
    category: "design",
    subcategory: "figma",
    tags: ["Figma", "工具包", "设计"],
    dateAdded: "2025-12-01",
    link: "https://figma.com/community/file/123456789/glassmorphism-kit",
    demoComponent: "GlassmorphismKitDemo",
  },
  {
    id: "24",
    slug: "react-glass-components",
    title: "React Glass Components",
    titleEn: "React Glass Components",
    description: "React 平台的基础 Glass 组件集合。",
    descriptionEn: "Basic Glass component collection for React platform.",
    author: "ReactUI Team",
    category: "web",
    subcategory: "react",
    tags: ["React", "组件库", "基础"],
    dateAdded: "2025-11-28",
    link: "https://github.com/example/react-glass-components",
    demoComponent: "ReactGlassComponentsDemo",
  },
  {
    id: "25",
    slug: "vue-glass-system",
    title: "Vue Glass System",
    titleEn: "Vue Glass System",
    description: "Vue 3 完整 Glass 设计系统。",
    descriptionEn: "Complete Vue 3 Glass design system.",
    author: "VueUI",
    category: "web",
    subcategory: "vue",
    tags: ["Vue 3", "设计系统", "完整"],
    dateAdded: "2025-11-25",
    link: "https://github.com/example/vue-glass-system",
    demoComponent: "VueGlassSystemDemo",
  },
];

// Helper functions
export function getResourcesByCategory(category: Category): Resource[] {
  return resources.filter(r => r.category === category);
}

export function getResourcesBySubcategory(subcategory: Subcategory): Resource[] {
  return resources.filter(r => r.subcategory === subcategory);
}

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find(r => r.slug === slug);
}

export function getFeaturedResources(): Resource[] {
  return resources.filter(r => r.featured);
}

export function getAllCategories(): { category: Category; count: number; subcategories: Subcategory[] }[] {
  const categories: Category[] = ["mobile", "web", "design"];
  return categories.map(cat => ({
    category: cat,
    count: resources.filter(r => r.category === cat).length,
    subcategories: [...new Set(resources.filter(r => r.category === cat).map(r => r.subcategory))],
  }));
}

export function getSubcategoryName(subcategory: Subcategory, locale: "zh-CN" | "en"): string {
  const names: Record<Subcategory, { zh: string; en: string }> = {
    android: { zh: "Android", en: "Android" },
    ios: { zh: "iOS", en: "iOS" },
    "react-native": { zh: "React Native", en: "React Native" },
    flutter: { zh: "Flutter", en: "Flutter" },
    "jetpack-compose": { zh: "Jetpack Compose", en: "Jetpack Compose" },
    react: { zh: "React", en: "React" },
    vue: { zh: "Vue", en: "Vue" },
    svelte: { zh: "Svelte", en: "Svelte" },
    css: { zh: "CSS", en: "CSS" },
    tailwind: { zh: "Tailwind CSS", en: "Tailwind CSS" },
    figma: { zh: "Figma", en: "Figma" },
    framer: { zh: "Framer", en: "Framer" },
    webflow: { zh: "Webflow", en: "Webflow" },
  };
  return locale === "zh-CN" ? names[subcategory].zh : names[subcategory].en;
}

export function getCategoryName(category: Category, locale: "zh-CN" | "en"): string {
  const names: Record<Category, { zh: string; en: string }> = {
    mobile: { zh: "移动开发", en: "Mobile Development" },
    web: { zh: "Web 开发", en: "Web Development" },
    design: { zh: "设计资源", en: "Design Resources" },
  };
  return locale === "zh-CN" ? names[category].zh : names[category].en;
}
