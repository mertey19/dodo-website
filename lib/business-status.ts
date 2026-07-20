import { businessInfo } from "@/data/business";

type DayKey = keyof typeof businessInfo.openingHours;

const weekdayMap: Record<string, DayKey> = {
  Mon: "monday",
  Tue: "tuesday",
  Wed: "wednesday",
  Thu: "thursday",
  Fri: "friday",
  Sat: "saturday",
  Sun: "sunday",
};

const dayOrder: DayKey[] = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const dayLabels: Record<DayKey, string> = {
  monday: "Pazartesi",
  tuesday: "Salı",
  wednesday: "Çarşamba",
  thursday: "Perşembe",
  friday: "Cuma",
  saturday: "Cumartesi",
  sunday: "Pazar",
};

function timeToMinutes(value: string): number {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

function getZonedParts(now: Date): { day: DayKey; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: businessInfo.timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return {
    day: weekdayMap[values.weekday] ?? "monday",
    minutes: Number(values.hour) * 60 + Number(values.minute),
  };
}

export type BusinessStatusValue = {
  isOpen: boolean;
  label: string;
};

export function getBusinessStatus(now = new Date()): BusinessStatusValue {
  if (businessInfo.alwaysOpen) {
    return { isOpen: true, label: "7/24 açık · Tatil yok" };
  }

  const { day, minutes } = getZonedParts(now);
  const schedule = businessInfo.openingHours[day];
  const opensAt = timeToMinutes(schedule.opens);
  const closesAt = timeToMinutes(schedule.closes);

  if (minutes >= opensAt && minutes < closesAt) {
    return { isOpen: true, label: `Şu an açık · ${schedule.closes}’ye kadar` };
  }

  if (minutes < opensAt) {
    return { isOpen: false, label: `Bugün ${schedule.opens}’de açılıyor` };
  }

  const currentDayIndex = dayOrder.indexOf(day);
  for (let offset = 1; offset <= 7; offset += 1) {
    const nextDay = dayOrder[(currentDayIndex + offset) % dayOrder.length];
    const nextSchedule = businessInfo.openingHours[nextDay];
    if (nextSchedule) {
      const prefix = offset === 1 ? "Yarın" : dayLabels[nextDay];
      return { isOpen: false, label: `${prefix} ${nextSchedule.opens}’de açılıyor` };
    }
  }

  return { isOpen: false, label: "Şu an kapalı" };
}
