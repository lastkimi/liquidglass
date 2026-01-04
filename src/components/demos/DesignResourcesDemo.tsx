"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";

export function FigmaGlassDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-gradient-to-r from-pink-400/20 to-orange-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <GlassCard className="p-6">
          {/* Figma-like interface */}
          <div className="flex gap-4 mb-6">
            {/* Sidebar */}
            <div className="w-48 space-y-2">
              {["图层 1", "图层 2", "图层 3", "图层 4"].map((layer, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 cursor-pointer">
                  <div className="w-4 h-4 rounded bg-gradient-to-br from-cyan-400 to-purple-500" />
                  <span className="text-sm">{layer}</span>
                </div>
              ))}
            </div>

            {/* Canvas */}
            <div className="flex-1 h-48 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 flex items-center justify-center relative overflow-hidden">
              <motion.div
                className="w-24 h-24 rounded-xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 backdrop-blur-md border border-white/20"
                drag
                dragConstraints={{ left: -50, right: 50, top: -30, bottom: 30 }}
              />
              <motion.div
                className="absolute bottom-4 right-4 w-16 h-16 rounded-lg bg-gradient-to-br from-pink-400/30 to-orange-500/30 backdrop-blur-md border border-white/20"
                drag
                dragConstraints={{ left: -30, right: 30, top: -20, bottom: 20 }}
              />
            </div>
          </div>

          {/* Properties panel */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "模糊", value: "20px" },
              { label: "透明度", value: "25%" },
              { label: "边框", value: "1px" },
              { label: "阴影", value: "Soft" },
            ].map((prop, i) => (
              <GlassCard key={i} className="py-3 text-center">
                <p className="text-xs text-muted-foreground">{prop.label}</p>
                <p className="font-medium">{prop.value}</p>
              </GlassCard>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

export function FramerAnimationDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900" />

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
        {[
          { name: "淡入", icon: "↗️", delay: 0 },
          { name: "滑入", icon: "➡️", delay: 0.1 },
          { name: "缩放", icon: "🔍", delay: 0.2 },
          { name: "旋转", icon: "🔄", delay: 0.3 },
        ].map((animation, i) => (
          <GlassCard key={i} className="py-8 text-center">
            <motion.div
              className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl"
              animate={{ 
                opacity: animation.name === "淡入" ? [0.3, 1, 0.3] : undefined,
                x: animation.name === "滑入" ? [-20, 0, -20, 0] : undefined,
                scale: animation.name === "缩放" ? [0.8, 1, 0.8] : undefined,
                rotate: animation.name === "旋转" ? [0, 180, 360] : undefined,
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: animation.delay 
              }}
            >
              {animation.icon}
            </motion.div>
            <p className="font-medium">{animation.name}</p>
            <p className="text-xs text-muted-foreground">Framer 动画</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

export function WebflowTemplateDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <GlassCard className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <div>
              <h3 className="font-bold">Webflow Glass Template</h3>
              <p className="text-sm text-muted-foreground">拖拽式网页设计模板</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { name: "主页", selected: true },
              { name: "关于", selected: false },
              { name: "联系", selected: false },
            ].map((page, i) => (
              <div
                key={i}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  page.selected
                    ? "bg-white/20 border-white/40"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="w-full h-20 rounded bg-gradient-to-br from-gray-800/50 to-gray-900/50 mb-2" />
                <p className="text-sm font-medium text-center">{page.name}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
