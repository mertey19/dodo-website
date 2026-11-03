export type BusinessPhoto = {
  id: string;
  src: string;
  thumbnail: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type BusinessVideo = {
  slug: string;
  src: string;
  poster: string;
  title: string;
  description: string;
  durationSeconds: number;
  uploadDate: string;
};

// Siteye eklenme tarihi; çekim tarihi veya güncel stok bilgisi değildir.
export const mediaPublishedAt = "2026-11-03T21:47:38+03:00";

const photo = (id: string, width: number, height: number, alt: string, caption: string): BusinessPhoto => ({
  id, width, height, alt, caption,
  src: `/images/gercek-cekimler/${id}.webp`,
  thumbnail: `/images/gercek-cekimler/${id}-640.webp`,
});

export const businessPhotos: BusinessPhoto[] = [
  photo("mersin-adaklik-koc", 1200, 1600, "Yemlik önünde duran açık renkli boynuzlu koç ve arkasındaki koyunlar", "Adaklık seçeneklerinden koçlar"),
  photo("koyun-yemlik", 1200, 1600, "Yemliğin yanında duran beyaz koyun ve arkasındaki sürü", "Koyunlardan bir yakın plan"),
  photo("koc-yakin-plan", 1200, 1600, "Çit önünde duran siyah başlı, kıvırcık yünlü koç", "Koçlardan bir yakın plan"),
  photo("paketlenmis-etler", 1600, 808, "Tezgâhta streçle kapatılmış beyaz tabaklarda hazırlanmış et paketleri", "Tezgâhımızdan paketlenmiş etler"),
  photo("koc-surusu", 1200, 1600, "Açık hava barınağında bir arada duran boynuzlu koçlar", "Barınakta koçlar"),
  photo("keci-yakin-plan", 1200, 1600, "Bakıcı tarafından tutulurken arka ayakları üzerinde duran siyah keçi", "Keçilerden bir yakın plan"),
  photo("koyun-surusu", 1200, 1600, "Metal yemliklerin çevresinde bir arada duran koyunlar", "Yemliklerin çevresindeki koyunlar"),
  photo("koyun-barinagi", 900, 1600, "Üstü kapalı barınakta dinlenen kalabalık koyun sürüsü", "Koyun barınağından bir kare"),
];

const video = (slug: string, title: string, description: string, durationSeconds: number): BusinessVideo => ({
  slug, title, description, durationSeconds,
  src: `/videos/gercek-cekimler/${slug}.mp4`,
  poster: `/images/gercek-cekimler/${slug}-video.webp`,
  uploadDate: mediaPublishedAt,
});

export const businessVideos: BusinessVideo[] = [
  video("merada-keciler", "Merada keçiler", "Akdeniz Kasabı’nın paylaştığı bu kısa çekimde keçiler ağaçların bulunduğu açık arazide otluyor. Sürü ve çevresindeki alan farklı açılardan görülüyor.", 21),
  video("koyun-surusu-ve-barinak", "Koyun sürüsü ve barınak", "Çekim barınaktaki koyunlar ve yemliklerden başlayıp dışarıdaki sürüye uzanıyor. Akdeniz Kasabı’nın koyun görüntülerini bu kısa videoda izleyebilirsiniz.", 20.55),
  video("paketlenmis-et-cesitleri", "Tezgâhtan paketlenmiş etler", "Tezgâh boyunca dizilmiş tabaklardaki doğranmış ve kemikli etler ile kıyma görüntüleniyor. Bu çekim Akdeniz Kasabı’nın paylaştığı ürün hazırlığı görüntülerindendir.", 12.8),
  video("kecilerin-barinaga-gecisi", "Keçilerin barınağa geçişi", "Siyah, beyaz ve kahverengi keçilerin ahşap rampadan barınak alanına geçişi görülüyor. Akdeniz Kasabı’nın paylaştığı sürü görüntülerinden biri.", 43.38),
  video("barinakta-koyun-ve-keciler", "Barınakta koyun ve keçiler", "Gündüz çekilen bu kısa videoda üstü kapalı alandaki koyunlar, keçiler ve yemlikler görülüyor. Güncel adaklık seçeneklerini telefonla ayrıca teyit edebilirsiniz.", 7.27),
  video("aksam-keci-surusu", "Akşam keçi sürüsünden görüntüler", "Aydınlatılmış barınakta yemliklerin çevresinde duran ve dolaşan keçiler görülüyor. Bu video Akdeniz Kasabı tarafından paylaşılan akşam sürü çekimidir.", 27.93),
  video("dogranmis-et-yakin-plan", "Doğranmış etten yakın plan", "Tabak içine hazırlanmış küçük parçalar hâlindeki etlerin yakın plan görüntüsü. Kesim türü, miktar ve güncel fiyat bilgisi için Akdeniz Kasabı ile görüşebilirsiniz.", 5.13),
];

export const adaklikCover = businessPhotos[0];
export const getVideoPath = (slug: string) => `/videolar/${slug}`;
export function formatVideoDuration(seconds: number) {
  const rounded = Math.round(seconds);
  return `${Math.floor(rounded / 60)}:${String(rounded % 60).padStart(2, "0")}`;
}
