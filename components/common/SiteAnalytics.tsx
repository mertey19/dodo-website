"use client";

import Script from "next/script";
import { useEffect } from "react";

type AnalyticsEvent = CustomEvent<{ name?: string }>;

export function SiteAnalytics() {
  const cloudflareToken = process.env.NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN;
  const eventEndpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;

  useEffect(() => {
    if (!eventEndpoint) return;

    const sendEvent = (name: string) => {
      void fetch(eventEndpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        keepalive: true,
        body: JSON.stringify({ event: name, path: window.location.pathname }),
      }).catch(() => undefined);
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-analytics]") : null;
      const eventName = target?.dataset.analytics;
      if (eventName) sendEvent(eventName);
    };

    const handleCustomEvent = (event: Event) => {
      const eventName = (event as AnalyticsEvent).detail?.name;
      if (eventName) sendEvent(eventName);
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("akdeniz:analytics", handleCustomEvent);
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("akdeniz:analytics", handleCustomEvent);
    };
  }, [eventEndpoint]);

  if (!cloudflareToken) return null;

  return (
    <Script
      id="cloudflare-web-analytics"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="afterInteractive"
      data-cf-beacon={JSON.stringify({ token: cloudflareToken })}
    />
  );
}
