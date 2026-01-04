"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";
import { Resource } from "@/lib/resources";
import { useState } from "react";
import { Code, Eye, Copy, Check, Heart, Star, Zap } from "lucide-react";

interface CodeExampleDemoProps {
  resource: Resource;
  code: string;
}

export function CodeExampleDemo({ resource, code }: CodeExampleDemoProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 检测代码类型
  const isReact = code.includes("import") || code.includes("function") || code.includes("export") || code.includes("GlassCard") || code.includes("GlassButton");
  const isVue = code.includes("<template>") || code.includes("vue-liquid-glass");
  const isTailwind = code.includes("@tailwind") || (code.includes("class=") && (code.includes("glass-card") || code.includes("glass-button")));
  const isHTML = code.includes("<div") || code.includes("<h") || code.includes("<p") || code.includes("glass-effect");
  
  // 检测是否使用我们网站上的组件库
  const usesOurComponents = code.includes("@/components/ui/GlassCard");

  return (
    <div className="w-full">
      {/* 切换按钮 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <button
            onClick={() => setShowCode(false)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              !showCode
                ? "bg-white/20 text-white"
                : "bg-white/5 text-muted-foreground hover:bg-white/10"
            }`}
          >
            <Eye className="w-4 h-4 inline mr-2" />
            预览
          </button>
          <button
            onClick={() => setShowCode(true)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              showCode
                ? "bg-white/20 text-white"
                : "bg-white/5 text-muted-foreground hover:bg-white/10"
            }`}
          >
            <Code className="w-4 h-4 inline mr-2" />
            代码
          </button>
        </div>
        <button
          onClick={copyCode}
          className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all flex items-center gap-2 text-sm"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              已复制
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              复制代码
            </>
          )}
        </button>
      </div>

      {/* 内容区域 */}
      <div className="relative min-h-[500px] rounded-xl overflow-hidden">
        {showCode ? (
          <CodeViewer code={code} />
        ) : usesOurComponents ? (
          <ReactCodeExecutor code={code} resource={resource} />
        ) : (
          <EnhancedLiveDemo
            resource={resource}
            code={code}
            isReact={isReact}
            isVue={isVue}
            isTailwind={isTailwind}
            isHTML={isHTML}
            hoveredButton={hoveredButton}
            setHoveredButton={setHoveredButton}
          />
        )}
      </div>
    </div>
  );
}

// React 代码执行器 - 使用我们网站上的组件库渲染代码示例
function ReactCodeExecutor({ code, resource }: { code: string; resource: Resource }) {
  // 提取JSX内容
  const jsxMatch = code.match(/return\s*\(\s*([\s\S]*?)\s*\)/);
  const hasGlassCard = code.includes("GlassCard");
  const hasGlassButton = code.includes("GlassButton");
  const hasHover = code.includes("hover");
  
  // 提取标题和描述
  const titleMatch = code.match(/<h2[^>]*>([^<]+)<\/h2>/i) || code.match(/h2[^>]*>([^<]+)/i);
  const title = titleMatch ? titleMatch[1] : resource.title;
  
  const descMatch = code.match(/<p[^>]*>([^<]+)<\/p>/i) || code.match(/p[^>]*>([^<]+)/i);
  const description = descMatch ? descMatch[1] : resource.description;

  return (
    <div className="p-8 min-h-[500px] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-900">
      {/* 动态背景 */}
      <AnimatedBackground />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl"
      >
        {hasGlassCard ? (
          <GlassCard hover={hasHover} className="p-8 relative overflow-hidden">
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ width: "200%", left: "-50%" }}
            />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {title}
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">{description}</p>
              
              {hasGlassButton && (
                <div className="flex gap-3">
                  <GlassButton variant="primary">
                    Click Me
                  </GlassButton>
                  <GlassButton variant="secondary">
                    Secondary
                  </GlassButton>
                </div>
              )}
            </div>
          </GlassCard>
        ) : (
          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">{description}</p>
          </GlassCard>
        )}
      </motion.div>
    </div>
  );
}

// 增强的实时演示组件
function EnhancedLiveDemo({
  resource,
  code,
  isReact,
  isVue,
  isTailwind,
  isHTML,
  hoveredButton,
  setHoveredButton,
}: {
  resource: Resource;
  code: string;
  isReact: boolean;
  isVue: boolean;
  isTailwind: boolean;
  isHTML: boolean;
  hoveredButton: string | null;
  setHoveredButton: (id: string | null) => void;
}) {
  // 提取标题和描述
  const titleMatch = code.match(/<h[1-6][^>]*>([^<]+)<\/h[1-6]>/i) || code.match(/h[1-6][^>]*>([^<]+)/i);
  const title = titleMatch ? titleMatch[1] : resource.title;

  const descMatch = code.match(/<p[^>]*>([^<]+)<\/p>/i) || code.match(/p[^>]*>([^<]+)/i);
  const description = descMatch ? descMatch[1] : resource.description;

  return (
    <div className="p-8 min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* 动态背景 */}
      <AnimatedBackground />

      <div className="relative z-10 w-full max-w-4xl">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* 玻璃效果展示区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* 卡片效果 */}
          <GlassCardDemo title={title} description={description} />

          {/* 按钮效果 */}
          <ButtonsDemo
            hoveredButton={hoveredButton}
            setHoveredButton={setHoveredButton}
          />

          {/* 面板效果 */}
          <LargePanelDemo title={title} />

          {/* 图标按钮 */}
          <IconButtonsDemo />

          {/* 输入框效果 */}
          <InputDemo />

          {/* 标签效果 */}
          <TagsDemo />
        </motion.div>

        {/* 底部动画效果 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="flex gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// 动画背景组件
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-500/20 rounded-full blur-3xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-400/20 via-transparent to-pink-500/20 rounded-full blur-3xl"
        animate={{
          rotate: [0, -360],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      {/* 漂浮粒子 */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

// 玻璃卡片演示
function GlassCardDemo({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="backdrop-blur-xl bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
          <Star className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold">Glass Card</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        精美的玻璃态卡片效果，支持悬停动画
      </p>
      <div className="flex gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium"
        >
          了解更多
        </motion.button>
      </div>
    </motion.div>
  );
}

// 按钮演示
function ButtonsDemo({
  hoveredButton,
  setHoveredButton,
}: {
  hoveredButton: string | null;
  setHoveredButton: (id: string | null) => void;
}) {
  const buttons = [
    { id: "primary", label: "Primary", gradient: "from-cyan-500 to-blue-500" },
    { id: "secondary", label: "Secondary", gradient: "from-purple-500 to-pink-500" },
    { id: "accent", label: "Accent", gradient: "from-emerald-500 to-teal-500" },
  ];

  return (
    <div className="backdrop-blur-xl bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-xl">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Zap className="w-5 h-5 text-yellow-400" />
        Glass Buttons
      </h3>
      <div className="flex flex-wrap gap-3">
        {buttons.map((btn) => (
          <motion.button
            key={btn.id}
            onMouseEnter={() => setHoveredButton(btn.id)}
            onMouseLeave={() => setHoveredButton(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full bg-gradient-to-r ${btn.gradient} text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            {hoveredButton === btn.id && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mr-2"
              >
                ✨
              </motion.span>
            )}
            {btn.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// 大面板演示
function LargePanelDemo({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="md:col-span-2 backdrop-blur-2xl bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
    >
      {/* 渐变遮罩效果 */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Large Panel
          </h3>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/30 to-blue-500/30" />
            </motion.div>
          ))}
        </div>

        <p className="text-muted-foreground">
          大面板效果，适合展示主要内容或仪表盘
        </p>
      </div>
    </motion.div>
  );
}

// 图标按钮演示
function IconButtonsDemo() {
  const icons = [
    { icon: Heart, color: "from-pink-500 to-rose-500" },
    { icon: Star, color: "from-yellow-500 to-orange-500" },
    { icon: Zap, color: "from-cyan-500 to-blue-500" },
  ];

  return (
    <div className="backdrop-blur-xl bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-xl">
      <h3 className="text-lg font-semibold mb-4">Icon Buttons</h3>
      <div className="flex gap-3">
        {icons.map((item, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
          >
            <item.icon className="w-6 h-6 text-white" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// 输入框演示
function InputDemo() {
  return (
    <div className="backdrop-blur-xl bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-xl">
      <h3 className="text-lg font-semibold mb-4">Glass Input</h3>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="输入您的内容..."
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all text-white placeholder:text-gray-500"
        />
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium"
          >
            提交
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// 标签演示
function TagsDemo() {
  const tags = ["Liquid Glass", "Glassmorphism", "UI Design"];

  return (
    <div className="backdrop-blur-xl bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-xl">
      <h3 className="text-lg font-semibold mb-4">Glass Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1.5 rounded-full text-sm bg-gradient-to-r from-white/10 to-white/5 border border-white/10 hover:border-cyan-400/50 transition-colors"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

// 代码查看器
function CodeViewer({ code }: { code: string }) {
  // 检测代码语言
  const getLanguage = (code: string): string => {
    if (code.includes("import") || code.includes("function") || code.includes("export")) return "javascript";
    if (code.includes("<template>") || code.includes("vue-liquid-glass")) return "vue";
    if (code.includes("@tailwind")) return "css";
    if (code.includes("<style>")) return "html";
    if (code.includes("<div") || code.includes("<h") || code.includes("<p")) return "html";
    return "text";
  };

  const language = getLanguage(code);

  return (
    <div className="h-full bg-gray-900 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-sm text-gray-400">{language.toUpperCase()}</span>
      </div>
      <pre className="p-4 overflow-x-auto h-full">
        <code className="text-sm text-gray-300 font-mono whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
}
