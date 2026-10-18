import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";
import { categories, getCategoryHref, products } from "../data/products.ts";
import { categoryContent } from "../data/product-categories.ts";
import { blogPosts } from "../data/blog.ts";

const origin = "https://www.akdenizkasabi.com.tr";
const baseUrl = process.env.TEST_BASE_URL;
const paths = categories.map((category) => getCategoryHref(category.id));
async function page(path) {
  const response = await fetch(new URL(path, baseUrl), { redirect: "manual" });
  return { response, html: await response.text() };
}
function structuredData(html) {
  return [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap((match) => { const value = JSON.parse(match[1]); return value["@graph"] ?? [value]; });
}

test("altı ürün sayfası benzersiz, gerçek ürün ve rehberlerle eşleşir", async () => {
  assert.equal(categories.length, 6);
  assert.equal(new Set(paths).size, categories.length);
  assert.deepEqual(Object.keys(categoryContent).sort(), categories.map((category) => category.id).sort());
  for (const key of ["title", "description", "heading", "intro"]) {
    assert.equal(new Set(Object.values(categoryContent).map((item) => item[key])).size, categories.length, key);
  }
  for (const category of categories) {
    const content = categoryContent[category.id];
    assert.match(category.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(content.productIds.length > 0);
    assert.equal(new Set(content.productIds).size, content.productIds.length);
    for (const id of content.productIds) assert.ok(products.some((product) => product.id === id), id);
    for (const slug of content.guideSlugs) assert.ok(blogPosts.some((post) => post.slug === slug), slug);
    assert.equal(content.sections.length, 3);
    assert.equal(content.questions.length, 2);
    await access(new URL(`../public${category.image}`, import.meta.url));
  }
});

test("kategori sayfaları 200, kendi SEO bilgileri ve görünür ürün listesiyle sunulur", { skip: !baseUrl }, async () => {
  for (const category of categories) {
    const path = getCategoryHref(category.id);
    const content = categoryContent[category.id];
    const { response, html } = await page(path);
    assert.equal(response.status, 200, path);
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1, path);
    assert.ok(html.includes(`<title>${content.title}</title>`));
    assert.ok(html.includes(content.heading));
    assert.ok(html.includes(`name="description" content="${content.description}"`));
    assert.ok(html.includes(`rel="canonical" href="${origin}${path}"`));
    assert.ok(html.includes(`property="og:url" content="${origin}${path}"`));
    assert.ok(html.includes(`property="og:image" content="${origin}${category.image}"`));
    assert.ok(html.includes(`name="twitter:title" content="${content.title}"`));
    assert.doesNotMatch(html, /Çalışma saatleri yükleniyor/);
    assert.ok(html.includes("7/24 açık · Tatil yok"));
    assert.ok(html.includes("Temsili görsel"));
    const schemas = structuredData(html);
    const collection = schemas.find((item) => item["@type"] === "CollectionPage");
    assert.equal(collection.url, `${origin}${path}`);
    assert.equal(collection.mainEntity.numberOfItems, content.productIds.length);
    for (const [index, id] of content.productIds.entries()) {
      assert.ok(html.includes(`<article id="${id}"`));
      assert.equal(collection.mainEntity.itemListElement[index].url, `${origin}${path}#${id}`);
      assert.equal(collection.mainEntity.itemListElement[index].name, products.find((product) => product.id === id).name);
    }
    const crumbs = schemas.find((item) => item["@type"] === "BreadcrumbList");
    assert.equal(crumbs.itemListElement.at(-1).item, `${origin}${path}`);
    assert.equal(crumbs.itemListElement.length, 3);
    assert.ok(!schemas.some((item) => ["Product", "AggregateRating"].includes(item["@type"])));
    for (const section of content.sections) { assert.ok(html.includes(section.heading)); assert.ok(html.includes(section.text)); }
    for (const item of content.questions) { assert.ok(html.includes(item.question)); assert.ok(html.includes(item.answer)); }
    for (const slug of content.guideSlugs) assert.ok(html.includes(`href="/blog/${slug}"`));
    for (const destination of paths) assert.ok(html.includes(`href="${destination}"`));
    assert.ok(html.includes('href="tel:+905537766162"'));
    assert.ok(html.includes("destination=36.8269527%2C34.6054432"));
    assert.ok(html.includes('data-analytics="category_whatsapp_click"'));
    const whatsapp = [...html.matchAll(/href="(https:\/\/wa\.me\/[^\"]+)"/g)].map((match) => new URL(match[1].replaceAll("&amp;", "&")));
    assert.ok(whatsapp.every((url) => url.pathname === "/905537766162"));
    assert.ok(whatsapp.some((url) => url.searchParams.get("text")?.includes(category.title)));
  }
});

test("ana sayfa, katalog ve bloglar kategorilere doğrudan bağlanır", { skip: !baseUrl }, async () => {
  for (const path of ["/", "/urunler"]) {
    const { html } = await page(path);
    for (const destination of paths) assert.ok(html.includes(`href="${destination}"`), `${path}: ${destination}`);
    assert.doesNotMatch(html, /style="[^"]*opacity:\s*0(?:;|")/);
  }
  for (const category of categories) {
    const slug = categoryContent[category.id].guideSlugs[0];
    const post = blogPosts.find((item) => item.slug === slug);
    const { html } = await page(`/blog/${slug}`);
    const article = html.match(/<article\b[\s\S]*?<\/article>/)?.[0];
    assert.ok(article?.includes(`href="${getCategoryHref(post.productCategory)}"`));
  }
});

test("sitemap içindeki tüm 37 adres production domainindedir ve HTTP 200 döner", { skip: !baseUrl }, async () => {
  const { html } = await page("/sitemap.xml");
  const urls = [...html.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.equal(urls.length, categories.length + blogPosts.length + 6);
  assert.equal(new Set(urls).size, urls.length);
  for (const path of paths) assert.ok(urls.includes(`${origin}${path}`));
  for (const href of urls) {
    const url = new URL(href);
    assert.equal(url.origin, origin);
    assert.equal(url.search, "");
    assert.equal(url.hash, "");
    const { response } = await page(url.pathname);
    assert.equal(response.status, 200, href);
  }
});

test("olmayan kategoriler 404, eski filtreler 200 ve katalog canonical ile çalışır", { skip: !baseUrl }, async () => {
  for (const path of ["/urunler/olmayan-kategori", "/urunler/constructor", "/urunler/toString"]) {
    const { response } = await page(path);
    assert.equal(response.status, 404, path);
  }
  const { response, html } = await page("/urunler?kategori=tavuk");
  assert.equal(response.status, 200);
  assert.ok(html.includes(`rel="canonical" href="${origin}/urunler"`));
  assert.ok(html.includes("Tavuk Pirzola"));
});
