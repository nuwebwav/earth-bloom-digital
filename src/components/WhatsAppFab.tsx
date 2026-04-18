import { MessageCircle } from "lucide-react";

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20PowerNet%2C%20I%27d%20like%20more%20info%20about%20your%20organic%20fertilizer."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[oklch(0.65_0.18_145)] text-white flex items-center justify-center shadow-glow pulse-glow hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-background" />
    </a>
  );
}
