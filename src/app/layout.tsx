import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { Toaster } from "@/components/ui/Toaster";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Liquid Glass 资源库 | Liquid Glass Resources",
    template: "%s | Liquid Glass 资源库"
  },
  description: "精选的 Liquid Glass 效果实现资源集合，包含框架、代码示例和设计资源。涵盖 React、Vue、Tailwind CSS、iOS、Android 等多平台。",
  keywords: ["Liquid Glass", "玻璃拟态", "毛玻璃", "UI设计", "React", "Vue", "Tailwind CSS", "iOS", "Android", "Flutter"],
  authors: [{ name: "Liquid Glass Showcase" }],
  creator: "Liquid Glass Showcase",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://liquidglass-showcase.example.com",
    siteName: "Liquid Glass 资源库",
    title: "Liquid Glass 资源库 | Liquid Glass Resources",
    description: "精选的 Liquid Glass 效果实现资源集合",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Liquid Glass 资源库"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Liquid Glass 资源库",
    description: "精选的 Liquid Glass 效果实现资源集合",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider defaultLocale="zh-CN">
            <div className="min-h-screen relative">
              {/* Animated background blobs */}
              <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500" />
              </div>
              
              {children}
            </div>
          </LanguageProvider>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
