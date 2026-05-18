import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre").max(100),
  phone: z.string().trim().min(6, "Ingresa un teléfono válido").max(20),
  message: z.string().trim().min(5, "Cuéntanos un poco más").max(800),
});

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const msg = `Hola, soy ${data.name}. Tel: ${data.phone}. ${data.message}`;
    window.open(whatsappUrl(msg), "_blank");
    setSent(true);
  };

  return (
    <section id="contacto" className="py-28 lg:py-40 bg-beige">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-accent">Contacto</span>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl text-balance">
            Agenda tu <span className="italic">evaluación</span>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Cuéntanos qué deseas mejorar de tu sonrisa y te contactaremos en menos de 24 horas.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full border border-border flex items-center justify-center"><MapPin className="size-4 text-accent" /></div>
              <div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground">Dirección</div>
                <div className="mt-1">{SITE.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full border border-border flex items-center justify-center"><Phone className="size-4 text-accent" /></div>
              <div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground">WhatsApp</div>
                <div className="mt-1">{SITE.phone}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full border border-border flex items-center justify-center"><Mail className="size-4 text-accent" /></div>
              <div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground">Email</div>
                <div className="mt-1">{SITE.email}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full border border-border flex items-center justify-center"><Clock className="size-4 text-accent" /></div>
              <div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground">Horario</div>
                <ul className="mt-1 space-y-0.5">
                  {SITE.hours.map((h) => (
                    <li key={h.day} className="text-sm"><span className="text-muted-foreground">{h.day} · </span>{h.time}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 aspect-[16/10] rounded-3xl overflow-hidden border border-border shadow-soft">
            <iframe
              title="Mapa Dental Atelier"
              src="https://www.google.com/maps?q=Santiago+de+Surco,+Lima,+Peru&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form onSubmit={onSubmit} className="reveal bg-background rounded-3xl border border-border p-8 lg:p-12 shadow-soft h-fit lg:sticky lg:top-28">
          <div className="space-y-6">
            <div>
              <label className="text-xs tracking-widest uppercase text-muted-foreground">Nombre</label>
              <input name="name" maxLength={100} className="mt-2 w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-lg" placeholder="Tu nombre" />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-muted-foreground">Teléfono</label>
              <input name="phone" maxLength={20} className="mt-2 w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-lg" placeholder="+51 943 363 431" />
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-muted-foreground">Mensaje</label>
              <textarea name="message" rows={4} maxLength={800} className="mt-2 w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-lg resize-none" placeholder="¿Qué tratamiento te interesa?" />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>

            <button type="submit" className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
              <MessageCircle className="size-4" />
              Enviar por WhatsApp
            </button>
            {sent && <p className="text-xs text-accent-foreground bg-accent/30 rounded-lg px-3 py-2 text-center">Abriendo WhatsApp…</p>}
            <p className="text-[11px] text-muted-foreground text-center">Tus datos solo se usan para coordinar tu evaluación.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
