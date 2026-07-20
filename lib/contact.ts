import { businessInfo } from "@/data/business";

export function buildWhatsappUrl(message?: string): string {
  const text = message ?? `Merhaba ${businessInfo.name}, ürünleriniz hakkında bilgi almak istiyorum.`;
  return `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function buildProductWhatsappUrl(productName: string): string {
  return buildWhatsappUrl(
    `Merhaba ${businessInfo.name}, ${productName} hakkında bilgi almak istiyorum.`,
  );
}

export function buildCampaignWhatsappUrl(campaignName: string): string {
  return buildWhatsappUrl(
    `Merhaba ${businessInfo.name}, ${campaignName} hakkında bilgi almak istiyorum.`,
  );
}

export function buildOrderWhatsappUrl(
  items: Array<{ productName: string; quantity: string }>,
  note?: string,
): string {
  const lines = items.map((item) => `- ${item.productName}: ${item.quantity.trim()}`);
  const noteLine = note?.trim() ? `\nNot: ${note.trim()}` : "";

  return buildWhatsappUrl(
    `Merhaba ${businessInfo.name}, aşağıdaki ürünler için bilgi almak istiyorum:\n\n${lines.join("\n")}${noteLine}\n\nHazırlama, güncel fiyat ve teslim bilgisi paylaşabilir misiniz?`,
  );
}

export function buildContactWhatsappUrl(name: string, phone: string, message: string): string {
  return buildWhatsappUrl(
    `Merhaba ${businessInfo.name}, iletişim formundan yazıyorum.\n\nAd soyad: ${name.trim()}\nTelefon: ${phone.trim()}\nMesaj: ${message.trim()}`,
  );
}

export function hasConfiguredValue(value: string): boolean {
  return Boolean(value && value !== "#" && !value.includes("X") && !value.includes("buraya"));
}
