"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

export function AndroidAppleGlassDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Android-style glass cards */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Material Design style card */}
        <GlassCard className="p-6 overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold">Android Liquid Glass</h3>
              <p className="text-sm text-muted-foreground">Material Design 风格</p>
            </div>
          </div>

          {/* FAB */}
          <div className="flex justify-end mb-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-teal-500 shadow-lg flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </motion.button>
          </div>

          {/* List items */}
          <div className="space-y-2">
            {["设置", "主题", "壁纸", "关于"].map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
