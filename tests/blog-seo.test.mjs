import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";
import { blogPosts, blogTopics, districtPosts, featuredGuideSlugs, guidePosts, kitchenGuidePosts, localGuidePosts, productGuidePosts } from "../data/blog.ts";
import { categories, getCategoryHref } from "../data/products.ts";
import { categoryContent } from "../data/product-categories.ts";

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

test("13 ilçe yazısı ve 31 ürün, alışveriş ve mutfak rehberi benzersizdir", async () => {
  assert.equal(districtPosts.length, 13);
  assert.equal(guidePosts.length, 31);
  assert.equal(productGuidePosts.length, 4);
  assert.equal(localGuidePosts.length, 4);
  assert.equal(kitchenGuidePosts.length, 15);
  assert.equal(blogPosts.length, 44);
  assert.equal(blogPosts.length, districtPosts.length + guidePosts.length);
  assert.deepEqual(new Set(districtPosts.map((post) => post.district)), new Set(districts));
  assert.ok(guidePosts.every((post) => !post.district));
  for (const key of ["slug", "title", "description"]) {
    assert.equal(new Set(blogPosts.map((post) => post[key])).size, blogPosts.length, key);
  }
  for (const post of blogPosts) {
    assert.match(post.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(categories.some((category) => category.id === post.productCategory));
    if (post.updatedAt) assert.ok(new Date(post.updatedAt) >= new Date(post.publishedAt));
    assert.equal(new Set(post.sections.map((section) => section.id)).size, post.sections.length);
    for (const section of post.sections) {
      for (const link of section.links ?? []) {
        assert.ok(link.label.length > 8);
        const target = new URL(link.href, origin);
        assert.equal(target.origin, origin);
        assert.ok(["/", "/urunler", "/iletisim", "/blog", ...categories.map((category) => getCategoryHref(category.id)), ...blogPosts.map((item) => `/blog/${item.slug}`)].includes(target.pathname), link.href);
        if (target.searchParams.has("kategori")) assert.ok(categories.some((category) => category.id === target.searchParams.get("kategori")));
      }
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

test("konu menüsü ve yeni rehberler geçerli, karşılıklı içerik bağlantılarına sahiptir", () => {
  assert.equal(blogTopics.length, 6);
  const topicSlugs = blogTopics.flatMap((topic) => topic.slugs);
  assert.equal(new Set(topicSlugs).size, topicSlugs.length);
  for (const slug of [...topicSlugs, ...featuredGuideSlugs]) {
    assert.ok(blogPosts.some((post) => post.slug === slug), slug);
  }
  const oldPosts = blogPosts.filter((post) => !localGuidePosts.includes(post));
  for (const post of localGuidePosts) {
    const path = `/blog/${post.slug}`;
    assert.ok(topicSlugs.includes(post.slug), `konu menüsü: ${post.slug}`);
    assert.ok(oldPosts.some((old) => old.sections.some((section) => section.links?.some((link) => link.href === path))), `mevcut içerikten bağlantı: ${post.slug}`);
    assert.ok(post.sections.some((section) => section.links?.some((link) => oldPosts.some((old) => link.href === `/blog/${old.slug}`))), `mevcut içeriğe bağlantı: ${post.slug}`);
    assert.ok(post.sections.length >= 4);
    assert.ok(post.imageAlt.includes("temsili"));
    assert.ok(post.sections.every((section) => section.paragraphs.length >= 2));
  }
});

test("15 mutfak yazısı özgün paragraflar, kaynaklar ve gelen bağlantılar içerir", () => {
  const paragraphs = kitchenGuidePosts.flatMap((post) => [post.intro, ...post.sections.flatMap((section) => section.paragraphs)]);
  assert.equal(new Set(paragraphs).size, paragraphs.length, "Yeni yazılarda aynı paragraf tekrar edilmemeli");
  const categoryLinks = Object.values(categoryContent).flatMap((content) => content.guideSlugs);
  for (const post of kitchenGuidePosts) {
    assert.equal(post.sections.length, 4);
    assert.ok(post.sections.every((section) => section.paragraphs.length >= 2));
    assert.ok(post.imageAlt.includes("temsili"));
    assert.ok(!post.district);
    assert.ok(!post.updatedAt, "Yeni yazının yayın tarihi güncelleme tarihiyle değiştirilmemeli");
    const incoming = categoryLinks.includes(post.slug) || blogPosts.some((other) => other.slug !== post.slug && (other.relatedSlugs.includes(post.slug) || other.sections.some((section) => section.links?.some((link) => link.href === `/blog/${post.slug}`))));
    assert.ok(incoming, `gelen içerik bağlantısı: ${post.slug}`);
    for (const source of post.sources ?? []) {
      const url = new URL(source.url);
      assert.equal(url.protocol, "https:");
      assert.equal(url.hostname, "www.fsis.usda.gov");
      assert.ok(source.label.startsWith("USDA:"));
    }
  }
  for (const slug of ["pismis-et-yemekleri-saklama-isitma", "donmus-et-guvenli-cozundurme", "kiyma-buzdolabi-dondurucu-saklama", "airfryer-tavuk-pirzola-pisirme", "tavuk-sis-marinasyon-rehberi"]) {
    assert.ok(kitchenGuidePosts.find((post) => post.slug === slug)?.sources?.length, `güvenlik kaynağı: ${slug}`);
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
  const topicNavigation = html.match(/<nav[^>]*aria-labelledby="blog-topics-heading"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
  assert.ok(topicNavigation);
  for (const topic of blogTopics) {
    assert.ok(topicNavigation.includes(topic.title));
    for (const slug of topic.slugs) assert.ok(topicNavigation.includes(`href="/blog/${slug}"`));
  }
  const kitchenSection = html.match(/<section[^>]*id="mutfak-rehberleri"[^>]*>([\s\S]*?)<\/section>/)?.[1];
  assert.ok(kitchenSection);
  for (const post of kitchenGuidePosts) assert.ok(kitchenSection.includes(`href="/blog/${post.slug}"`));
  assert.equal([...kitchenSection.matchAll(/<a\b/g)].length, 15);
  const home = await page("/");
  assert.equal(home.response.status, 200);
  assert.ok(home.html.includes('href="/blog"'));
  for (const slug of featuredGuideSlugs) assert.ok(home.html.includes(`href="/blog/${slug}"`));
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
    assert.equal(article.dateModified, post.updatedAt ?? post.publishedAt);
    assert.ok(html.includes(`property="article:modified_time" content="${post.updatedAt ?? post.publishedAt}"`));
    assert.equal(article.image[0], `${origin}${post.image}`);
    assert.equal(article.about.name, post.district ? `${post.district}, Mersin` : "Mersin");
    assert.ok(!html.includes("undefined, Mersin"));
    assert.ok(html.includes('href="tel:+905537766162"'));
    assert.ok(html.includes("destination=36.8269527%2C34.6054432"));
    for (const section of post.sections) {
      for (const link of section.links ?? []) assert.ok(html.includes(`href="${link.href}"`), link.href);
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

test("ticari sayfalar kendi başlık, canonical ve sosyal paylaşım URL’lerini kullanır", { skip: !baseUrl }, async () => {
  const expected = [
    ["/", "Mersin Kasap | 7/24 Açık Akdeniz Kasabı"],
    ["/urunler", "Mersin Et Çeşitleri ve Kasap Ürünleri | Akdeniz Kasabı"],
    ["/hakkimizda", "Akdeniz Kasabı Hakkında | Toroslar, Mersin"],
    ["/iletisim", "Akdeniz Kasabı İletişim ve Yol Tarifi | Mersin"],
  ];
  for (const [path, title] of expected) {
    const { response, html } = await page(path);
    assert.equal(response.status, 200, path);
    assert.ok(html.includes(`<title>${title}</title>`), `title: ${path}`);
    const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
    const openGraphUrl = html.match(/<meta[^>]*property="og:url"[^>]*content="([^"]+)"/)?.[1];
    assert.ok(canonical, `canonical: ${path}`);
    assert.ok(openGraphUrl, `og:url: ${path}`);
    assert.equal(new URL(canonical).href, new URL(path, origin).href, `canonical: ${path}`);
    assert.equal(new URL(openGraphUrl).href, new URL(path, origin).href, `og:url: ${path}`);
    assert.ok(html.includes(`property="og:title" content="${title}"`), `og:title: ${path}`);
    assert.ok(html.includes(`name="twitter:title" content="${title}"`), `twitter:title: ${path}`);
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
    if (path === "/") {
      const faq = structuredData(html).find((item) => item["@type"] === "FAQPage");
      assert.equal(faq.mainEntity.length, 7);
      for (const item of faq.mainEntity) {
        assert.ok(html.includes(item.name));
        assert.ok(html.includes(item.acceptedAnswer.text));
      }
    }
    if (path === "/urunler") for (const post of productGuidePosts) assert.ok(html.includes(`href="/blog/${post.slug}"`));
  }
  const filtered = await page("/urunler?kategori=tavuk");
  assert.equal(filtered.response.status, 200);
  assert.ok(filtered.html.includes(`rel="canonical" href="${origin}/urunler"`));
  assert.ok(filtered.html.includes(`property="og:url" content="${origin}/urunler"`));
});

test("sitemap yeni yazıları yalnızca production domain ile içerir", { skip: !baseUrl }, async () => {
  const { response, html } = await page("/sitemap.xml");
  assert.equal(response.status, 200);
  const urls = [...html.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.equal(new Set(urls).size, urls.length);
  assert.equal(urls.length, blogPosts.length + categories.length + 6);
  for (const url of urls) assert.equal(new URL(url).origin, origin);
  for (const path of ["/blog", ...blogPosts.map((post) => `/blog/${post.slug}`)]) {
    assert.ok(urls.includes(`${origin}${path}`), path);
  }
  for (const post of blogPosts) {
    const entry = [...html.matchAll(/<url>([\s\S]*?)<\/url>/g)].find((match) => match[1].includes(`${origin}/blog/${post.slug}</loc>`));
    assert.ok(entry, post.slug);
    const modified = entry[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1];
    assert.equal(new Date(modified).getTime(), new Date(post.updatedAt ?? post.publishedAt).getTime(), post.slug);
  }
  const robots = await page("/robots.txt");
  assert.ok(robots.html.includes(`Sitemap: ${origin}/sitemap.xml`));
});

test("var olmayan blog yazısı 404 döner", { skip: !baseUrl }, async () => {
  const { response } = await page("/blog/boyle-bir-yazi-yok");
  assert.equal(response.status, 404);
});
