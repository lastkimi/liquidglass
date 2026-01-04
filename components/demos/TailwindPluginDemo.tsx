"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";

export function TailwindPluginDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        {/* Code preview style cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { name: "glass", desc: "基础玻璃" },
            { name: "glass-dark", desc: "深色玻璃" },
            { name: "glass-card", desc: "玻璃卡片" },
            { name: "glass-button", desc: "玻璃按钮" },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard hover className="py-6 text-center">
                <div className="text-xs text-muted-foreground mb-2">.{item.name}</div>
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30" />
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Interactive examples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard hover className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">快速上手</h3>
            <p className="text-sm text-muted-foreground">一行代码实现玻璃效果</p>
          </GlassCard>

          <GlassCard hover className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">组件丰富</h3>
            <p className="text-sm text-muted-foreground">多种预设组件可选</p>
          </GlassCard>

          <GlassCard hover className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">高度可定制</h3>
            <p className="text-sm text-muted-foreground">支持主题定制和扩展</p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
