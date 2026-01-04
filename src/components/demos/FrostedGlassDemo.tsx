"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";

export function FrostedGlassReactDemo() {
  const intensities = [5, 10, 15, 20, 25];

  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
      
      <div className="relative z-10 w-full max-w-4xl">
        <h3 className="text-xl font-bold text-center mb-8">毛玻璃模糊强度演示</h3>
        
        <div className="flex justify-center gap-4 flex-wrap">
          {intensities.map((intensity) => (
            <GlassCard key={intensity} className="p-4 text-center w-24">
              <motion.div
                className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500"
                style={{ backdropFilter: `blur(${intensity}px)` }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <p className="text-sm font-medium">{intensity}px</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CrystalDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-300/30 to-blue-500/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-300/30 to-pink-500/30 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {["水晶", "透明", "清晰"].map((effect, i) => (
          <GlassCard key={i} hover className="py-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg border border-white/20" />
            <h3 className="font-bold">{effect}效果</h3>
            <p className="text-sm text-muted-foreground mt-2">Crystal React 组件</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

export function IceGlassDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900" />
      
      <div className="relative z-10 flex flex-col items-center">
        <GlassCard className="p-8 max-w-md text-center">
          <motion.div
            className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-400/30 via-white/20 to-purple-500/30 backdrop-blur-xl border border-white/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500" />
            </div>
          </motion.div>
          
          <h3 className="text-2xl font-bold mb-2">Ice Glass</h3>
          <p className="text-muted-foreground mb-6">React 冰晶玻璃效果组件库</p>
          
          <GlassButton variant="primary">了解更多</GlassButton>
        </GlassCard>
      </div>
    </div>
  );
}
