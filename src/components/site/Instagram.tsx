import { Instagram as IgIcon } from "lucide-react";
import smile from "@/assets/service-smile.jpg";
import veneers from "@/assets/service-veneers.jpg";
import implants from "@/assets/service-implants.jpg";
import ortho from "@/assets/service-ortho.jpg";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";

const feed = [smile, veneers, implants, ortho, before1, after1];

export function InstagramSection() {
  return (
    <section className="py-28 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 reveal">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-accent">@dental.atelier</span>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl">
              Inspírate con nuestras <span className="italic">sonrisas</span>.
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-start sm:self-auto rounded-full border border-border px-5 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <IgIcon className="size-4" />
            Síguenos en Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4">
          {feed.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="reveal group relative aspect-square overflow-hidden rounded-2xl bg-beige"
            >
              <img src={src} alt={`Post ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors flex items-center justify-center">
                <IgIcon className="size-6 text-background opacity-0 group-hover:opacity-100 transition" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
