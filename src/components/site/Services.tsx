import smile from "@/assets/service-smile.jpg";
import veneers from "@/assets/service-veneers.jpg";
import implants from "@/assets/service-implants.jpg";
import ortho from "@/assets/service-ortho.jpg";
import { ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

const services = [
  { title: "Diseño de sonrisa", desc: "Planificación digital y resultado natural alineado a tu rostro.", img: smile },
  { title: "Carillas dentales", desc: "Porcelana ultradelgada de alta estética y durabilidad.", img: veneers },
  { title: "Implantes dentales", desc: "Solución definitiva con tecnología guiada de precisión.", img: implants },
  { title: "Ortodoncia", desc: "Alineadores invisibles y brackets estéticos.", img: ortho },
  { title: "Blanqueamiento dental", desc: "Aclaramiento profesional sin sensibilidad.", img: smile },
  { title: "Odontopediatría", desc: "Atención cuidadosa para los más pequeños.", img: veneers },
  { title: "Rehabilitación oral", desc: "Devuelve función, armonía y estética a tu sonrisa.", img: implants },
];

export function Services() {
  return (
    <section id="servicios" className="py-28 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16 reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-accent">Tratamientos</span>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl text-balance">
            Cada sonrisa, una obra <span className="italic">a medida</span>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Combinamos arte, ciencia y tecnología para crear resultados que se sienten propios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`reveal group relative overflow-hidden rounded-3xl bg-card border border-border hover-rise ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/12]" : "aspect-[4/5]"}`}>
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute top-5 right-5 size-10 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="size-4" />
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8 text-background">
                <h3 className={`font-display ${i === 0 ? "text-3xl lg:text-4xl" : "text-2xl"}`}>
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-background/85 max-w-md">{s.desc}</p>
                <a
                  href={whatsappUrl(`Hola, me interesa ${s.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs tracking-widest uppercase text-accent"
                >
                  Más información <ArrowUpRight className="size-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
