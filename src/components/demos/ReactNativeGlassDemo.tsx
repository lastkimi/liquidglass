"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";
import { useState } from "react";

export function ReactNativeGlassDemo() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl" />
      </div>

      {/* Phone mockup */}
      <div className="relative z-10">
        <GlassCard className="w-72 overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
            <span className="text-xs">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2.5 rounded-sm bg-current" />
              <div className="w-0.5 h-2.5 rounded-full bg-current" />
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
              <div>
                <div className="font-bold">React Native</div>
                <div className="text-xs text-muted-foreground">Glass Effect</div>
              </div>
            </div>

            <GlassCard className="py-4 text-center">
              <p className="text-sm mb-3">在移动端体验玻璃效果</p>
              <GlassButton
                variant={liked ? "primary" : "outline"}
                className="text-sm"
                onClick={() => setLiked(!liked)}
              >
                {liked ? "❤️ 已喜欢" : "🤍 喜欢"}
              </GlassButton>
            </GlassCard>

            <div className="grid grid-cols-3 gap-2">
              {["📱", "💄", "🎨", "🎯", "⭐", "💎"].map((emoji) => (
                <motion.div
                  key={emoji}
                  whileHover={{ scale: 1.1 }}
                  className="aspect-square glass rounded-xl flex items-center justify-center text-xl"
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom nav */}
          <div className="flex justify-around py-3 border-t border-white/10">
            {["🏠", "🔍", "➕", "💬", "👤"].map((icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                className={`p-2 rounded-lg ${i === 0 ? 'bg-white/20' : ''}`}
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
