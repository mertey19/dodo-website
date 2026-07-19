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

export function hasConfiguredValue(value: string): boolean {
  return Boolean(value && value !== "#" && !value.includes("X") && !value.includes("buraya"));
}
