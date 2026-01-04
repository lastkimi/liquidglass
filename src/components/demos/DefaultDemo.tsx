"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassButton } from "@/components/ui/GlassCard";
import { ExternalLink, Github, Star } from "lucide-react";

interface DefaultDemoProps {
  title: string;
  description: string;
  author: string;
  link: string;
  tags: string[];
}

// Default demo component for resources without specific demos
export function DefaultDemo({ title, description, author, link, tags }: DefaultDemoProps) {
  return (
    <div className="min-h-[400px] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Glass card effect */}
          <GlassCard className="p-8 relative overflow-hidden">
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ width: "200%", left: "-50%" }}
            />

            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 backdrop-blur-xl border border-white/20 flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500" />
              </motion.div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3">{title}</h3>

            {/* Description */}
            <p className="text-muted-foreground mb-6">{description}</p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {tags.slice(0, 4).map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/20"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Author */}
            <p className="text-sm text-muted-foreground mb-6">
              由 <span className="font-medium">{author}</span> 创建
            </p>

            {/* Links */}
            <div className="flex items-center justify-center gap-4">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <GlassButton variant="primary" className="gap-2">
                  <Github className="w-4 h-4" />
                  查看源码
                  <ExternalLink className="w-3 h-3" />
                </GlassButton>
              </a>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-cyan-400/30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * 400 + 200,
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

// Placeholder for resources with actual demos
export function PlaceholderDemo() {
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center">
        <motion.div
          className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500" />
        </motion.div>
        <p className="text-muted-foreground">演示组件加载中...</p>
      </div>
    </div>
  );
}
