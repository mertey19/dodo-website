export const adaklikService = {
  path: "/mersin-adaklik",
  title: "Mersin Adaklık Koyun ve Keçi | Akdeniz Kasabı",
  description:
    "Mersin’de adaklık koyun ve keçi satışı, kesim ve teslimat için Akdeniz Kasabı’na ulaşın. Güncel fiyat ve planlama için 0553 776 61 62’den 7/24 bilgi alın.",
  whatsappMessage:
    "Merhaba Akdeniz Kasabı, Mersin’de adaklık koyun veya keçi için bilgi almak istiyorum. Güncel seçenekleri, fiyatı, kesim ve teslimat ayrıntılarını paylaşabilir misiniz?",
  districts: [
    "Toroslar", "Akdeniz", "Yenişehir", "Mezitli", "Tarsus", "Erdemli",
    "Silifke", "Anamur", "Bozyazı", "Aydıncık", "Gülnar", "Mut", "Çamlıyayla",
  ],
  services: [
    {
      title: "Adaklık koyun ve keçi",
      text: "Koyun veya keçi tercihinizi paylaşın. Mevcut hayvan seçenekleri ve güncel fiyat hakkında doğrudan işletmemizden bilgi alın.",
    },
    {
      title: "Kesim planlaması",
      text: "Kesim talebinizi, istediğiniz tarihi ve hazırlama beklentinizi görüşmede belirtin. Hizmet kapsamını ve uygun zamanı birlikte netleştirelim.",
    },
    {
      title: "Mersin geneli teslimat",
      text: "İlçenizi ve teslim noktanızı paylaşın. Teslimat tarihi, uygunluk ve varsa ek ücret, sipariş kesinleşmeden önce görüşülür.",
    },
  ],
  steps: [
    { title: "İhtiyacınızı anlatın", text: "Koyun veya keçi tercihinizi, düşündüğünüz tarihi ve Mersin’deki ilçenizi bildirin." },
    { title: "Teklifin kapsamını öğrenin", text: "Hayvan bedeli, kesim ve teslimatın toplam fiyata dahil olup olmadığını sorun. Güncel seçenekleri karşılaştırın." },
    { title: "Planı birlikte kesinleştirelim", text: "Seçim, toplam bedel, kesim zamanı ve teslim ayrıntıları karşılıklı teyit edildikten sonra siparişinizi planlayalım." },
  ],
  questions: [
    {
      question: "Mersin adaklık fiyatlarını nasıl öğrenebilirim?",
      answer: "Adaklık fiyatı koyun veya keçi seçimine, mevcut hayvana ve talep edilen hizmete göre değişir. Güncel fiyatı 0553 776 61 62’den veya WhatsApp üzerinden öğrenebilirsiniz. Kesim ve teslimatın teklife dahil olup olmadığını görüşmede netleştirin.",
    },
    {
      question: "Adaklık için koyun ve keçi seçenekleri var mı?",
      answer: "Akdeniz Kasabı adaklık koyun ve keçi satışı için hizmet verir. Mevcut seçenekler ve uygunluk değişebildiğinden tercihinizi telefonla paylaşarak güncel bilgi alın.",
    },
    {
      question: "Mersin’in hangi ilçelerine teslimat yapılıyor?",
      answer: "Mersin genelinde; Toroslar, Akdeniz, Yenişehir, Mezitli, Tarsus, Erdemli, Silifke, Anamur, Bozyazı, Aydıncık, Gülnar, Mut ve Çamlıyayla için teslimat talebinizi iletebilirsiniz. Adresinize uygun tarih, teslimat şekli ve varsa ek ücret ayrıca teyit edilir. Mağazamız Toroslar’dadır; ilçe listesi şube listesi değildir.",
    },
    {
      question: "Gece veya pazar günü adaklık için arayabilir miyim?",
      answer: "Evet, telefonla haftanın her günü 24 saat bilgi alabilirsiniz. Kesim ve teslimatın yapılacağı saat ise görüşmede planlanır; 7/24 iletişim, her talebin hemen teslim edileceği anlamına gelmez.",
    },
    {
      question: "Akdeniz Kasabı’na nasıl ulaşabilirim?",
      answer: "Adresimiz Mithat Toroğlu, Kuvayi Milliye Cd., 33080 Toroslar/Mersin. Telefonumuz 0553 776 61 62. Sayfadaki Yol Tarifi bağlantısı mevcut konumunuzdan mağazamıza rota açar.",
    },
  ],
} as const;
