import { Link } from "@tanstack/react-router";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 gradient-earth opacity-95 -z-10" />
      <div className="absolute inset-0 gradient-mesh-bg opacity-30 -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12 text-earth-foreground">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shadow-glow">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-lg">PowerNet</div>
                <div className="text-xs opacity-80">Natural Fertilizer</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Premium organic fertilizer crafted from nature's finest ingredients for healthier soil and abundant harvests.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/about" className="hover:text-primary-glow transition-colors">About Us</Link></li>
              <li><Link to="/product" className="hover:text-primary-glow transition-colors">Product</Link></li>
              <li><Link to="/benefits" className="hover:text-primary-glow transition-colors">Benefits</Link></li>
              <li><Link to="/gallery" className="hover:text-primary-glow transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/application" className="hover:text-primary-glow transition-colors">Application Guide</Link></li>
              <li><Link to="/contact" className="hover:text-primary-glow transition-colors">Get Quote</Link></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> +91 98765 43210</li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> hello@powernet.farm</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Maharashtra, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-earth-foreground/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-earth-foreground/70">
          <p>© {new Date().getFullYear()} PowerNet Natural Fertilizer. All rights reserved.</p>
          <p>Cultivating tomorrow, naturally.</p>
        </div>
      </div>
    </footer>
  );
}
