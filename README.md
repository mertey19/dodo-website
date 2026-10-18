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
- Kalıcı kategori sayfalarının özgün içerikleri: `data/product-categories.ts`
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

Production SEO adresi `lib/seo.ts` içindeki `productionSiteUrl` değeridir: `https://www.akdenizkasabi.com.tr`. Canonical, robots ve sitemap bu sabit adresi kullanır; geliştirme ortamı adresi SEO çıktısına taşınmaz.

## Kategori sayfaları ve SEO kontrolü

Altı ürün grubunun `/urunler/[slug]` altında kalıcı sayfası vardır. Kategori başlığı, açıklaması, ilgili ürünleri ve rehberleri tek veri kaynağından yönetilir. Ana sayfa, katalog, blog yazıları ve alt menü bu sayfalara taranabilir bağlantılar verir. Eski `?kategori=` filtreleri sipariş listesi için korunur; canonical adresleri `/urunler` olarak kalır.

`npm run test:seo` veri bütünlüğünü kontrol eder. HTTP, metadata ve sitemap testlerinin de çalışması için `TEST_BASE_URL` ayarlayın. PowerShell örneği:

```powershell
$env:TEST_BASE_URL = 'https://www.akdenizkasabi.com.tr'
npm run test:seo
```

Vercel Next.js kullandığı için yayına hazırlıkta `npm run lint`, `npm test` ve `npx next build` birlikte kontrol edilmelidir. Animasyonlar sunucudan gelen içeriği gizlemez; 7/24 çalışma bilgisi JavaScript beklemeden görünür.

## Tıklama artışını değerlendirme

Search Console erişimi bu projeye bağlı değildir; kod değişikliği tek başına indekslenme veya tıklama artışı kanıtı sayılmaz. Yayından sonra Performans / Arama sonuçları ekranında son 28 günü önceki 28 günle karşılaştırın. Tıklama, gösterim, TO ve ortalama konumu ayrı değerlendirin; marka sorgularını genel sorgulardan, mobil cihazı masaüstünden ayırın. Yeni kategori sayfalarını sayfa filtresiyle izleyin. Düşük gösterimli tek günlük sonuçlardan çıkarım yapmayın.

Site Haritaları bölümünde `https://www.akdenizkasabi.com.tr/sitemap.xml` kullanılmalıdır. Yeni sayfalar URL Denetimi ile kontrol edilebilir; dizine eklenmeleri garanti değildir. Google İşletme Profili doğrulaması, gerçek ürün/mağaza fotoğrafları, doğru kategori ve çalışma saatleri profil hesabından yönetilmelidir. Sahte yorum, tıklama satın alma ve benzer metinlerle çoğaltılmış ilçe/şube sayfaları kullanılmamalıdır.

Yeni kategori bağlantıları ve WhatsApp/telefon/yol tarifi düğmeleri mevcut olay ölçüm altyapısına etiketlidir. Bunlar, ölçüm uç noktası yapılandırılmadıkça veri toplamaz; bu güncelleme herhangi bir harici takip hizmetini kendiliğinden açmaz.
