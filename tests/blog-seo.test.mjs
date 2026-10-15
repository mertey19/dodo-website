import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";
import { blogPosts, districtPosts, guidePosts } from "../data/blog.ts";

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

test("13 ilçe yazısı ve 8 alışveriş rehberi benzersizdir; içerik bağlantıları geçerlidir", async () => {
  assert.equal(districtPosts.length, 13);
  assert.equal(guidePosts.length, 8);
  assert.equal(blogPosts.length, districtPosts.length + guidePosts.length);
  assert.deepEqual(new Set(districtPosts.map((post) => post.district)), new Set(districts));
  assert.ok(guidePosts.every((post) => !post.district));
  for (const key of ["slug", "title", "description"]) {
    assert.equal(new Set(blogPosts.map((post) => post[key])).size, blogPosts.length, key);
  }
  for (const post of blogPosts) {
    assert.match(post.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(new Set(post.sections.map((section) => section.id)).size, post.sections.length);
    for (const section of post.sections) {
      if (section.table) {
        assert.ok(section.table.caption);
        assert.ok(section.table.rows.length > 0);
        assert.ok(section.table.rows.every((row) => row.length === section.table.columns.length));
      }
    }
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
  const collection = structuredData(html).find((item) => item["@type"] === "CollectionPage");
  assert.equal(collection.mainEntity.numberOfItems, blogPosts.length);
  assert.deepEqual(collection.mainEntity.itemListElement.map((item) => item.url), blogPosts.map((post) => `${origin}/blog/${post.slug}`));
  const districtNavigation = html.match(/<nav[^>]*aria-label="İlçeye göre yazılar"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
  assert.ok(districtNavigation);
  assert.equal([...districtNavigation.matchAll(/<a\b/g)].length, 13);
  for (const post of districtPosts) assert.ok(districtNavigation.includes(`href="#${post.slug}"`));
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
    assert.equal(article.about.name, post.district ? `${post.district}, Mersin` : "Mersin");
    assert.ok(!html.includes("undefined, Mersin"));
    assert.ok(html.includes('href="tel:+905537766162"'));
    assert.ok(html.includes("destination=36.8269527%2C34.6054432"));
    for (const section of post.sections) {
      if (section.table) {
        assert.ok(html.includes("<table"));
        assert.ok(html.includes(section.table.caption));
        for (const cell of section.table.rows.flat()) assert.ok(html.includes(cell));
      }
    }
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
  assert.equal(urls.length, blogPosts.length + 6);
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
