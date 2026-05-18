import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-accent/40 blur-xl group-hover:bg-accent/60 transition" />
      <span className="relative flex items-center gap-3 rounded-full bg-primary text-primary-foreground pl-4 pr-5 py-3 shadow-luxury hover:scale-105 transition-transform">
        <MessageCircle className="size-5 text-accent" />
        <span className="text-sm hidden sm:inline">WhatsApp</span>
      </span>
    </a>
  );
}
