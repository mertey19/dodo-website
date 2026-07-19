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
- Örnek yorum içerikleri: `data/testimonials.ts`

Gerçek işletme bilgileri girildikten sonra `NEXT_PUBLIC_SITE_URL` ortam değişkeni yayın adresine ayarlanmalıdır.
