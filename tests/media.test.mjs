import assert from "node:assert/strict";
import { stat, readFile } from "node:fs/promises";
import test from "node:test";
import { businessPhotos, businessVideos, getVideoPath } from "../data/media.ts";

const publicFile = (path) => new URL(`../public${path}`, import.meta.url);

test("sekiz gerçek fotoğrafın tam boy ve küçük sürümleri bulunur", async () => {
  assert.equal(businessPhotos.length, 8);
  assert.equal(new Set(businessPhotos.map((photo) => photo.src)).size, 8);
  for (const photo of businessPhotos) {
    assert.ok(photo.alt.length > 20);
    assert.ok(photo.caption.length > 10);
    assert.ok(photo.width > 0 && photo.height > 0);
    for (const path of [photo.src, photo.thumbnail]) {
      const bytes = await readFile(publicFile(path));
      assert.equal(bytes.subarray(0, 4).toString(), "RIFF", path);
      assert.equal(bytes.subarray(8, 12).toString(), "WEBP", path);
    }
    assert.ok((await stat(publicFile(photo.thumbnail))).size < 200_000, photo.id);
  }
});

test("yedi MP4, poster ve benzersiz izleme adresi bulunur", async () => {
  assert.equal(businessVideos.length, 7);
  assert.equal(new Set(businessVideos.map((video) => getVideoPath(video.slug))).size, 7);
  for (const video of businessVideos) {
    assert.ok(video.durationSeconds > 0);
    assert.ok(Number.isFinite(Date.parse(video.uploadDate)));
    assert.ok((await stat(publicFile(video.poster))).size > 0);
    const bytes = await readFile(publicFile(video.src));
    assert.equal(bytes.subarray(4, 8).toString(), "ftyp");
    const boxes=[];
    for (let offset=0; offset + 8 <= bytes.length;) {
      const size=bytes.readUInt32BE(offset);
      assert.ok(size >= 8, video.slug);
      boxes.push(bytes.subarray(offset+4,offset+8).toString());
      offset+=size;
    }
    assert.ok(boxes.indexOf("moov") >= 0 && boxes.indexOf("moov") < boxes.indexOf("mdat"), `${video.slug}: fast start`);
  }
});

test("yayındaki medya dosyaları ve video sayfaları doğru HTTP yanıtlarını verir", { skip: !process.env.TEST_BASE_URL }, async () => {
  const base = process.env.TEST_BASE_URL;
  for (const photo of businessPhotos) {
    for (const path of [photo.src, photo.thumbnail]) {
      const response = await fetch(new URL(path, base), { method: "HEAD" });
      assert.equal(response.status, 200, path);
      assert.match(response.headers.get("content-type"), /^image\/webp/i);
    }
  }
  for (const video of businessVideos) {
    const response = await fetch(new URL(getVideoPath(video.slug), base));
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.ok(html.includes(`src="${video.src}"`));
    assert.ok(html.includes(`poster="${video.poster}"`));
    assert.ok(html.includes('"@type":"VideoObject"'));
    const poster = await fetch(new URL(video.poster, base), { method: "HEAD" });
    assert.equal(poster.status, 200);
    const clip = await fetch(new URL(video.src, base), { headers: { Range: "bytes=0-1023" } });
    assert.equal(clip.status, 206, video.src);
    assert.match(clip.headers.get("content-type"), /^video\/mp4/i);
    assert.match(clip.headers.get("content-range"), /^bytes 0-1023\//);
    assert.equal((await clip.arrayBuffer()).byteLength, 1024);
  }
});
