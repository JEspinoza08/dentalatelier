import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappUrl, SITE } from "@/lib/site";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#transformaciones", label: "Transformaciones" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight">Dental</span>
          <span className="font-display text-2xl text-accent italic">Atelier</span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/80 hover:text-accent transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm hover:bg-primary/90 transition-colors"
          >
            Agendar cita
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center rounded-full w-10 h-10 border border-border bg-background/60"
          aria-label="Menú"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/90 py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm"
            >
              Agendar por WhatsApp
            </a>
            <p className="text-xs text-muted-foreground pt-2">{SITE.address}</p>
          </div>
        </div>
      )}
    </header>
  );
}
