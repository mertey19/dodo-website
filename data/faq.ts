import { businessInfo } from "@/data/business";

export const faqItems = [
  {
    question: "WhatsApp’tan nasıl sipariş veririm?",
    answer:
      "Ürünler sayfasında istediğiniz ürünleri sipariş listenize ekleyin, miktarları yazın ve listeyi tek mesaj olarak WhatsApp’tan gönderin. Mesaj bir satın alma veya ödeme işlemi başlatmaz; işletmeyle talebinizi görüşmenizi sağlar.",
  },
  {
    question: "Ürünler isteğime göre hazırlanıyor mu?",
    answer:
      "Kesim, porsiyon ve hazırlama tercihinizi sipariş mesajına ekleyebilirsiniz. Uygun hazırlama seçenekleri işletme tarafından sipariş görüşmesi sırasında teyit edilir.",
  },
  {
    question: "Güncel fiyatları nasıl öğrenebilirim?",
    answer:
      "Güncel fiyat ve stok bilgisi için ürün adını ve istediğiniz miktarı WhatsApp üzerinden iletebilir veya işletmeyi telefonla arayabilirsiniz.",
  },
  {
    question: "Teslimat seçeneği var mı?",
    answer: businessInfo.serviceInfo.delivery,
  },
  {
    question: "Adres ve çalışma saatleri nedir?",
    answer: `${businessInfo.address}. ${businessInfo.workingHours.display}.`,
  },
] as const;
