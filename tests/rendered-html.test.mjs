import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { blogTopics, kitchenGuidePosts, localGuidePosts } from "../data/blog.ts";
import { adaklikService } from "../data/adaklik.ts";
import { businessPhotos, businessVideos, getVideoPath } from "../data/media.ts";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("ana sayfayı marka içeriğiyle sunar", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Akdeniz Kasabı/);
  assert.match(html, /Günlük taze/);
  assert.match(html, /WhatsApp/);
  assert.match(html, /Toroslar/);
  assert.match(html, /Sık Sorulan Sorular/);
  assert.match(html, /7\/24 açık/);
  assert.match(html, /Tatil yok/);
  assert.match(html, /share\.google\/y7D1PuFTSDbaFpeOZ/);
  assert.match(html, /36\.8269527/);
  assert.match(html, /34\.6054432/);
  assert.match(html, /www\.google\.com\/maps\/dir\/\?api=1/);
  assert.match(html, /dir_action=navigate/);
  assert.match(html, /FAQPage/);
  assert.match(html, /\"@type\":\"WebSite\"/);
  assert.match(html, /logo-720\.png/);
  assert.match(html, /favicon-48\.png/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Lorem ipsum/i);
  assert.doesNotMatch(html, /Örnek müşteri yorumu|örnek marka metni/i);
  assert.doesNotMatch(html, /Çalışma saatleri yükleniyor/);
  assert.doesNotMatch(html, /style="[^"]*opacity:\s*0(?:;|")/);
});

test("gömülü haritayı tam işletme pinine bağlar", async () => {
  const businessSource = await readFile(new URL("../data/business.ts", import.meta.url), "utf8");
  assert.match(businessSource, /cid=15433133215550243945/);
  assert.match(businessSource, /z=18/);
});

test("temel sayfalar sunucu tarafında yanıt verir", async () => {
  for (const pathname of ["/urunler", "/urunler/tavuk-urunleri", "/urunler/mangallik-et", "/mersin-adaklik", "/hakkimizda", "/iletisim", "/gizlilik"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  }
});

test("adaklık hizmeti doğru iletişim, canonical ve görünür içerikle sunulur", async () => {
  const response = await render(adaklikService.path);
  assert.equal(response.status, 200);
  const html = await response.text();
  const canonical = `https://www.akdenizkasabi.com.tr${adaklikService.path}`;
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
  assert.ok(html.includes(`<title>${adaklikService.title}</title>`));
  assert.ok(html.includes(`rel="canonical" href="${canonical}"`));
  assert.ok(html.includes(`property="og:url" content="${canonical}"`));
  assert.ok(html.includes('href="tel:+905537766162"'));
  assert.ok(html.includes('data-analytics="adaklik_hero_phone_click"'));
  assert.ok(html.includes("destination=36.8269527%2C34.6054432"));
  assert.match(html, /Kesim ve teslimat zamanı ayrıca planlanır/);
  assert.equal(new Set(adaklikService.districts).size, 13);
  for (const district of adaklikService.districts) assert.ok(html.includes(district), district);
  for (const item of adaklikService.questions) {
    assert.ok(html.includes(item.question));
    assert.ok(html.includes(item.answer));
  }
  const whatsappLinks = [...html.matchAll(/href="(https:\/\/wa\.me\/[^\"]+)"/g)]
    .map((match) => new URL(match[1].replaceAll("&amp;", "&")));
  assert.ok(whatsappLinks.some((url) => url.pathname === "/905537766162" && url.searchParams.get("text") === adaklikService.whatsappMessage));
  const graph = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap((match) => { const value = JSON.parse(match[1]); return value["@graph"] ?? [value]; });
  const service = graph.find((item) => item["@type"] === "Service");
  assert.equal(service.url, canonical);
  assert.equal(service.provider["@id"], "https://www.akdenizkasabi.com.tr/#business");
  assert.equal(service.areaServed.name, "Mersin");
  assert.equal(service.offers, undefined, "Doğrulanmamış sabit fiyat eklenmemeli");
  const faq = graph.find((item) => item["@type"] === "FAQPage");
  assert.deepEqual(faq.mainEntity.map((item) => ({ question: item.name, answer: item.acceptedAnswer.text })), adaklikService.questions);
  const breadcrumb = graph.find((item) => item["@type"] === "BreadcrumbList");
  assert.equal(breadcrumb.itemListElement.at(-1).item, canonical);
  assert.doesNotMatch(html, /style="[^"]*opacity:\s*0(?:;|")/);
});

test("adaklık bölümü ana sayfa, menü ve sitemap üzerinden keşfedilir", async () => {
  const homeHtml = await (await render("/")).text();
  assert.ok(homeHtml.includes('id="mersin-adaklik"'));
  assert.ok(homeHtml.includes('aria-labelledby="home-adaklik-heading"'));
  assert.ok(homeHtml.includes('href="/mersin-adaklik"'));
  assert.ok(homeHtml.includes('data-analytics="home_adaklik_phone_click"'));
  const sitemapResponse = await render("/sitemap.xml");
  assert.equal(sitemapResponse.status, 200);
  const xml = await sitemapResponse.text();
  assert.ok(xml.includes("<loc>https://www.akdenizkasabi.com.tr/mersin-adaklik</loc>"));
  const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.equal(locations.length, new Set(locations).size);
  assert.ok(locations.every((url) => url.startsWith("https://www.akdenizkasabi.com.tr/")));
});

test("sipariş ve iletişim akışları görünür", async () => {
  const productsResponse = await render("/urunler");
  assert.match(await productsResponse.text(), /Sipariş Listem/);

  const contactResponse = await render("/iletisim");
  assert.match(await contactResponse.text(), /WhatsApp’ta Gönder/);
});

test("ana sayfa ve adaklık galerileri fotoğraf, video ve Instagram bağlantılarını SSR ile sunar", async () => {
  for (const pathname of ["/", "/mersin-adaklik"]) {
    const html = await (await render(pathname)).text();
    assert.ok(html.includes('href="https://www.instagram.com/akdenizkasabi33/"'));
    for (const photo of businessPhotos) {
      assert.ok(html.includes(`href="${photo.src}"`), photo.src);
      assert.ok(html.includes(`alt="${photo.alt}"`), photo.alt);
    }
    const videos = [...html.matchAll(/<video\b[^>]*>/g)].map((match) => match[0]);
    assert.equal(videos.length, 7);
    assert.ok(videos.every((tag) => tag.includes('preload="none"') && !/autoplay/i.test(tag)));
    for (const video of businessVideos) {
      assert.ok(html.includes(`src="${video.src}"`));
      assert.ok(html.includes(`href="${getVideoPath(video.slug)}"`));
    }
    assert.match(html, /ImageGallery/);
    assert.doesNotMatch(html, /instagram.com\/embed|instagram.com\/reel/);
  }
});

test("her video kendi canonical, gerçek süresi ve VideoObject verisiyle sunulur", async () => {
  for (const video of businessVideos) {
    const path = getVideoPath(video.slug);
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
    assert.equal([...html.matchAll(/<video\b/g)].length, 1);
    assert.ok(html.includes(`rel="canonical" href="https://www.akdenizkasabi.com.tr${path}"`));
    const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
    const schema = schemas.find((item) => item["@type"] === "VideoObject");
    assert.equal(schema.name, video.title);
    assert.equal(schema.description, video.description);
    assert.equal(schema.contentUrl, `https://www.akdenizkasabi.com.tr${video.src}`);
    assert.equal(schema.thumbnailUrl, `https://www.akdenizkasabi.com.tr${video.poster}`);
    assert.equal(schema.duration, `PT${video.durationSeconds}S`);
    assert.equal(schema.uploadDate, video.uploadDate);
    assert.ok(html.includes(`poster="${video.poster}"`));
  }
  const invalid = await render("/videolar/boyle-bir-video-yok");
  assert.equal(invalid.status, 404);
});

test("sitemap tüm gerçek fotoğrafları ve yedi videoyu production adresleriyle içerir", async () => {
  const response = await render("/sitemap.xml");
  assert.equal(response.status, 200);
  const xml = await response.text();
  assert.match(xml, /xmlns:image=/);
  assert.match(xml, /xmlns:video=/);
  for (const photo of businessPhotos) assert.ok(xml.includes(`<image:loc>https://www.akdenizkasabi.com.tr${photo.src}</image:loc>`));
  for (const video of businessVideos) {
    assert.ok(xml.includes(`<loc>https://www.akdenizkasabi.com.tr${getVideoPath(video.slug)}</loc>`));
    assert.ok(xml.includes(`<video:content_loc>https://www.akdenizkasabi.com.tr${video.src}</video:content_loc>`));
    assert.ok(xml.includes(`<video:thumbnail_loc>https://www.akdenizkasabi.com.tr${video.poster}</video:thumbnail_loc>`));
  }
  assert.equal([...xml.matchAll(/<video:video>/g)].length, 7);
  assert.doesNotMatch(xml, /localhost|127\.0\.0\.1|example\.com|vercel\.app/);
});

test("konu menüsü ve yeni rehberler JavaScript beklemeden sunulur", async () => {
  const indexResponse = await render("/blog");
  assert.equal(indexResponse.status, 200);
  const indexHtml = await indexResponse.text();
  assert.ok(indexHtml.includes('aria-labelledby="blog-topics-heading"'));
  for (const topic of blogTopics) assert.ok(indexHtml.includes(topic.title));

  for (const post of [...localGuidePosts, ...kitchenGuidePosts]) {
    const response = await render(`/blog/${post.slug}`);
    assert.equal(response.status, 200, post.slug);
    const html = await response.text();
    assert.ok(html.includes(post.intro), post.slug);
    assert.ok(html.includes(`href="https://www.akdenizkasabi.com.tr/blog/${post.slug}"`));
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
    assert.match(html, /BlogPosting/);
    for (const source of post.sources ?? []) assert.ok(html.includes(`href="${source.url}"`));
    assert.doesNotMatch(html, /style="[^"]*opacity:\s*0(?:;|")/);
  }
});
