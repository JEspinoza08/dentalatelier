const stats = [
  { value: "+1000", label: "Pacientes atendidos" },
  { value: "+5", label: "Años de experiencia" },
  { value: "100%", label: "Tecnología moderna" },
  { value: "1:1", label: "Atención personalizada" },
];

export function Stats() {
  return (
    <section className="py-24 bg-beige">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden shadow-soft">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-background p-10 lg:p-14 text-center reveal hover:bg-card transition-colors"
            >
              <div className="font-display text-5xl lg:text-6xl text-foreground">
                {s.value}
              </div>
              <div className="mt-3 text-sm tracking-widest uppercase text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
