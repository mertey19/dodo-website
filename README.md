# Akdeniz Kasabı

Akdeniz Kasabı için geliştirilen modern, responsive ve çok sayfalı tanıtım sitesi.

## Kurulum

Node.js `22.13.0` veya daha yeni bir sürüm gerektirir.

```bash
npm install
npm run dev
```

Production build için:

```bash
npm run build
```

## İçerik yönetimi

- Telefon, WhatsApp, adres, çalışma saatleri ve harita bilgileri: `data/business.ts`
- Ürün kategorileri ve ürünler: `data/products.ts`
- Kampanyalar: `data/campaigns.ts`
- Yayın izni alınmış doğrulanmış yorumlar: `data/testimonials.ts`
- Gerçek mağaza ve ürün fotoğrafları: `data/gallery.ts`

Kampanyalar `active`, `startsAt` ve `endsAt` alanlarıyla otomatik olarak yayına girer veya yayından kalkar. Tarihler ISO 8601 ve saat dilimiyle yazılmalıdır; örnek: `2026-08-31T23:59:59+03:00`.

Yorum ve galeri dizileri boşken ilgili bölümler otomatik olarak gizlenir. Gerçek fotoğrafları WebP veya AVIF biçiminde `public/images/store` altında tutun; temsili görselleri gerçek mağaza fotoğrafı olarak etiketlemeyin.

## Ölçüm ve gizlilik

Ölçüm varsayılan olarak kapalıdır. İhtiyaç halinde aşağıdaki değişkenler kullanılabilir:

- `NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN`: anonim sayfa görüntüleme ölçümü.
- `NEXT_PUBLIC_ANALYTICS_ENDPOINT`: yalnızca buton eylemi ve sayfa yolunu alan özel ölçüm uç noktası.

Form alanlarındaki ad, telefon, mesaj ve sipariş miktarı analiz olaylarına gönderilmez. Google Maps, ziyaretçi `Haritayı Göster` düğmesine basana kadar yüklenmez.

Gerçek işletme bilgileri girildikten sonra `NEXT_PUBLIC_SITE_URL` ortam değişkeni yayın adresine ayarlanmalıdır.
