import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Camila Vásquez", treatment: "Diseño de sonrisa", text: "El proceso fue impecable. Me escucharon, me mostraron una previsualización digital y el resultado superó mis expectativas." },
  { name: "Andrés Paredes", treatment: "Implantes dentales", text: "Pasé de tener miedo al dentista a sentirme totalmente en casa. La atención es de un nivel que no había visto en Lima." },
  { name: "Daniela Mendoza", treatment: "Carillas de porcelana", text: "Las carillas se ven naturales, nadie nota que las tengo. Solo notan que me veo radiante." },
  { name: "Renato Salas", treatment: "Ortodoncia invisible", text: "Trato premium, puntualidad absoluta y resultados visibles desde el primer mes." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);
  const r = reviews[i];

  return (
    <section id="testimonios" className="py-28 lg:py-40 bg-beige">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <span className="text-xs tracking-[0.3em] uppercase text-accent reveal">Testimonios</span>
        <h2 className="mt-4 font-display text-4xl lg:text-6xl reveal">
          Lo que dicen nuestros <span className="italic">pacientes</span>.
        </h2>

        <div className="mt-16 reveal">
          <div className="flex justify-center gap-1 mb-8">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="size-5 fill-accent text-accent" />
            ))}
          </div>
          <blockquote
            key={i}
            className="font-display text-2xl sm:text-3xl lg:text-4xl text-balance leading-snug animate-fade-in"
          >
            “{r.text}”
          </blockquote>
          <div className="mt-10">
            <div className="font-medium">{r.name}</div>
            <div className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{r.treatment}</div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <button onClick={prev} aria-label="Anterior" className="size-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Ir a testimonio ${k + 1}`}
                  className={`h-1 rounded-full transition-all ${k === i ? "w-10 bg-accent" : "w-4 bg-border"}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Siguiente" className="size-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
