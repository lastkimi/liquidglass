"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
  href?: string;
}

export function GlassCard({ 
  children, 
  className, 
  hover = true, 
  glow = false,
  onClick,
  href 
}: GlassCardProps) {
  const Component = href ? "a" : "div";
  
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : undefined}
      whileTap={hover ? { scale: 0.98 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Component
        href={href}
        onClick={onClick}
        className={cn(
          "glass-card backdrop-blur-xl",
          "bg-white/10 dark:bg-black/30",
          "border-white/20 dark:border-white/10",
          hover && "hover:bg-white/20 dark:hover:bg-black/40",
          hover && "hover:border-white/30 dark:hover:border-white/20",
          hover && "hover:shadow-xl hover:shadow-primary/10",
          glow && "pulse-glow",
          className
        )}
      >
        {children}
      </Component>
    </motion.div>
  );
}

interface GlassButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

export function GlassButton({ 
  children, 
  className, 
  variant = "primary",
  size = "md",
  onClick,
  href,
  disabled = false
}: GlassButtonProps) {
  const Component = href ? "a" : "button";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent",
    secondary: "bg-white/20 dark:bg-white/10 border-white/30 text-foreground",
    outline: "bg-transparent border-white/30 text-foreground hover:bg-white/10",
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3.5 text-lg",
  };
  
  return (
    <motion.div
      whileHover={!disabled ? { scale: 1.05 } : undefined}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
    >
      <Component
        href={href}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center gap-2",
          "rounded-full font-medium",
          "border transition-all duration-300",
          "backdrop-blur-md",
          variants[variant],
          sizes[size],
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        {children}
      </Component>
    </motion.div>
  );
}

interface GlassInputProps {
  placeholder?: string;
  className?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function GlassInput({ 
  placeholder, 
  className, 
  type = "text",
  value,
  onChange 
}: GlassInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={cn(
        "glass-input w-full",
        "bg-white/10 dark:bg-black/20",
        "border-white/20 dark:border-white/10",
        "placeholder:text-muted-foreground/60",
        className
      )}
    />
  );
}

interface GlassBadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "success" | "warning" | "danger";
}

export function GlassBadge({ 
  children, 
  className, 
  variant = "default" 
}: GlassBadgeProps) {
  const variants = {
    default: "bg-white/20 border-white/30",
    success: "bg-green-500/20 border-green-500/30 text-green-600 dark:text-green-400",
    warning: "bg-yellow-500/20 border-yellow-500/30 text-yellow-600 dark:text-yellow-400",
    danger: "bg-red-500/20 border-red-500/30 text-red-600 dark:text-red-400",
  };
  
  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5",
      "rounded-full text-xs font-medium",
      "border backdrop-blur-sm",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
