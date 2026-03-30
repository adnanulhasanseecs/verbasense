/**
 * Generates WebP variants + app icons from public/brand/logo-source.png
 * Removes outer near-white background via edge flood-fill (keeps white artwork inside the shield).
 * Run: node scripts/optimize-brand.mjs
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "public", "brand", "logo-source.png");

/** Pixels with RGB >= threshold (and some alpha) are treated as "page white" for flood from edges only. */
const WHITE_THRESHOLD = 248;

/**
 * @param {Buffer} data - RGBA mutates in place
 * @param {number} width
 * @param {number} height
 */
function floodEraseOuterWhite(data, width, height, threshold = WHITE_THRESHOLD) {
  const idx = (x, y) => (y * width + x) * 4;
  const isRemovable = (x, y) => {
    if (x < 0 || x >= width || y < 0 || y >= height) return false;
    const i = idx(x, y);
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    if (a < 12) return false;
    return r >= threshold && g >= threshold && b >= threshold;
  };

  const visited = new Uint8Array(width * height);
  const q = [];

  function mark(x, y) {
    const pi = y * width + x;
    if (visited[pi]) return;
    if (!isRemovable(x, y)) return;
    visited[pi] = 1;
    q.push([x, y]);
  }

  for (let x = 0; x < width; x++) {
    mark(x, 0);
    mark(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    mark(0, y);
    mark(width - 1, y);
  }

  let qi = 0;
  while (qi < q.length) {
    const [x, y] = q[qi++];
    const i = idx(x, y);
    data[i + 3] = 0;
    mark(x + 1, y);
    mark(x - 1, y);
    mark(x, y + 1);
    mark(x, y - 1);
  }
}

/**
 * @returns {Promise<{ pipeline: import("sharp").Sharp, width: number, height: number }>}
 */
async function loadLogoRgbaPipeline() {
  const meta = await sharp(src).metadata();
  const w = meta.width ?? 1;
  const h = meta.height ?? 1;

  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  if (info.channels !== 4) {
    throw new Error(`Expected 4 channels after ensureAlpha, got ${info.channels}`);
  }

  const copy = Buffer.from(data);
  const skipFlood =
    meta.hasAlpha === true &&
    // Corners already transparent: assume designer exported with alpha
    (() => {
      const idx = (x, y) => (y * w + x) * 4;
      const corners = [
        idx(0, 0),
        idx(w - 1, 0),
        idx(0, h - 1),
        idx(w - 1, h - 1),
      ];
      return corners.every((i) => copy[i + 3] < 30);
    })();

  if (!skipFlood) {
    floodEraseOuterWhite(copy, w, h, WHITE_THRESHOLD);
  }

  const pipeline = sharp(copy, {
    raw: { width: w, height: h, channels: 4 },
  });

  return { pipeline, width: w, height: h };
}

await mkdir(join(root, "public", "brand"), { recursive: true });
await mkdir(join(root, "app"), { recursive: true });

const { pipeline: base, width: w, height: h } = await loadLogoRgbaPipeline();
const ratio = w / h;

// Save processed master (transparent) for version control / reuse
await base.clone().png({ compressionLevel: 9 }).toFile(join(root, "public", "brand", "logo-rgba.png"));

const navH = 40;
const navW = Math.round(navH * ratio);

await base
  .clone()
  .resize(navW, navH, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .webp({ quality: 88, alphaQuality: 100 })
  .toFile(join(root, "public", "brand", "logo-nav.webp"));

const heroW = 420;
const heroH = Math.round(heroW / ratio);
await base
  .clone()
  .resize(heroW, heroH, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .webp({ quality: 90, alphaQuality: 100 })
  .toFile(join(root, "public", "brand", "logo-hero.webp"));

const footH = 36;
const footW = Math.round(footH * ratio);
await base
  .clone()
  .resize(footW, footH, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .webp({ quality: 88, alphaQuality: 100 })
  .toFile(join(root, "public", "brand", "logo-footer.webp"));

// Favicons: transparent letterboxing (browser / OS composite on their own background)
await base
  .clone()
  .resize(48, 48, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(join(root, "app", "icon.png"));

await base
  .clone()
  .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(join(root, "app", "apple-icon.png"));

console.log("Brand assets:", {
  nav: `${navW}x${navH}`,
  hero: `${heroW}x${heroH}`,
  source: `${w}x${h}`,
  masterRgba: "public/brand/logo-rgba.png",
  flood: "edge white >= " + WHITE_THRESHOLD + " (skipped if corners already transparent)",
});
