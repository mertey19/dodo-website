import assert from "node:assert/strict";
import test from "node:test";

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
  assert.match(html, /FAQPage/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Lorem ipsum/i);
  assert.doesNotMatch(html, /Örnek müşteri yorumu|örnek marka metni/i);
});

test("temel sayfalar sunucu tarafında yanıt verir", async () => {
  for (const pathname of ["/urunler", "/hakkimizda", "/iletisim", "/gizlilik"]) {
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
