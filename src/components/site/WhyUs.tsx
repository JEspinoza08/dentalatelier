import { Sparkles, Microscope, Leaf, FlaskConical, GraduationCap, Gem } from "lucide-react";

const items = [
  { icon: Sparkles, title: "Atención personalizada", desc: "Cada tratamiento es planificado a tu medida." },
  { icon: Microscope, title: "Tecnología avanzada", desc: "Escaneo digital, diseño 3D y cirugía guiada." },
  { icon: Leaf, title: "Resultados naturales", desc: "Sonrisas que respetan tu rostro y biotipo." },
  { icon: FlaskConical, title: "Laboratorio propio", desc: "Control total sobre cada pieza protésica." },
  { icon: GraduationCap, title: "Especialistas certificados", desc: "Equipo con formación nacional e internacional." },
  { icon: Gem, title: "Tratamientos modernos", desc: "Protocolos vanguardistas y mínimamente invasivos." },
];

export function WhyUs() {
  return (
    <section className="py-28 lg:py-40 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16 reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-accent">Por qué elegirnos</span>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl text-balance">
            Una experiencia distinta, <span className="italic text-accent">de principio a fin</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10 rounded-3xl overflow-hidden">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="reveal group bg-primary p-10 lg:p-12 hover:bg-primary-foreground/[0.04] transition-colors"
            >
              <div className="size-14 rounded-2xl border border-accent/40 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Icon className="size-6" />
              </div>
              <h3 className="font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
