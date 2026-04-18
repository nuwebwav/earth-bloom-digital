import { type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import WhatsAppFab from "./WhatsAppFab";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 pt-24">{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
