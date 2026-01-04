"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";
import { useState } from "react";

export function FlutterNavbarDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = ["首页", "发现", "创建", "消息", "我的"];

  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Navigation bar container */}
        <GlassCard className="p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="font-bold">Flutter Liquid Glass</div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
          </div>
          <p className="text-sm text-muted-foreground">
            Flutter 平台的 Liquid Glass 导航栏组件
          </p>
        </GlassCard>

        {/* Navbar */}
        <GlassCard className="p-2">
          <div className="flex items-center gap-1">
            {items.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => setActiveIndex(index)}
                className={`relative flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeIndex === index
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/20 rounded-xl"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </motion.button>
            ))}
          </div>
        </GlassCard>

        {/* Content area */}
        <GlassCard className="mt-4 p-6 text-center">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-4xl mb-2">
              {["🏠", "🔍", "➕", "💬", "👤"][activeIndex]}
            </div>
            <h3 className="font-bold">{items[activeIndex]}</h3>
          </motion.div>
        </GlassCard>
      </div>
    </div>
  );
}
