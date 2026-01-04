"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";
import { useState } from "react";

export function VueLiquidDemo() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Profile Card */}
        <GlassCard className="w-full max-w-sm overflow-hidden">
          {/* Header with gradient */}
          <div className="relative h-24 -mx-6 -mt-6 mb-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2">
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 border-4 border-background"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-full h-full rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  V
                </div>
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center pt-4">
            <h3 className="text-xl font-bold mb-1">Vue Liquid Glass</h3>
            <p className="text-muted-foreground text-sm mb-4">Vue 3 玻璃效果组件库</p>

            {/* Stats */}
            <div className="flex justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{count}</div>
                <div className="text-xs text-muted-foreground">Stars</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1.2k</div>
                <div className="text-xs text-muted-foreground">Forks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-xs text-muted-foreground">好评</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <GlassButton
                variant={liked ? "primary" : "outline"}
                className="flex-1 gap-2"
                onClick={() => setLiked(!liked)}
              >
                <motion.svg
                  className="w-5 h-5"
                  fill={liked ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ scale: liked ? [1, 1.3, 1] : 1 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </motion.svg>
                {liked ? "已收藏" : "收藏"}
              </GlassButton>
              <GlassButton variant="primary" className="flex-1">
                使用组件
              </GlassButton>
            </div>
          </div>
        </GlassCard>

        {/* Floating elements */}
        <motion.div
          className="absolute top-10 left-10 w-12 h-12 glass rounded-xl flex items-center justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-blue-500" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 w-10 h-10 glass rounded-xl flex items-center justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="w-5 h-5 rounded bg-gradient-to-br from-purple-400 to-pink-500" />
        </motion.div>
      </div>
    </div>
  );
}
