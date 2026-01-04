"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

export function ComposeGlassDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-56 h-56 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-sm">
        {/* Compose-style card */}
        <GlassCard className="p-6">
          {/* App bar */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="font-bold">Jetpack Compose</div>
          </div>

          {/* Cards */}
          <div className="space-y-3">
            {["项目 1", "项目 2", "项目 3"].map((item, i) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/30 to-purple-500/30" />
                <div className="flex-1">
                  <div className="font-medium">{item}</div>
                  <div className="text-xs text-muted-foreground">Jetpack Compose</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAB */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg flex items-center justify-center"
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
