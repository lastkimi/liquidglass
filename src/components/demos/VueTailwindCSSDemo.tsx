"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";

export function VueGlassMorphismDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-3xl">
        <GlassCard className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold text-xl">
              V
            </div>
            <div>
              <h3 className="font-bold text-lg">Vue Glassmorphism</h3>
              <p className="text-sm text-muted-foreground">Vue 3 组件库</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { name: "基础", icon: "📦" },
              { name: "动画", icon: "✨" },
              { name: "主题", icon: "🎨" },
            ].map((feature, i) => (
              <GlassCard key={i} hover className="py-4 text-center">
                <span className="text-2xl mb-2 block">{feature.icon}</span>
                <span className="text-sm font-medium">{feature.name}</span>
              </GlassCard>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

export function TailwindGlassmorphismDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
        {[
          { name: "glass", class: "glass" },
          { name: "glass-card", class: "glass-card" },
          { name: "glass-button", class: "glass-button" },
          { name: "glass-input", class: "glass-input" },
        ].map((item, i) => (
          <GlassCard key={i} hover className="py-6 text-center">
            <div className="text-xs text-muted-foreground mb-2">.{item.class}</div>
            <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30" />
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

export function CSSGlassmorphismDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      <div className="relative z-10 flex gap-8 flex-wrap justify-center">
        {[0.1, 0.2, 0.3, 0.4, 0.5].map((opacity) => (
          <GlassCard 
            key={opacity} 
            className="p-4 text-center w-24"
            style={{ background: `rgba(255, 255, 255, ${opacity})` }}
          >
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
            <p className="text-xs font-medium">{Math.round(opacity * 100)}%</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
