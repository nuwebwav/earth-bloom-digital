import { lazy, Suspense, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sprout, FlaskConical, Clock, TrendingUp, Sparkles, ShieldCheck, Leaf, Droplets, CheckCircle2 } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import PageLayout from "@/components/PageLayout";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import Counter from "@/components/Counter";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import packFront from "@/assets/powernet-pack-front-ad.jpg";
import packBio from "@/assets/powernet-pack-bio-ad.jpg";
import pelletsReal from "@/assets/powernet-pellets-real.png";

const Hero3D = lazy(() => import("@/components/Hero3D"));

const adSlides = [
  {
    title: "100% Organic Power in Every Pellet",
    subtitle: "Neem · Palash Oil · Farmyard Manure",
    badge: "Best Seller",
    image: packFront,
    accent: "from-primary/30 to-emerald-400/20",
  },
  {
    title: "Bio-Organic. Soil-Approved.",
    subtitle: "Slow-release nutrients for season-long growth",
    badge: "Bio Certified",
    image: packBio,
    accent: "from-amber-400/30 to-primary/20",
  },
  {
    title: "Grown by Nature. Trusted by Farmers.",
    subtitle: "25,000+ farmers across India choose PowerNet",
    badge: "Farmer Favourite",
    image: pelletsReal,
    accent: "from-emerald-400/30 to-primary/30",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PowerNet Natural Fertilizer — 100% Organic for Better Yield" },
      { name: "description", content: "Premium organic fertilizer that enriches soil, releases nutrients slowly, and boosts crop yield. Chemical-free, eco-friendly, and farmer-trusted." },
      { property: "og:title", content: "PowerNet Natural Fertilizer — 100% Organic" },
      { property: "og:description", content: "Premium organic fertilizer for better soil and higher yield." },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: Sprout, title: "Improves Soil Fertility", desc: "Restores organic matter and revitalizes microbial life for long-term soil health." },
  { icon: ShieldCheck, title: "100% Chemical-Free", desc: "Pure natural ingredients — safe for crops, soil, and the environment." },
  { icon: Clock, title: "Slow Nutrient Release", desc: "Steady, controlled feeding ensures plants get nutrients exactly when they need them." },
  { icon: TrendingUp, title: "Enhances Crop Yield", desc: "Proven to deliver healthier plants and significantly higher harvests, season after season." },
];

function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Suspense fallback={<div className="absolute inset-0 gradient-mesh-bg -z-10" />}>
          <Hero3D />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background -z-[5]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                100% Organic · Farmer Trusted
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
                <span className="text-foreground">100% Organic</span>
                <br />
                <span className="text-gradient">Fertilizer</span>
                <br />
                <span className="text-foreground">for Better Yield</span>
              </h1>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
                PowerNet enriches your soil with nature's finest ingredients — neem, palash oil, and farmyard manure — for healthier crops and a thriving harvest.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-glow rounded-2xl px-7 py-4 font-semibold inline-flex items-center gap-2 text-base">
                  Contact Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/product" className="glass-strong rounded-2xl px-7 py-4 font-semibold inline-flex items-center gap-2 text-base hover:scale-[1.02] transition-transform">
                  Explore Product
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Floating glass orbs */}
        <div className="absolute top-1/4 right-10 w-32 h-32 glass rounded-full float-anim hidden lg:block shadow-glow" />
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 glass rounded-2xl float-anim-slow hidden lg:block" />
      </section>

      {/* AD SLIDER */}
      <section className="container mx-auto px-4 py-16">
        <Reveal>
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[autoplay.current]}
            className="relative"
          >
            <CarouselContent>
              {adSlides.map((slide) => (
                <CarouselItem key={slide.title}>
                  <div className={`relative overflow-hidden rounded-[2.5rem] glass-strong shadow-3d bg-gradient-to-br ${slide.accent}`}>
                    <div className="grid md:grid-cols-2 gap-6 items-center p-8 md:p-14 min-h-[420px]">
                      <div>
                        <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold mb-5">
                          <Sparkles className="w-3.5 h-3.5 text-primary" />
                          {slide.badge}
                        </span>
                        <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                          <span className="text-gradient">{slide.title}</span>
                        </h3>
                        <p className="mt-4 text-muted-foreground text-lg">{slide.subtitle}</p>
                        <div className="mt-7 flex flex-wrap gap-3">
                          <Link to="/product" className="btn-glow rounded-2xl px-6 py-3 font-semibold inline-flex items-center gap-2 text-sm">
                            Shop Now <ArrowRight className="w-4 h-4" />
                          </Link>
                          <Link to="/contact" className="glass-strong rounded-2xl px-6 py-3 font-semibold inline-flex items-center gap-2 text-sm hover:scale-[1.02] transition-transform">
                            Get a Quote
                          </Link>
                        </div>
                      </div>
                      <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full gradient-hero opacity-20 blur-3xl" />
                        <img
                          src={slide.image}
                          alt={slide.title}
                          loading="lazy"
                          className="relative max-h-[340px] w-auto object-contain drop-shadow-2xl float-anim"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Reveal>
      </section>

      {/* PRODUCT PACKAGING SHOWCASE */}
      <section className="container mx-auto px-4 py-24">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Product</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Meet <span className="text-gradient">PowerNet Pellets</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Premium organic fertilizer, packed with nature's most trusted ingredients.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <Reveal>
            <TiltCard className="h-full">
              <div className="glass-strong rounded-[2rem] p-8 h-full shadow-3d relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full gradient-hero opacity-20 blur-3xl" />
                <div className="relative flex flex-col items-center text-center">
                  <span className="glass rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider mb-4">Standard Pack</span>
                  <img src={packFront} alt="PowerNet Natural Fertilizer 10kg pack" loading="lazy" className="h-72 w-auto object-contain drop-shadow-xl" />
                  <h3 className="mt-6 text-2xl font-bold">PowerNet Natural Fertilizer</h3>
                  <p className="text-sm text-muted-foreground mt-2">10 kg · Pellet Form · 100% Organic</p>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={150}>
            <TiltCard className="h-full">
              <div className="glass-strong rounded-[2rem] p-8 h-full shadow-3d relative overflow-hidden">
                <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full gradient-hero opacity-20 blur-3xl" />
                <div className="relative flex flex-col items-center text-center">
                  <span className="glass rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider mb-4">Bio Organic</span>
                  <img src={packBio} alt="PowerNet Bio Organic Fertilizer pack" loading="lazy" className="h-72 w-auto object-contain drop-shadow-xl" />
                  <h3 className="mt-6 text-2xl font-bold">PowerNet Bio Organic</h3>
                  <p className="text-sm text-muted-foreground mt-2">Enriched bio formula for sensitive crops</p>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { icon: Leaf, label: "100% Natural Ingredients" },
              { icon: Droplets, label: "Slow Nutrient Release" },
              { icon: CheckCircle2, label: "Chemical-Free & Safe" },
            ].map((item) => (
              <div key={item.label} className="glass rounded-2xl p-5 flex items-center gap-3 shadow-soft">
                <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shadow-glow">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-semibold text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 text-center">
          <Link to="/product" className="btn-glow rounded-2xl px-7 py-4 font-semibold inline-flex items-center gap-2 text-base">
            View Full Product Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container mx-auto px-4 py-24">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Why PowerNet</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Engineered by Nature, <span className="text-gradient">Perfected for Farms</span></h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <TiltCard className="h-full">
                <div className="glass-strong rounded-3xl p-7 h-full shadow-soft hover:shadow-3d transition-shadow">
                  <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center shadow-glow mb-5">
                    <f.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW + COUNTERS */}
      <section className="container mx-auto px-4 py-24">
        <div className="glass-strong rounded-[2.5rem] p-8 md:p-16 shadow-3d relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full gradient-hero opacity-20 blur-3xl" />
          <div className="grid md:grid-cols-2 gap-12 items-center relative">
            <Reveal>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Reviving Soil. <br />
                <span className="text-gradient">Empowering Farmers.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                For over a decade, PowerNet has partnered with farmers across India to bring back the natural vitality of the land. Our pellets blend ancient wisdom with modern agronomy.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
                Learn our story <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
            <Reveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: 25000, s: "+", l: "Happy Farmers" },
                  { v: 100, s: "%", l: "Organic" },
                  { v: 40, s: "+", l: "Crop Types" },
                  { v: 12, s: "yrs", l: "Experience" },
                ].map((c) => (
                  <div key={c.l} className="glass rounded-2xl p-6 text-center shadow-soft">
                    <div className="text-3xl md:text-4xl font-bold text-gradient">
                      <Counter to={c.v} suffix={c.s} />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">{c.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-24">
        <Reveal>
          <div className="relative rounded-[2.5rem] overflow-hidden gradient-hero p-12 md:p-20 text-center shadow-3d">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
            <div className="relative">
              <FlaskConical className="w-12 h-12 mx-auto mb-6 text-primary-foreground" />
              <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground tracking-tight">
                Ready to grow more, <br /> the natural way?
              </h2>
              <p className="mt-6 text-primary-foreground/85 text-lg max-w-xl mx-auto">
                Join thousands of farmers transforming their fields with PowerNet.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-2xl font-semibold shadow-3d hover:scale-105 transition-transform pulse-glow"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageLayout>
  );
}
