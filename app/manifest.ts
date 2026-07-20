import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Akdeniz Kasabı",
    short_name: "Akdeniz Kasabı",
    description: "Toroslar, Mersin'de 7/24 açık kasap ve şarküteri.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff7e8",
    theme_color: "#4d0e19",
    lang: "tr-TR",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/logo-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
