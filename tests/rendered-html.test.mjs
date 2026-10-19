import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { blogTopics, kitchenGuidePosts, localGuidePosts } from "../data/blog.ts";

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
  for (const pathname of ["/urunler", "/urunler/tavuk-urunleri", "/urunler/mangallik-et", "/hakkimizda", "/iletisim", "/gizlilik"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  }
});

test("sipariş ve iletişim akışları görünür", async () => {
  const productsResponse = await render("/urunler");
  assert.match(await productsResponse.text(), /Sipariş Listem/);

  const contactResponse = await render("/iletisim");
  assert.match(await contactResponse.text(), /WhatsApp’ta Gönder/);
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
