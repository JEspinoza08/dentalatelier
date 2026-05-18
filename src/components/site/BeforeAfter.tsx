import { useRef, useState } from "react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";

function Slider({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl select-none cursor-ew-resize shadow-luxury bg-beige"
      onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
      onMouseDown={(e) => move(e.clientX)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
    >
      <img src={after} alt="Después" className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt="Antes"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }}
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-px bg-background"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-12 rounded-full bg-background shadow-luxury flex items-center justify-center border border-accent/40">
          <div className="flex gap-0.5">
            <span className="text-accent text-xs">‹</span>
            <span className="text-accent text-xs">›</span>
          </div>
        </div>
      </div>

      <span className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase bg-background/80 px-3 py-1 rounded-full">
        Antes
      </span>
      <span className="absolute top-4 right-4 text-[10px] tracking-[0.3em] uppercase bg-primary text-primary-foreground px-3 py-1 rounded-full">
        Después
      </span>
    </div>
  );
}

const cases = [
  {
    name: "María Fernanda · Carillas de porcelana",
    quote: "“No puedo creer que esta sea mi sonrisa. Se ve completamente natural.”",
  },
  {
    name: "Lucía R. · Diseño de sonrisa integral",
    quote: "“Cuidaron cada detalle. El acompañamiento fue impecable.”",
  },
];

export function BeforeAfter() {
  return (
    <section id="transformaciones" className="py-28 lg:py-40 bg-beige">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 reveal">
          <div className="max-w-xl">
            <span className="text-xs tracking-[0.3em] uppercase text-accent">Transformaciones reales</span>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl">
              Antes y <span className="italic">después</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Cada transformación es planificada digitalmente y validada contigo antes de comenzar el tratamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {cases.map((c) => (
            <div key={c.name} className="reveal">
              <Slider before={before1} after={after1} />
              <div className="mt-6 flex items-start gap-4">
                <div className="h-px flex-1 bg-border mt-3" />
                <div>
                  <p className="font-display text-xl italic text-foreground">{c.quote}</p>
                  <p className="mt-2 text-xs tracking-widest uppercase text-muted-foreground">{c.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
