import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Beaker, Droplets, Clock, Atom, Scale, Package, Leaf, ShieldCheck } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import packFront from "@/assets/powernet-pack-front-ad.jpg";
import packBio from "@/assets/powernet-pack-bio-ad.jpg";
import pelletsReal from "@/assets/powernet-pellets-real.png";
const productImg = packFront;

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "PowerNet Product — Premium Organic Pellet Fertilizer" },
      { name: "description", content: "PowerNet pellet fertilizer with organic matter, slow nutrient release, micro-nutrients (Zn, Fe, Cu, Mn) and pH balancing — 100% chemical-free." },
      { property: "og:title", content: "PowerNet Pellet Fertilizer" },
      { property: "og:description", content: "Premium organic pellet fertilizer with neem, palash oil & farmyard manure." },
      { property: "og:image", content: productImg },
      { name: "twitter:image", content: productImg },
    ],
  }),
  component: ProductPage,
});

const features = [
  { icon: Leaf, title: "Organic Matter", desc: "Improves soil structure and enriches it with humus." },
  { icon: Droplets, title: "Hydrophilic Nature", desc: "Holds moisture longer, reducing irrigation needs." },
  { icon: Clock, title: "Slow Nutrient Release", desc: "Feeds plants gradually for sustained growth." },
  { icon: Atom, title: "Micro Nutrients", desc: "Rich in Zn, Fe, Cu, Mn — essential trace minerals." },
  { icon: Scale, title: "Maintains Soil pH", desc: "Naturally balances acidity for optimal plant health." },
  { icon: Package, title: "Pellet Form", desc: "Clean, easy-to-apply, and dust-free handling." },
  { icon: Beaker, title: "Chemical-Free", desc: "100% pure natural ingredients, safe for all crops." },
];

const ingredients = [
  { name: "Neem", desc: "Natural pest deterrent & soil enricher", emoji: "🌿" },
  { name: "Tobacco Extract", desc: "Repels harmful insects naturally", emoji: "🍃" },
  { name: "Palash Oil", desc: "Boosts microbial activity in soil", emoji: "🌺" },
  { name: "Farmyard Manure", desc: "Time-tested organic nutrient base", emoji: "🌾" },
];

function ProductPage() {
  return (
    <PageLayout>
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">The Product</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              PowerNet <br /> <span className="text-gradient">Natural Fertilizer</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Hand-crafted organic pellets that deliver balanced nutrition to your crops while restoring the soil beneath them. One product, transformative results.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["100% Organic", "Pellet Form", "Slow Release", "All Crops"].map((b) => (
                <span key={b} className="glass rounded-full px-4 py-1.5 text-xs font-semibold">{b}</span>
              ))}
            </div>
            <Link to="/contact" className="btn-glow rounded-2xl px-7 py-4 font-semibold inline-flex items-center gap-2">
              Order Now <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          <Reveal delay={200}>
            <TiltCard intensity={14}>
              <div className="relative rounded-[2rem] overflow-hidden shadow-3d aspect-square bg-gradient-to-br from-primary/5 via-background to-accent/10">
                <img
                  src={packFront}
                  alt="PowerNet Natural Fertilizer 10kg pack — Organic Slow Release Soil Nutrition"
                  className="w-full h-full object-contain p-6 drop-shadow-2xl"
                  width={1280}
                  height={1280}
                  loading="eager"
                />
                <div className="absolute top-4 right-4 glass-strong rounded-2xl px-4 py-2 text-xs font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Bio Organic
                </div>
                <div className="absolute bottom-4 left-4 glass-strong rounded-2xl px-4 py-3">
                  <div className="text-xs text-muted-foreground">Net Weight</div>
                  <div className="font-bold">10 kg / pack</div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-4 py-16">
        <Reveal>
          <div className="glass-strong rounded-3xl p-8 md:p-12 shadow-3d">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Description</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              PowerNet Natural Fertilizer is a premium organic blend formulated to nourish soil, support root development, and unlock the full genetic potential of your crops. Each pellet is enriched with a balanced profile of macro and micro nutrients, designed to release slowly so plants are fed continuously throughout the growing season.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Technical Features */}
      <section className="container mx-auto px-4 py-16">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center">
            Technical <span className="text-gradient">Features</span>
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <TiltCard className="h-full">
                <div className="glass-strong rounded-2xl p-6 h-full shadow-soft">
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center shadow-glow mb-4">
                    <f.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ingredients */}
      <section className="container mx-auto px-4 py-16">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-center">
            Pure <span className="text-gradient">Ingredients</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Sourced from nature, blended to perfection.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ingredients.map((ing, i) => (
            <Reveal key={ing.name} delay={i * 100}>
              <TiltCard className="h-full">
                <div className="glass-strong rounded-3xl p-6 text-center shadow-soft hover:shadow-3d transition-shadow h-full">
                  <div className="w-20 h-20 mx-auto rounded-full gradient-hero flex items-center justify-center text-4xl mb-4 shadow-glow float-anim">
                    {ing.emoji}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{ing.name}</h3>
                  <p className="text-sm text-muted-foreground">{ing.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Packaging Showcase */}
      <section className="container mx-auto px-4 py-16">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-center">
            Premium <span className="text-gradient">Packaging</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Available in convenient 10 kg packs — sealed for freshness, designed for the field.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { img: packFront, label: "Standard Pack", note: "Full nutrition info & dosage chart in English + हिन्दी" },
            { img: packBio, label: "Bio Organic Pack", note: "100% chemical-free, ideal for cotton, fruits & vegetables" },
          ].map((p, i) => (
            <Reveal key={p.label} delay={i * 120}>
              <TiltCard className="h-full" intensity={10}>
                <div className="glass-strong rounded-3xl p-6 shadow-3d h-full">
                  <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/5 via-background to-accent/10 overflow-hidden flex items-center justify-center">
                    <img
                      src={p.img}
                      alt={`PowerNet ${p.label} — 10kg organic fertilizer`}
                      className="w-full h-full object-contain p-4 drop-shadow-xl"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-lg">{p.label}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{p.note}</p>
                    </div>
                    <span className="glass rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap">10 kg</span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Real Pellets */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <TiltCard intensity={12}>
              <div className="rounded-[2rem] overflow-hidden shadow-3d aspect-square bg-gradient-to-br from-secondary/30 to-accent/20">
                <img
                  src={pelletsReal}
                  alt="PowerNet organic fertilizer pellets — close-up of real product"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </TiltCard>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Inside the Pack</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Real Pellets, <span className="text-gradient">Real Results</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Dense, uniform pellets engineered for slow nutrient release. Easy to handle, dust-free, and field-ready — straight from the pack into your soil.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { k: "Nitrogen", v: "1.49%" },
                { k: "Phosphorus", v: "0.9%" },
                { k: "Organic C", v: "49.72%" },
                { k: "Iron (Fe)", v: "0.30%" },
              ].map((s) => (
                <div key={s.k} className="glass rounded-2xl px-4 py-3">
                  <div className="text-xs text-muted-foreground">{s.k}</div>
                  <div className="font-bold text-lg">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
