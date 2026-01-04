"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";

export function ReactNativeGlassDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-indigo-900 to-blue-900" />

      <div className="relative z-10">
        {/* Phone mockup */}
        <GlassCard className="w-72 overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
            <span className="text-xs">10:30</span>
            <div className="flex gap-1">
              <div className="w-4 h-2.5 rounded-sm bg-current" />
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
              <div>
                <div className="font-bold">React Native</div>
                <div className="text-xs text-muted-foreground">Glass Effect</div>
              </div>
            </div>

            {/* Cards */}
            {["项目 1", "项目 2", "项目 3"].map((item, i) => (
              <GlassCard key={i} hover className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/30 to-purple-500/30" />
                  <span className="font-medium">{item}</span>
                </div>
              </GlassCard>
            ))}

            {/* FAB */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg flex items-center justify-center absolute bottom-4 right-4"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </motion.button>
          </div>

          {/* Bottom nav */}
          <div className="flex justify-around py-3 border-t border-white/10">
            {["🏠", "🔍", "➕", "💬", "👤"].map((icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                className={`p-2 rounded-lg ${i === 2 ? 'bg-white/20' : ''}`}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

export function ComposeGlassmorphismDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-emerald-900 to-teal-900" />

      <div className="relative z-10 w-full max-w-sm">
        <GlassCard className="p-4">
          {/* App bar */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="font-bold">Jetpack Compose</div>
          </div>

          {/* Cards */}
          <div className="space-y-3">
            {["Composable 1", "Composable 2", "Composable 3"].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400/30 to-emerald-500/30" />
                <div className="flex-1">
                  <div className="font-medium">{item}</div>
                  <div className="text-xs text-muted-foreground">Compose Glass</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAB */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </motion.button>
        </GlassCard>
      </div>
    </div>
  );
}

export function TransparentUIDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {[
          { title: "基础", opacity: 0.1, color: "from-cyan-400" },
          { title: "中等", opacity: 0.3, color: "from-purple-400" },
          { title: "高透", opacity: 0.5, color: "from-pink-400" },
        ].map((item, i) => (
          <GlassCard 
            key={i} 
            hover 
            className="py-8 text-center"
            style={{ background: `rgba(255, 255, 255, ${item.opacity})` }}
          >
            <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} to-transparent`} />
            <h3 className="font-bold">{item.title}透明度</h3>
            <p className="text-sm text-muted-foreground mt-2">{Math.round(item.opacity * 100)}%</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
