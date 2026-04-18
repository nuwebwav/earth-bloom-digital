import { createFileRoute } from "@tanstack/react-router";
import { Apple, Carrot, Wheat, Sprout } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

export const Route = createFileRoute("/application")({
  head: () => ({
    meta: [
      { title: "Application & Dosage Guide — PowerNet Fertilizer" },
      { name: "description", content: "Step-by-step PowerNet application guide with crop-specific dosage for fruits, vegetables, cotton, and more." },
      { property: "og:title", content: "PowerNet Application & Dosage" },
      { property: "og:description", content: "Crop-specific dosage and step-by-step usage guide." },
    ],
  }),
  component: ApplicationPage,
});

const dosages = [
  { icon: Apple, crop: "Fruits", range: "8–12", max: 12, color: "from-rose-500 to-amber-500" },
  { icon: Carrot, crop: "Vegetables", range: "8–12", max: 12, color: "from-orange-500 to-emerald-500" },
  { icon: Sprout, crop: "Crops", range: "5–8", max: 8, color: "from-emerald-500 to-teal-500" },
  { icon: Wheat, crop: "Cotton", range: "5–8", max: 8, color: "from-amber-400 to-yellow-500" },
];

const steps = [
  { n: "01", title: "Prepare the Soil", desc: "Loosen the topsoil before application. Ensure adequate moisture for best absorption." },
  { n: "02", title: "Measure the Dose", desc: "Use the crop-specific dosage chart to determine the correct quantity per acre." },
  { n: "03", title: "Spread Evenly", desc: "Broadcast PowerNet pellets uniformly across the field or apply near plant roots." },
  { n: "04", title: "Cover & Water", desc: "Lightly mix with soil and water the field for slow nutrient activation." },
  { n: "05", title: "Monitor Growth", desc: "Watch for healthier foliage and stronger root systems within 2–3 weeks." },
];

function ApplicationPage() {
  return (
    <PageLayout>
      <section className="container mx-auto px-4 py-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Application & Dosage</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              How to Get the <span className="text-gradient">Best Results</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A simple, scientifically-backed guide to applying PowerNet for maximum yield.
            </p>
          </div>
        </Reveal>

        {/* Dosage cards with animated bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {dosages.map((d, i) => (
            <Reveal key={d.crop} delay={i * 100}>
              <TiltCard className="h-full">
                <div className="glass-strong rounded-3xl p-6 shadow-3d h-full relative overflow-hidden">
                  <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${d.color} opacity-20 blur-2xl`} />
                  <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center shadow-glow mb-5 relative">
                    <d.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-2xl mb-1">{d.crop}</h3>
                  <p className="text-sm text-muted-foreground mb-4">Recommended dose</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-gradient">{d.range}</span>
                    <span className="text-xs text-muted-foreground">bags / acre</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full gradient-hero rounded-full transition-all duration-1000"
                      style={{ width: `${(d.max / 12) * 100}%` }}
                    />
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Steps */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-3">
            Step-by-Step <span className="text-gradient">Usage Guide</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">Five simple steps from soil to harvest.</p>
        </Reveal>

        <div className="max-w-3xl mx-auto space-y-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="glass-strong rounded-2xl p-6 md:p-7 flex gap-5 md:gap-7 items-start shadow-soft hover:shadow-3d transition-all hover:translate-x-1">
                <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl gradient-hero flex items-center justify-center font-bold text-primary-foreground shadow-glow">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
