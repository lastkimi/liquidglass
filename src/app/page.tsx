"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/ui/Navigation";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { ResourcesGrid } from "@/components/sections/ResourcesGrid";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Header />
        <CategoriesSection />
        <FeaturedSection />
        <ResourcesGrid />
      </main>
      <Footer />
    </div>
  );
}
