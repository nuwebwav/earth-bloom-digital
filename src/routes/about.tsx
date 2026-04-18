import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, AlertTriangle, CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import aboutImg from "@/assets/about-farming.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PowerNet — Our Organic Farming Story" },
      { name: "description", content: "Discover how PowerNet revives soil and empowers farmers through 100% organic fertilizer made from neem, palash oil, and farmyard manure." },
      { property: "og:title", content: "About PowerNet" },
      { property: "og:description", content: "Our story of organic farming and sustainable agriculture." },
      { property: "og:image", content: aboutImg },
      { name: "twitter:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

const compare = [
  { label: "Soil Health", chem: "Degrades over time", org: "Restores & enriches", v: 92 },
  { label: "Water Retention", chem: "Low", org: "High (hydrophilic)", v: 85 },
  { label: "Microbial Life", chem: "Killed by chemicals", org: "Thrives & multiplies", v: 95 },
  { label: "Long-term Yield", chem: "Diminishing returns", org: "Sustained growth", v: 88 },
  { label: "Environment", chem: "Pollutes water & air", org: "Eco-friendly", v: 100 },
];

function AboutPage() {
  return (
    <PageLayout>
      <section className="container mx-auto px-4 py-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">About Us</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              The Story of <span className="text-gradient">Organic Farming</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Born from a simple belief — that the healthiest harvests start with healthy soil.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <TiltCard intensity={6}>
            <div className="rounded-[2rem] overflow-hidden shadow-3d">
              <img src={aboutImg} alt="Hands holding soil with neem seedlings" className="w-full h-[400px] md:h-[500px] object-cover" width={1280} height={960} loading="eager" />
            </div>
          </TiltCard>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 mt-20 items-center">
          <Reveal>
            <h2 className="text-4xl font-bold tracking-tight mb-5">Rooted in Tradition, Powered by Science</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For generations, Indian farmers have known the wisdom of feeding the soil, not just the plant. We took that knowledge, paired it with modern agronomy, and engineered a fertilizer pellet that delivers exactly what the land needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every PowerNet pellet contains the time-tested power of neem, tobacco extract, palash oil, and farmyard manure — slow-released, balanced, and perfectly chemical-free.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="glass-strong rounded-3xl p-8 shadow-3d">
              <Leaf className="w-10 h-10 text-primary mb-4" />
              <blockquote className="text-xl md:text-2xl font-semibold leading-snug mb-4">
                "Healthy soil grows healthy food. Healthy food grows healthy people."
              </blockquote>
              <p className="text-sm text-muted-foreground">— PowerNet Philosophy</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="container mx-auto px-4 py-24">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Chemical vs <span className="text-gradient">Organic</span>
            </h2>
            <p className="mt-4 text-muted-foreground">See why thousands of farmers are making the switch.</p>
          </div>
        </Reveal>

        <div className="glass-strong rounded-3xl p-6 md:p-10 shadow-3d max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 pb-4 border-b border-border text-sm font-semibold">
            <div>Aspect</div>
            <div className="text-destructive flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Chemical</div>
            <div className="text-primary flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> PowerNet Organic</div>
          </div>
          {compare.map((row, i) => (
            <Reveal key={row.label} delay={i * 80}>
              <div className="grid grid-cols-3 gap-4 py-5 border-b border-border/50 items-center">
                <div className="font-semibold">{row.label}</div>
                <div className="text-sm text-muted-foreground">{row.chem}</div>
                <div>
                  <div className="text-sm font-medium mb-2">{row.org}</div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full gradient-hero rounded-full transition-all duration-1000"
                      style={{ width: `${row.v}%` }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-12">
            <Link to="/product" className="btn-glow rounded-2xl px-7 py-4 font-semibold inline-flex items-center gap-2">
              Explore Our Product <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </PageLayout>
  );
}
