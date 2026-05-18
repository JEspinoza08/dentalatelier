import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl">Dental</span>
              <span className="font-display text-3xl italic text-accent">Atelier</span>
            </div>
            <p className="mt-6 text-primary-foreground/70 max-w-md">
              Odontología estética avanzada en Santiago de Surco. Diseñamos sonrisas naturales,
              funcionales y duraderas, con una experiencia premium en cada visita.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm hover:bg-accent/90 transition-colors"
            >
              <MessageCircle className="size-4" />
              Escríbenos por WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs tracking-[0.3em] uppercase text-accent mb-5">Navegación</div>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#servicios" className="hover:text-accent transition">Servicios</a></li>
              <li><a href="#transformaciones" className="hover:text-accent transition">Transformaciones</a></li>
              <li><a href="#nosotros" className="hover:text-accent transition">Nosotros</a></li>
              <li><a href="#testimonios" className="hover:text-accent transition">Testimonios</a></li>
              <li><a href="#contacto" className="hover:text-accent transition">Contacto</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs tracking-[0.3em] uppercase text-accent mb-5">Contacto</div>
            <ul className="space-y-3 text-primary-foreground/80 text-sm">
              <li>{SITE.address}</li>
              <li>{SITE.phone}</li>
              <li>{SITE.email}</li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a href={SITE.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="size-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-transparent transition">
                <Instagram className="size-4" />
              </a>
              <a href={SITE.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="size-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-transparent transition">
                <Facebook className="size-4" />
              </a>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="size-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-transparent transition">
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Dental Atelier. Todos los derechos reservados.</p>
          <p>Santiago de Surco · Lima · Perú</p>
        </div>
      </div>
    </footer>
  );
}
