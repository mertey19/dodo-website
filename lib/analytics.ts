export function trackAnalyticsEvent(name: string): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("akdeniz:analytics", { detail: { name } }));
}
