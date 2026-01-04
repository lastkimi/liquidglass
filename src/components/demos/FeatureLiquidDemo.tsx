"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";
import { useState } from "react";

export function FeatureLiquidDemo() {
  const [hovered, setHovered] = useState<string | null>(null);

  const features = [
    { id: "blur", title: "模糊效果", icon: "🔍", desc: "20px 模糊半径" },
    { id: "border", title: "渐变边框", icon: "🎨", desc: "1px 渐变边框" },
    { id: "shadow", title: "柔和阴影", icon: "🌫️", desc: "多层阴影叠加" },
    { id: "glow", title: "发光效果", icon: "✨", desc: "动态光泽动画" },
  ];

  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background with gradient blobs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard
                hover
                onMouseEnter={() => setHovered(feature.id)}
                onMouseLeave={() => setHovered(null)}
                className="py-6 text-center h-full"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>

                {/* Hover glow effect */}
                {hovered === feature.id && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 blur-xl" />
                  </motion.div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Example code snippet */}
        <GlassCard className="mt-6 p-4">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`<div class="glass">
  Liquid Glass 效果
</div>

<style>
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>`}</code>
          </pre>
        </GlassCard>
      </div>
    </div>
  );
}
