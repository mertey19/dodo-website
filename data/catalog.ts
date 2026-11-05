export const catalog = {
  path: "/katalog",
  title: "Ürün ve Adaklık Kataloğu | Akdeniz Kasabı Mersin",
  description: "Dana, kuzu, tavuk, köfte, sucuk, mangal paketleri ve adaklık koyun-keçi seçenekleri. Güncel fiyat ve müsaitlik için Akdeniz Kasabı’nı arayın.",
  updatedAt: "2026-11-05",
  edition: "Kasım 2026",
  pdfPath: "/katalog/akdeniz-kasabi-katalog.pdf",
  phoneDisplay: "0553 776 61 62",
  priceLabel: "Güncel fiyat için arayın",
  availabilityNote: "Fiyat, miktar ve müsaitlik telefon görüşmesinde teyit edilir. Katalog sabit fiyat veya stok garantisi içermez.",
  imageNote: "Ürün sunum görselleri temsilidir. Adaklık ve paketlenmiş et fotoğrafları işletmemizin gerçek çekimleridir; güncel seçenekler değişebilir.",
  groups: [
    { id: "dana", title: "Dana eti", subtitle: "Tencere yemeğinden ızgaraya", description: "Yemek planınıza uygun kesimi seçin; miktarı ve hazırlama tercihinizi görüşmede belirtin.", productIds: ["dana-kusbasi", "dana-kiyma", "dana-antrikot", "dana-bonfile"] },
    { id: "kuzu", title: "Kuzu eti", subtitle: "Sofranıza uygun kesimler", description: "Pirzola ve kuşbaşı seçenekleriyle ızgara, şiş ve tencere yemekleri için hazırlık.", productIds: ["kuzu-pirzola", "kuzu-kusbasi"] },
    { id: "tavuk", title: "Tavuk ürünleri", subtitle: "Günlük sofralar ve mangal", description: "Fırın ve ızgara için tavuk pirzola; mangal için marine tavuk şiş seçenekleri.", productIds: ["tavuk-pirzola", "tavuk-sis"] },
    { id: "kofte-sucuk", title: "Köfte ve sucuk", subtitle: "Kahvaltıdan akşam sofrasına", description: "Kasap köfte ve ev yapımı sucuk seçeneklerini inceleyin. İçerik ve hazırlama ayrıntılarını bize sorun.", productIds: ["kasap-kofte", "ev-yapimi-sucuk"] },
    { id: "mangal", title: "Mangal ve paketler", subtitle: "Kişi sayınızı söyleyin", description: "Karışık seçki ve paketlerin gramajını, içeriğini ve toplam fiyatını siparişten önce birlikte netleştirelim.", productIds: ["karisik-izgara"] },
  ],
} as const;
