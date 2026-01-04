"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";
import { useState } from "react";

export function FlutterGlassmorphismDemo() {
  const [selected, setSelected] = useState(0);
  const items = ["首页", "发现", "消息", "我的"];

  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-900 to-indigo-900" />

      <div className="relative z-10 w-full max-w-sm">
        {/* Phone mockup */}
        <GlassCard className="overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
            <span className="text-xs">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2.5 rounded-sm bg-current" />
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            {["卡片 1", "卡片 2", "卡片 3"].map((item, i) => (
              <GlassCard key={i} hover className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/30 to-purple-500/30" />
                  <div className="flex-1">
                    <div className="font-medium">{item}</div>
                    <div className="text-xs text-muted-foreground">Flutter Glassmorphism</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="flex justify-around py-3 border-t border-white/10">
            {items.map((item, i) => (
              <motion.button
                key={item}
                onClick={() => setSelected(i)}
                className={`p-2 rounded-lg transition-all ${
                  selected === i ? "bg-white/20" : "hover:bg-white/10"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">{item}</span>
              </motion.button>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

export function AndroidGlassmorphismDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-emerald-900 to-teal-900" />

      <div className="relative z-10 w-full max-w-sm">
        <GlassCard className="p-4">
          {/* App bar */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="font-bold">Android Glass</div>
          </div>

          {/* Cards */}
          <div className="space-y-3">
            {["设置", "主题", "壁纸", "关于"].map((item, i) => (
              <motion.div
                key={item}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400/30 to-emerald-500/30" />
                <span>{item}</span>
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

export function iOSGlassmorphismDemo() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

      <div className="relative z-10 w-full max-w-sm">
        <GlassCard className="overflow-hidden">
          {/* Header image */}
          <div className="h-24 -mx-6 -mt-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
          
          {/* Content */}
          <div className="p-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 border-4 border-background" />
              <div>
                <div className="font-bold">iOS Glass</div>
                <div className="text-xs text-muted-foreground">SwiftUI 组件库</div>
              </div>
            </div>

            {/* Toggle switches */}
            <div className="space-y-3 pt-2">
              {["Wi-Fi", "蓝牙", "专注模式"].map((item, i) => (
                <div key={item} className="flex items-center justify-between">
                  <span className="font-medium">{item}</span>
                  <motion.button
                    onClick={() => setEnabled(!enabled)}
                    className={`w-12 h-7 rounded-full transition-colors ${
                      enabled ? "bg-green-500" : "bg-white/20"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="w-5 h-5 rounded-full bg-white shadow-lg"
                      animate={{ x: enabled ? 26 : 4 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </motion.button>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
