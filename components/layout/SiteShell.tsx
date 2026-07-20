import { FloatingWhatsapp } from "@/components/layout/FloatingWhatsapp";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#ana-icerik" className="skip-link">Ana içeriğe geç</a>
      <Header />
      <main id="ana-icerik">{children}</main>
      <Footer />
      <FloatingWhatsapp />
      <MobileActionBar />
    </>
  );
}
