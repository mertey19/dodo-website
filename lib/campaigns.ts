import type { Campaign } from "@/types";

function parseBoundary(value: string | null | undefined): number | null {
  if (!value) return null;
  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? Number.NaN : timestamp;
}

export function isCampaignVisible(campaign: Campaign, now = new Date()): boolean {
  if (!campaign.active) return false;

  const startsAt = parseBoundary(campaign.startsAt);
  const endsAt = parseBoundary(campaign.endsAt);
  if (Number.isNaN(startsAt) || Number.isNaN(endsAt)) return false;

  const currentTime = now.getTime();
  return (startsAt === null || currentTime >= startsAt) && (endsAt === null || currentTime <= endsAt);
}

export function formatCampaignEndDate(endsAt?: string | null): string | null {
  if (!endsAt) return null;
  const date = new Date(endsAt);
  if (Number.isNaN(date.getTime())) return null;

  return `${new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  }).format(date)} tarihine kadar`;
}
