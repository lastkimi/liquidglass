"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";

export function OneClientDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-sm">
        {/* App-style card */}
        <GlassCard className="overflow-hidden">
          {/* Header image */}
          <div className="h-32 -mx-6 -mt-6 bg-gradient-to-br from-purple-400 via-pink-500 to-orange-500 relative">
            <div className="absolute bottom-4 left-4">
              <div className="text-white text-xl font-bold">OneClient</div>
              <div className="text-white/70 text-sm">Flutter 完整应用示例</div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            {/* Profile section */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
              <div className="flex-1">
                <div className="font-bold">User Name</div>
                <div className="text-xs text-muted-foreground">Premium Member</div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: "128", label: "Posts" },
                { value: "2.4k", label: "Followers" },
                { value: "892", label: "Following" },
              ].map((stat) => (
                <GlassCard key={stat.label} className="py-3 text-center">
                  <div className="font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </GlassCard>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              <GlassButton variant="primary" className="flex-1">
                关注
              </GlassButton>
              <GlassButton variant="outline" className="flex-1">
                消息
              </GlassButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
