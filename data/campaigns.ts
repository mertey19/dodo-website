import type { Campaign } from "@/types";

export const campaigns: Campaign[] = [
  {
    id: "haftanin-izgara-paketi",
    title: "Haftanın Izgara Paketi",
    description: "Hafta sonu sofraları için dengeli bir ızgara seçkisi.",
    contents: ["Dana ızgaralık çeşitleri", "Kuzu pirzola", "Kasap köfte"],
    image: "/images/beef-cuts.jpg",
    active: true,
    startsAt: null,
    endsAt: null,
  },
  {
    id: "aile-boyu-kofte-paketi",
    title: "Aile Boyu Köfte Paketi",
    description: "Kalabalık aile sofralarına uygun, günlük hazırlanan köfte paketi.",
    contents: ["Kasap köfte", "Izgaralık sebze önerisi", "Pişirme tavsiyesi"],
    image: "/images/deli-products.jpg",
    active: true,
    startsAt: null,
    endsAt: null,
  },
  {
    id: "karisik-mangal-paketi",
    title: "Karışık Mangal Paketi",
    description: "Mangal planınızı kolaylaştıran, kişi sayısına göre hazırlanabilen seçki.",
    contents: ["Dana ve kuzu çeşitleri", "Tavuk şiş", "Ev yapımı sucuk"],
    image: "/images/deli-products.jpg",
    active: true,
    startsAt: null,
    endsAt: null,
  },
];
