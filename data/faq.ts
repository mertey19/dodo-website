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
    question: "Mersin’de Akdeniz Kasabı hangi ilçede?",
    answer: `Mağazamız Toroslar ilçesindedir. Adres: ${businessInfo.address}. Akdeniz işletme adımızdır; mağazamızın bulunduğu ilçe Toroslar’dır. İletişim sayfasından mağazamıza yol tarifi alabilirsiniz.`,
  },
  {
    question: "Akdeniz Kasabı gece ve tatil günlerinde açık mı?",
    answer: `${businessInfo.workingHours.display}. Gece, hafta sonu ve tatil günlerinde gelebilirsiniz. Belirli bir ürün veya özel kesim için stok ve hazırlanma zamanını gelmeden önce ${businessInfo.phone} üzerinden teyit edin.`,
  },
  {
    question: "Hangi et ve şarküteri ürünlerini inceleyebilirim?",
    answer: "Dana kıyma, kuşbaşı, antrikot ve bonfile; kuzu pirzola ve kuşbaşı; tavuk pirzola ve şiş; kasap köfte, sucuk ve karışık ızgara seçenekleri ürünler sayfamızda yer alır. Güncel stok, fiyat ve hazırlama seçeneklerini görüşme sırasında öğrenebilirsiniz.",
  },
] as const;
