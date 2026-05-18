import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { InstagramSection } from "@/components/site/Instagram";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { useReveal } from "@/hooks/use-reveal";

export default function App() {
  useReveal();

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <BeforeAfter />
      <About />
      <WhyUs />
      <Testimonials />
      <InstagramSection />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
