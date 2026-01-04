import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    mobile: "from-blue-500 to-cyan-500",
    web: "from-purple-500 to-pink-500",
    design: "from-orange-500 to-yellow-500",
  };
  return colors[category] || "from-gray-500 to-gray-600";
}

export function getCategoryBgColor(category: string): string {
  const colors: Record<string, string> = {
    mobile: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30",
    web: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30",
    design: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30",
  };
  return colors[category] || "bg-gray-500/20 text-gray-600 dark:text-gray-400 border-gray-500/30";
}
