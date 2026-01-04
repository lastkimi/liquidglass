"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";

export function CreativomaGlassDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {[
          { color: "from-cyan-400 to-blue-500", title: "卡片 1" },
          { color: "from-purple-400 to-pink-500", title: "卡片 2" },
          { color: "from-orange-400 to-red-500", title: "卡片 3" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard hover className="text-center py-8">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                <div className="w-8 h-8 rounded-lg bg-white/30" />
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">React + Tailwind 实现</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
