import { createFileRoute, Link } from "@tanstack/react-router";
import { Sprout, TrendingUp, Leaf, ShieldCheck, Droplets, Sun, Recycle, Heart, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

export const Route = createFileRoute("/benefits")({
  head: () => ({
    meta: [
      { title: "Benefits — Why Choose PowerNet Organic Fertilizer" },
      { name: "description", content: "Better soil structure, higher yield, eco-friendly and safe — discover all the benefits of switching to PowerNet organic fertilizer." },
      { property: "og:title", content: "Benefits of PowerNet" },
      { property: "og:description", content: "Better soil, higher yield, eco-friendly, chemical-free." },
    ],
  }),
  component: BenefitsPage,
});

const benefits = [
  { icon: Sprout, title: "Better Soil Structure", desc: "Improves aeration, drainage, and microbial activity for vibrant, living soil." },
  { icon: TrendingUp, title: "Higher Yield", desc: "Plants grow stronger, fruit larger, and seasons stay productive year after year." },
  { icon: Leaf, title: "Eco-Friendly", desc: "Zero pollution. Zero harm. Pure care for the planet you farm." },
  { icon: ShieldCheck, title: "Safe & Chemical-Free", desc: "100% natural — safe for children, pets, livestock, and pollinators." },
  { icon: Droplets, title: "Saves Water", desc: "Hydrophilic pellets retain moisture, lowering irrigation by up to 30%." },
  { icon: Sun, title: "Drought Resilience", desc: "Healthier soil means crops survive and thrive during dry spells." },
  { icon: Recycle, title: "Sustainable Cycle", desc: "Restores natural nutrient cycles instead of depleting them." },
  { icon: Heart, title: "Healthier Produce", desc: "Cleaner crops mean better nutrition for your family and customers." },
];

function BenefitsPage() {
  return (
    <PageLayout>
      <section className="container mx-auto px-4 py-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">The Benefits</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              One Product. <br /> <span className="text-gradient">Endless Advantages.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              PowerNet doesn't just feed your crops — it transforms your entire farm ecosystem.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 4) * 80}>
              <TiltCard className="h-full">
                <div className="glass-strong rounded-3xl p-6 h-full shadow-soft hover:shadow-3d transition-all group relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full gradient-hero opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
                  <div className="relative w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center shadow-glow mb-5 group-hover:scale-110 transition-transform">
                    <b.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-20">
            <Link to="/contact" className="btn-glow rounded-2xl px-8 py-4 font-semibold inline-flex items-center gap-2 text-lg">
              Start Growing Naturally <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </PageLayout>
  );
}
