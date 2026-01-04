"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";
import { useState } from "react";

export function LiquidGlassUIDemo() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["组件", "样式", "动画"];

  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Tabs */}
        <GlassCard className="mb-6 p-2">
          <div className="flex gap-2">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === index
                    ? "bg-white/20 text-foreground"
                    : "hover:bg-white/10 text-muted-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </GlassCard>

        {/* Content */}
        <GlassCard className="min-h-[200px] flex flex-col items-center justify-center">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {activeTab === 0 && (
              <>
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">React 组件</h3>
                <p className="text-muted-foreground">开箱即用的 Liquid Glass 组件</p>
              </>
            )}
            {activeTab === 1 && (
              <>
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-400/30 to-orange-500/30 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Tailwind 样式</h3>
                <p className="text-muted-foreground">便捷的 Tailwind CSS 工具类</p>
              </>
            )}
            {activeTab === 2 && (
              <>
                <motion.div
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400/30 to-teal-500/30 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">流畅动画</h3>
                <p className="text-muted-foreground">Framer Motion 动画支持</p>
              </>
            )}
          </motion.div>
        </GlassCard>

        <div className="mt-6 flex justify-center gap-4">
          <GlassButton variant="outline">了解更多</GlassButton>
          <GlassButton variant="primary">立即开始</GlassButton>
        </div>
      </div>
    </div>
  );
}
