"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-full bg-white/10 border border-white/20"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  const themes = [
    { value: "light", icon: Sun, label: "浅色模式" },
    { value: "dark", icon: Moon, label: "深色模式" },
    { value: "system", icon: Monitor, label: "跟随系统" },
  ] as const;

  const currentTheme = themes.find((t) => t.value === theme) || themes[0];
  const CurrentIcon = currentTheme.icon;

  const cycleTheme = () => {
    const currentIndex = themes.findIndex((t) => t.value === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].value);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={cycleTheme}
        className="p-2.5 rounded-full glass-button group"
        aria-label="切换主题"
      >
        <CurrentIcon className="w-5 h-5 transition-colors group-hover:text-cyan-400" />
      </motion.button>
      
      {/* Theme indicator dots */}
      <div className="absolute -bottom-1 -right-1 flex gap-0.5">
        {themes.map((t) => (
          <div
            key={t.value}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              theme === t.value
                ? "bg-cyan-400 scale-100"
                : "bg-white/30 scale-75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
