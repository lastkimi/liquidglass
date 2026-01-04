"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";
import { useState } from "react";

export function AppleGlassUIDemo() {
  const [switchState, setSwitchState] = useState(false);

  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* macOS style window */}
      <GlassCard className="w-full max-w-lg overflow-hidden">
        {/* Window title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 text-center text-sm text-muted-foreground">
            Apple Liquid Glass Demo
          </div>
        </div>

        {/* Window content */}
        <div className="p-6 space-y-6">
          {/* Toggle switches */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Wi-Fi</span>
              <motion.button
                onClick={() => setSwitchState(!switchState)}
                className={`w-12 h-7 rounded-full transition-colors ${
                  switchState ? "bg-green-500" : "bg-white/20"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-5 h-5 rounded-full bg-white shadow-lg"
                  animate={{ x: switchState ? 26 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.button>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium">蓝牙</span>
              <motion.button
                onClick={() => setSwitchState(!switchState)}
                className={`w-12 h-7 rounded-full transition-colors ${
                  switchState ? "bg-blue-500" : "bg-white/20"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-5 h-5 rounded-full bg-white shadow-lg"
                  animate={{ x: switchState ? 26 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.button>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium">专注模式</span>
              <motion.button
                onClick={() => setSwitchState(!switchState)}
                className={`w-12 h-7 rounded-full transition-colors ${
                  switchState ? "bg-purple-500" : "bg-white/20"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-5 h-5 rounded-full bg-white shadow-lg"
                  animate={{ x: switchState ? 26 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.button>
            </div>
          </div>

          {/* Sliders */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">亮度</span>
                <span className="text-sm text-muted-foreground">75%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">音量</span>
                <span className="text-sm text-muted-foreground">50%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: "50%" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </div>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Floating icons */}
      <div className="absolute top-10 right-10 flex flex-col gap-3">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-10 h-10 glass rounded-xl flex items-center justify-center"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          >
            <div className="w-5 h-5 rounded bg-gradient-to-br from-cyan-400/50 to-purple-500/50" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
