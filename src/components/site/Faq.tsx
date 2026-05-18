import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "¿Cuánto dura un diseño de sonrisa?", a: "Entre 2 y 4 semanas en promedio, dependiendo del tratamiento. Te entregamos una previsualización digital antes de comenzar." },
  { q: "¿Las carillas dañan los dientes?", a: "No. Trabajamos con carillas ultradelgadas y técnicas mínimamente invasivas que preservan el esmalte natural." },
  { q: "¿Realizan evaluaciones presenciales?", a: "Sí. Nuestra evaluación incluye diagnóstico, escaneo digital y un plan de tratamiento personalizado." },
  { q: "¿Aceptan pagos en cuotas?", a: "Ofrecemos planes de financiamiento con todas las tarjetas y opciones flexibles según el tratamiento." },
  { q: "¿Atienden a pacientes del extranjero?", a: "Sí. Coordinamos agendas, traslados y tratamientos express para pacientes internacionales." },
  { q: "¿Cuánto dura la garantía de los tratamientos?", a: "Todos nuestros tratamientos cuentan con garantía clínica y seguimiento post-tratamiento." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 lg:py-40 bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center mb-16 reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-accent">Preguntas frecuentes</span>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl">
            Todo lo que <span className="italic">necesitas saber</span>.
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="reveal">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left"
                >
                  <span className="font-display text-xl lg:text-2xl">{f.q}</span>
                  <span className="size-10 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
