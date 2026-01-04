# Liquid Glass 资源库

一个精美的 Liquid Glass（玻璃拟态）效果资源展示网站，收集了 77+ 个来自不同平台的 Liquid Glass 实现资源。

## ✨ 特性

- 🎨 **77+ 精选资源**：涵盖 React、Vue、Tailwind CSS、CSS、Flutter、Android、iOS、React Native、Jetpack Compose 等平台
- 🌐 **多语言支持**：中文/英文双语界面
- 🌓 **主题切换**：支持深色/浅色主题
- 💻 **实时演示**：每个资源都有完整的代码示例和实时预览
- 📱 **响应式设计**：完美适配桌面端和移动端
- 🔍 **SEO 优化**：自动生成 sitemap，优化搜索引擎收录
- 📊 **Vercel Analytics**：集成网站分析功能
- ⚡ **高性能**：基于 Next.js 14 App Router，支持服务端渲染

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

## 📁 项目结构

```
liquid-glass-showcase/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── [category]/         # 分类页面
│   │   ├── resources/[slug]/   # 资源详情页面
│   │   └── layout.tsx          # 根布局（包含 Analytics）
│   ├── components/              # React 组件
│   │   ├── demos/             # 实时演示组件
│   │   ├── layout/            # 布局组件
│   │   ├── providers/         # Context 提供者
│   │   ├── sections/          # 页面区块
│   │   └── ui/                # UI 组件（GlassCard、GlassButton 等）
│   └── lib/                    # 工具函数和资源数据
│       ├── resources.ts        # 77+ 资源数据
│       └── utils.ts            # 工具函数
├── public/                     # 静态资源
└── vercel.json                 # Vercel 部署配置
```

## 🎯 核心功能

### 1. 资源展示

- **分类浏览**：Web 开发、移动开发、设计资源
- **子分类筛选**：React、Vue、Tailwind、CSS、Flutter 等
- **搜索功能**：快速查找资源
- **相关推荐**：智能推荐相关资源

### 2. 实时演示

每个资源页面都包含：
- **实时预览**：使用网站组件库渲染的真实效果
- **代码示例**：完整的可复制代码
- **组件集成**：所有 React/Vue 资源使用 `@/components/ui/GlassCard` 组件库

### 3. 组件库

网站内置的玻璃态组件库：
- `GlassCard`：玻璃态卡片组件
- `GlassButton`：玻璃态按钮组件
- 支持 `hover`、`glow` 等属性
- 完整的 TypeScript 类型定义

## 🛠️ 技术栈

- **框架**：Next.js 14 (App Router)
- **语言**：TypeScript
- **样式**：Tailwind CSS 4
- **动画**：Framer Motion
- **主题**：next-themes
- **分析**：Vercel Analytics
- **部署**：Vercel

## 📊 资源统计

- **总资源数**：77+
- **分类数量**：3（Web、Mobile、Design）
- **平台支持**：6+（React、Vue、Tailwind、CSS、Flutter、Android、iOS 等）
- **更新日期**：2026 年最新资源

## 🔗 相关链接

- [GitHub 仓库](https://github.com/lastkimi/liquidglass)
- [在线演示](https://liquid-glass-tan.vercel.app/)（参考网站）

## 📝 开发计划

- [x] 收集 77+ 资源
- [x] 实现实时演示功能
- [x] 集成网站组件库
- [x] 多语言支持
- [x] 主题切换
- [x] SEO 优化
- [x] Vercel Analytics 集成
- [x] 响应式设计
- [ ] 更多资源持续更新

## 📄 许可证

MIT License

## 🙏 致谢

感谢所有为 Liquid Glass 效果做出贡献的开发者们！

---

Made with ❤️ using Next.js and Tailwind CSS
