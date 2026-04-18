import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Reveal from "@/components/Reveal";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PowerNet — Get a Quote for Organic Fertilizer" },
      { name: "description", content: "Reach out to PowerNet for orders, pricing, or expert advice on organic fertilizer for your farm." },
      { property: "og:title", content: "Contact PowerNet" },
      { property: "og:description", content: "Get in touch for orders and farm consultation." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  mobile: z.string().trim().regex(/^[+0-9\s-]{7,20}$/, "Enter a valid mobile number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1000),
});

type FormData = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

function ContactPage() {
  const [data, setData] = useState<FormData>({ name: "", mobile: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (k: keyof FormData, v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Errors = {};
      result.error.issues.forEach((i) => {
        const k = i.path[0] as keyof FormData;
        errs[k] = i.message;
      });
      setErrors(errs);
      toast.error("Please fix the errors below");
      return;
    }
    setSent(true);
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setData({ name: "", mobile: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <PageLayout>
      <Toaster position="top-center" richColors />
      <section className="container mx-auto px-4 py-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Contact</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Let's Grow <span className="text-gradient">Together</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Questions, orders, or expert advice — we're a message away.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2">
            <div className="glass-strong rounded-3xl p-8 shadow-3d h-full">
              <h3 className="font-bold text-2xl mb-6">Get in Touch</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                  { icon: Mail, label: "Email", value: "hello@powernet.farm", href: "mailto:hello@powernet.farm" },
                  { icon: MapPin, label: "Location", value: "Maharashtra, India" },
                ].map((c) => (
                  <a key={c.label} href={c.href} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center shadow-glow shrink-0 group-hover:scale-110 transition-transform">
                      <c.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">{c.label}</div>
                      <div className="font-semibold">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden border border-border h-48 relative">
                <iframe
                  title="PowerNet location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=72.5%2C18.8%2C73.2%2C19.3&layer=mapnik"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3">
            <form onSubmit={submit} className="glass-strong rounded-3xl p-8 shadow-3d space-y-5">
              <h3 className="font-bold text-2xl mb-2">Send us a message</h3>
              <p className="text-sm text-muted-foreground mb-6">We typically respond within 24 hours.</p>

              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name" error={errors.name}>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your full name"
                    className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </Field>
                <Field label="Mobile" error={errors.mobile}>
                  <input
                    type="tel"
                    value={data.mobile}
                    onChange={(e) => update("mobile", e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </Field>
              </div>

              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </Field>

              <Field label="Message" error={errors.message}>
                <textarea
                  rows={5}
                  value={data.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell us about your farm, crop type, or what you'd like to know..."
                  className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                />
              </Field>

              <button
                type="submit"
                disabled={sent}
                className="btn-glow rounded-2xl px-7 py-4 font-semibold inline-flex items-center gap-2 disabled:opacity-70"
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4" /> Sent!
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold mb-2 block">{label}</span>
      {children}
      {error && (
        <span className="mt-1.5 text-xs text-destructive flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> {error}
        </span>
      )}
    </label>
  );
}
