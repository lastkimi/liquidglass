"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";

export function ReactMagicUIDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Basic Glass Card */}
        <GlassCard hover className="flex flex-col items-center text-center py-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2">基础效果</h3>
          <p className="text-sm text-muted-foreground">简单易用的玻璃卡片组件</p>
        </GlassCard>

        {/* Interactive Card */}
        <GlassCard hover className="flex flex-col items-center text-center py-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2">交互动画</h3>
          <p className="text-sm text-muted-foreground">悬浮和点击动画效果</p>
        </GlassCard>

        {/* Advanced Card */}
        <GlassCard hover className="flex flex-col items-center text-center py-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2">高级效果</h3>
          <p className="text-sm text-muted-foreground">发光和脉冲效果</p>
        </GlassCard>
      </div>

      <div className="mt-8">
        <GlassButton variant="primary" className="gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          开始使用
        </GlassButton>
      </div>
    </div>
  );
}
