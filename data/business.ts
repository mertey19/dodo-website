export const businessInfo = {
  name: "Akdeniz Kasabı",
  slogan: "Günlük Taze Et ve Şarküteri",
  phone: "+90XXXXXXXXXX",
  whatsapp: "90XXXXXXXXXX",
  address: "Adres bilgisi buraya eklenecek",
  mapUrl: "#",
  mapEmbedUrl: "",
  instagramUrl: "#",
  workingHours: {
    weekdays: "08:00 - 20:00",
    sunday: "09:00 - 18:00",
  },
} as const;

export const navigation = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Ürünlerimiz", href: "/urunler" },
  { label: "Kampanyalar", href: "/#kampanyalar" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
] as const;
