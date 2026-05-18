import doctor from "@/assets/doctor.jpg";
import clinic from "@/assets/clinic-interior.jpg";

export function About() {
  return (
    <section id="nosotros" className="py-28 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-6 relative reveal">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-luxury">
            <img src={doctor} alt="Especialistas de Dental Atelier" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-10 -right-6 lg:-right-12 w-2/3 aspect-[4/3] rounded-3xl overflow-hidden border-8 border-background shadow-luxury hidden sm:block">
            <img src={clinic} alt="Interior de la clínica" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="lg:col-span-6 reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-accent">Sobre nosotros</span>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl text-balance">
            Un atelier dedicado al arte de la <span className="italic">sonrisa</span>.
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              En Dental Atelier creemos que una sonrisa bien diseñada transforma la forma en que una persona se presenta al mundo.
              Por eso trabajamos como un taller: a mano, con atención al detalle y total dedicación a cada paciente.
            </p>
            <p>
              Nuestro equipo combina especialistas certificados, tecnología de última generación y un laboratorio propio para
              asegurar resultados precisos, naturales y duraderos.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="border-t border-border pt-5">
              <div className="font-display text-3xl">Misión</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Diseñar sonrisas que celebren la individualidad y la salud de cada paciente.
              </p>
            </div>
            <div className="border-t border-accent pt-5">
              <div className="font-display text-3xl">Filosofía</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Estética natural, precisión clínica y experiencia premium en cada visita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
