"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

export function GlawinduiDemo() {
  const components = ["按钮", "卡片", "输入框", "导航栏"];

  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-orange-400/20 to-yellow-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <GlassCard className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
              <span className="text-2xl font-bold">G</span>
            </div>
            <div>
              <h3 className="font-bold text-xl">glawindui</h3>
              <p className="text-sm text-muted-foreground">Tailwind CSS UI 组件库</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {components.map((component, i) => (
              <motion.div
                key={component}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-center cursor-pointer hover:bg-white/10 transition-colors"
              >
                <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-br from-orange-400/30 to-yellow-500/30" />
                <span className="text-sm">{component}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
