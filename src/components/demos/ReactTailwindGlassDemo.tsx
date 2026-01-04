"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";
import { useState } from "react";

export function ReactTailwindGlassDemo() {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <GlassCard className="p-6">
          <div className="flex gap-2 mb-6">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                  active === i
                    ? "bg-white/20"
                    : "hover:bg-white/10 text-muted-foreground"
                }`}
              >
                Tab {i + 1}
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center py-8"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 backdrop-blur-xl border border-white/20" />
            <h3 className="text-xl font-bold mb-2">React + Tailwind</h3>
            <p className="text-muted-foreground">强大的组合，灵活的样式</p>
          </motion.div>
        </GlassCard>
      </div>
    </div>
  );
}
