import heroImg from "@/assets/hero-smile.jpg";
import { whatsappUrl } from "@/lib/site";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Sonrisa estética natural diseñada por Dental Atelier"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0 gradient-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.16_0.012_60_/_0.55)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 min-h-screen flex flex-col justify-end pb-20 pt-40">
        <div className="max-w-3xl text-background">
          <div className="flex items-center gap-3 mb-8 opacity-90 reveal">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs tracking-[0.3em] uppercase">Santiago de Surco · Lima</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] text-balance reveal">
            Diseñamos sonrisas <br />
            <span className="italic text-accent">naturales</span> y funcionales
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-background/85 max-w-xl reveal">
            Odontología estética avanzada para pacientes que buscan resultados refinados,
            duraderos y profundamente personalizados.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 reveal">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 rounded-full bg-background text-foreground px-7 py-4 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Agendar evaluación
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-background/40 text-background px-7 py-4 text-sm hover:bg-background/10 transition-colors"
            >
              <MessageCircle className="size-4" />
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-background/60 text-[10px] tracking-[0.4em] uppercase animate-float">
        Descubre más
      </div>
    </section>
  );
}
