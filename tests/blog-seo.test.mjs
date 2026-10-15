import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";
import { blogPosts } from "../data/blog.ts";

const origin = "https://www.akdenizkasabi.com.tr";
const baseUrl = process.env.TEST_BASE_URL;
const districts = ["Akdeniz", "Anamur", "Aydıncık", "Bozyazı", "Çamlıyayla", "Erdemli", "Gülnar", "Mezitli", "Mut", "Silifke", "Tarsus", "Toroslar", "Yenişehir"];

function structuredData(html) {
  return [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap((match) => { const value = JSON.parse(match[1]); return value["@graph"] ?? [value]; });
}

async function page(path) {
  const response = await fetch(new URL(path, baseUrl), { redirect: "manual" });
  return { response, html: await response.text() };
}

test("13 ilçenin yazıları benzersizdir ve içerik bağlantıları geçerlidir", async () => {
  assert.equal(blogPosts.length, 13);
  assert.deepEqual(new Set(blogPosts.map((post) => post.district)), new Set(districts));
  for (const key of ["slug", "title", "description"]) {
    assert.equal(new Set(blogPosts.map((post) => post[key])).size, 13, key);
  }
  for (const post of blogPosts) {
    assert.match(post.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(new Set(post.sections.map((section) => section.id)).size, post.sections.length);
    await access(new URL(`../public${post.image}`, import.meta.url));
    for (const slug of post.relatedSlugs) {
      assert.ok(blogPosts.some((item) => item.slug === slug), slug);
      assert.notEqual(slug, post.slug);
    }
  }
});

test("blog listesi ve ana sayfa yazılara taranabilir bağlantılar verir", { skip: !baseUrl }, async () => {
  const { response, html } = await page("/blog");
  assert.equal(response.status, 200);
  assert.ok(html.includes(`rel="canonical" href="${origin}/blog"`));
  for (const post of blogPosts) assert.ok(html.includes(`href="/blog/${post.slug}"`), post.slug);
  const home = await page("/");
  assert.equal(home.response.status, 200);
  assert.ok(home.html.includes('href="/blog"'));
  assert.ok(home.html.includes(`href="/blog/${blogPosts[0].slug}"`));
});

test("tüm yazılar HTTP 200, doğru canonical ve makale verisiyle sunulur", { skip: !baseUrl }, async () => {
  for (const post of blogPosts) {
    const { response, html } = await page(`/blog/${post.slug}`);
    assert.equal(response.status, 200, post.slug);
    const url = `${origin}/blog/${post.slug}`;
    assert.ok(html.includes(`rel="canonical" href="${url}"`), `canonical: ${post.slug}`);
    assert.ok(html.includes(`property="og:url" content="${url}"`), `og:url: ${post.slug}`);
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
    assert.ok(html.includes(post.intro));
    const schema = structuredData(html);
    const article = schema.find((item) => item["@type"] === "BlogPosting");
    assert.ok(article, post.slug);
    assert.equal(article.url, url);
    assert.equal(article.headline, post.title);
    assert.equal(article.datePublished, post.publishedAt);
    assert.equal(article.image[0], `${origin}${post.image}`);
    const breadcrumbs = schema.find((item) => item["@type"] === "BreadcrumbList");
    assert.equal(breadcrumbs.itemListElement.at(-1).item, url);
    const store = schema.find((item) => Array.isArray(item["@type"]) && item["@type"].includes("LocalBusiness"));
    assert.equal(store.address.addressLocality, "Toroslar");
  }
});

test("sitemap yeni yazıları yalnızca production domain ile içerir", { skip: !baseUrl }, async () => {
  const { response, html } = await page("/sitemap.xml");
  assert.equal(response.status, 200);
  const urls = [...html.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.equal(new Set(urls).size, urls.length);
  assert.equal(urls.length, 19);
  for (const url of urls) assert.equal(new URL(url).origin, origin);
  for (const path of ["/blog", ...blogPosts.map((post) => `/blog/${post.slug}`)]) {
    assert.ok(urls.includes(`${origin}${path}`), path);
  }
  const robots = await page("/robots.txt");
  assert.ok(robots.html.includes(`Sitemap: ${origin}/sitemap.xml`));
});

test("var olmayan blog yazısı 404 döner", { skip: !baseUrl }, async () => {
  const { response } = await page("/blog/boyle-bir-yazi-yok");
  assert.equal(response.status, 404);
});
