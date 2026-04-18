import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Leaf } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/product", label: "Product" },
  { to: "/application", label: "Application" },
  { to: "/benefits", label: "Benefits" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const isDark = stored === "dark" || (!stored && window.matchMedia?.("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`glass-strong rounded-2xl flex items-center justify-between px-4 md:px-6 py-3 transition-all duration-500 ${
            scrolled ? "shadow-3d" : "shadow-soft"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-lg group-hover:blur-xl transition-all" />
              <div className="relative w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shadow-glow">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-bold text-foreground text-base md:text-lg tracking-tight">PowerNet</div>
              <div className="text-[10px] md:text-xs text-muted-foreground -mt-0.5">Natural Fertilizer</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? "text-primary-foreground"
                      : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 gradient-hero rounded-lg shadow-glow -z-10" />
                  )}
                  {l.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:scale-105 transition-transform"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link
              to="/contact"
              className="hidden md:inline-flex btn-glow rounded-xl px-4 py-2 text-sm font-semibold"
            >
              Contact Now
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-3 shadow-3d animate-fade-in">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-foreground/5 transition-colors"
                activeProps={{ className: "block px-4 py-3 rounded-lg text-sm font-semibold gradient-hero text-primary-foreground" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
