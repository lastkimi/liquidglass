"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";

export function WaterDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 w-full max-w-3xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { color: "from-cyan-400 to-blue-500", icon: "💧" },
            { color: "from-blue-400 to-indigo-500", icon: "🌊" },
            { color: "from-indigo-400 to-purple-500", icon: "✨" },
            { color: "from-purple-400 to-pink-500", icon: "🌈" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard hover className="py-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl`}>
                  {item.icon}
                </div>
                <h3 className="font-bold">效果 {i + 1}</h3>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
