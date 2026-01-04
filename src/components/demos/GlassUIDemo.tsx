"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";

export function GlassUIDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
        {[
          { color: "from-cyan-400 to-blue-500", icon: "🔵" },
          { color: "from-purple-400 to-pink-500", icon: "🟣" },
          { color: "from-orange-400 to-red-500", icon: "🟠" },
          { color: "from-green-400 to-emerald-500", icon: "🟢" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard hover className="py-6 text-center">
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl`}>
                {item.icon}
              </div>
              <span className="text-sm font-medium">组件 {i + 1}</span>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function FrostedGlassDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
      
      <div className="relative z-10 flex gap-6">
        {[0, 10, 20, 30].map((blur) => (
          <GlassCard key={blur} className="p-6 text-center">
            <div 
              className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400/50 to-purple-500/50"
              style={{ backdropFilter: `blur(${blur}px)` }}
            />
            <p className="text-sm font-medium">模糊 {blur}px</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

export function GlassmorphismKitDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {[
          { title: "基础卡片", desc: "简单的玻璃卡片" },
          { title: "悬浮效果", desc: "鼠标悬浮动画" },
          { title: "发光效果", desc: "脉冲发光动画" },
        ].map((item, i) => (
          <GlassCard key={i} hover className="py-8 text-center">
            <h3 className="font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
