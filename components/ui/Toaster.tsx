"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToasterProps {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

const toastIcons = {
  success: <CheckCircle className="w-5 h-5 text-green-500" />,
  error: <AlertCircle className="w-5 h-5 text-red-500" />,
  info: <Info className="w-5 h-5 text-blue-500" />,
};

const toastStyles = {
  success: "border-l-4 border-green-500 bg-green-50/90 dark:bg-green-950/30",
  error: "border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30",
  info: "border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30",
};

export function Toaster({ position = "top-right" }: ToasterProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    // Global toast event listener
    const handleShowToast = (e: CustomEvent<{ message: string; type?: ToastType }>) => {
      const newToast: Toast = {
        id: Date.now().toString(),
        message: e.detail.message,
        type: e.detail.type || "info",
      };
      setToasts((prev) => [...prev, newToast]);

      // Auto remove after 5 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, 5000);
    };

    window.addEventListener("show-toast", handleShowToast as EventListener);

    return () => {
      window.removeEventListener("show-toast", handleShowToast as EventListener);
    };
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
  };

  return (
    <div className={`fixed z-[100] ${positionClasses[position]} flex flex-col gap-2`}>
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            className={`glass-card flex items-center gap-3 p-4 min-w-[300px] max-w-md ${toastStyles[toast.type]}`}
          >
            {toastIcons[toast.type]}
            <p className="flex-1 text-sm">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// Helper function to show toasts from anywhere
export function showToast(message: string, type: ToastType = "info") {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("show-toast", { detail: { message, type } })
    );
  }
}
