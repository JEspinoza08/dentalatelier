export const SITE = {
  brand: "Dental Atelier",
  tagline: "Odontología estética avanzada",
  phone: "+51 943 363 431",
  whatsappNumber: "51943363431",
  whatsappMessage: "Hola, me gustaría agendar una evaluación en Dental Atelier.",
  address: "Calle Bayovar Sur 295, Santiago de Surco, Lima, Perú",
  email: "hola@dentalatelier.pe",
  hours: [
    { day: "Lunes – Viernes", time: "9:00 – 20:00" },
    { day: "Sábados", time: "9:00 – 14:00" },
    { day: "Domingos", time: "Cerrado" },
  ],
  social: {
    instagram: "https://instagram.com/dentalatelier.pe",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },
};

export const whatsappUrl = (msg?: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg ?? SITE.whatsappMessage)}`;
