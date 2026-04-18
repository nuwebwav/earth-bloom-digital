import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import farm from "@/assets/hero-farm.jpg";
import about from "@/assets/about-farming.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — PowerNet Organic Farms in Action" },
      { name: "description", content: "Explore stunning photos of PowerNet-powered organic farms, healthy crops, and natural ingredients." },
      { property: "og:title", content: "PowerNet Gallery" },
      { property: "og:description", content: "Photos of organic farms thriving with PowerNet." },
      { property: "og:image", content: g1 },
      { name: "twitter:image", content: g1 },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: g1, label: "Aerial farmland", h: "row-span-2" },
  { src: g2, label: "Ripe organic tomatoes", h: "" },
  { src: farm, label: "Vibrant crop sprouts", h: "" },
  { src: g3, label: "Cotton field at sunset", h: "row-span-2" },
  { src: g4, label: "Golden wheat harvest", h: "" },
  { src: g5, label: "Fresh neem leaves", h: "" },
  { src: about, label: "Healthy soil & seedlings", h: "" },
  { src: g6, label: "Mango orchard", h: "row-span-2" },
];

function GalleryPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <PageLayout>
      <section className="container mx-auto px-4 py-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Gallery</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Farms <span className="text-gradient">Thriving Naturally</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Real fields. Real harvests. Real PowerNet results.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 4) * 80} className={it.h}>
              <TiltCard intensity={8} className="h-full">
                <button
                  onClick={() => setActive(it.src)}
                  className="block w-full h-full rounded-3xl overflow-hidden shadow-soft hover:shadow-3d transition-all group relative"
                >
                  <img
                    src={it.src}
                    alt={it.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 text-left text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {it.label}
                  </div>
                </button>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full glass-strong flex items-center justify-center text-white"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <img src={active} alt="Preview" className="max-w-full max-h-full rounded-2xl shadow-3d animate-scale-in" />
        </div>
      )}
    </PageLayout>
  );
}
