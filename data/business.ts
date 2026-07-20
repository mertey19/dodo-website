export const businessInfo = {
  name: "Akdeniz Kasabı",
  slogan: "Günlük Taze Et ve Şarküteri",
  phone: "+90 553 776 61 62",
  whatsapp: "905537766162",
  address: "Mithat Toroğlu, Kuvayi Milliye Cd., 33080 Toroslar/Mersin",
  structuredAddress: {
    streetAddress: "Mithat Toroğlu, Kuvayi Milliye Cd.",
    postalCode: "33080",
    addressLocality: "Toroslar",
    addressRegion: "Mersin",
    addressCountry: "TR",
  },
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Mithat%20Toro%C4%9Flu%2C%20Kuvayi%20Milliye%20Cd.%2C%2033080%20Toroslar%2FMersin",
  mapEmbedUrl: "https://www.google.com/maps?q=Mithat%20Toro%C4%9Flu%2C%20Kuvayi%20Milliye%20Cd.%2C%2033080%20Toroslar%2FMersin&output=embed",
  instagramUrl: "",
  timeZone: "Europe/Istanbul",
  workingHours: {
    weekdays: "08:00 - 20:00",
    sunday: "09:00 - 18:00",
  },
  openingHours: {
    monday: { opens: "08:00", closes: "20:00" },
    tuesday: { opens: "08:00", closes: "20:00" },
    wednesday: { opens: "08:00", closes: "20:00" },
    thursday: { opens: "08:00", closes: "20:00" },
    friday: { opens: "08:00", closes: "20:00" },
    saturday: { opens: "08:00", closes: "20:00" },
    sunday: { opens: "09:00", closes: "18:00" },
  },
  serviceInfo: {
    pickup: "Siparişinizi hazırlanmış şekilde mağazadan teslim alabilirsiniz.",
    delivery: "Teslimat bölgesi ve seçenekleri için WhatsApp’tan bilgi alın.",
    payment: "Güncel ödeme seçeneklerini sipariş sırasında teyit edin.",
    minimumOrder: "Minimum sipariş bilgisi için WhatsApp’tan sorun.",
  },
} as const;

export const navigation = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Ürünlerimiz", href: "/urunler" },
  { label: "Kampanyalar", href: "/#kampanyalar" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
] as const;
