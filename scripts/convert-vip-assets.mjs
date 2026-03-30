/**
 * Converts VIP PNGs in public/brand/ to WebP when present.
 * Run: node scripts/convert-vip-assets.mjs
 */
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const brand = join(__dirname, "..", "public", "brand");
const featuresDir = join(brand, "features");

async function toWebpIfExists(srcName, destName, resizeOpts = null) {
  const src = join(brand, srcName);
  if (!existsSync(src)) {
    console.log(`skip (missing): ${srcName}`);
    return;
  }
  let p = sharp(src);
  if (resizeOpts) {
    p = p.resize(resizeOpts);
  }
  await p.webp({ quality: 88 }).toFile(join(brand, destName));
  console.log(`ok: ${destName}`);
}

async function featureToWebp(srcName, destName) {
  const src = join(brand, srcName);
  if (!existsSync(src)) {
    console.log(`skip (missing): ${srcName}`);
    return;
  }
  const { mkdir } = await import("node:fs/promises");
  await mkdir(featuresDir, { recursive: true });
  await sharp(src)
    .resize(960, null, { withoutEnlargement: true, fit: "inside" })
    .webp({ quality: 86 })
    .toFile(join(featuresDir, destName));
  console.log(`ok: features/${destName}`);
}

async function main() {
  await toWebpIfExists("hero-image-vip.png", "hero-image-vip.webp", {
    width: 2560,
    withoutEnlargement: true,
    fit: "inside",
  });
  await toWebpIfExists("hero-cjis.png", "hero-cjis.webp", {
    width: 2560,
    withoutEnlargement: true,
    fit: "inside",
  });
  const navLogoDest = join(brand, "verbasense.webp");
  for (const [png, webp] of [
    ["verbasense.png", "verbasense.webp"],
    ["verbasense-logo.png", "verbasense.webp"],
  ]) {
    const src = join(brand, png);
    if (existsSync(src)) {
      await sharp(src).trim().webp({ quality: 92 }).toFile(join(brand, webp));
      console.log(`ok (trim): ${webp}`);
    }
  }
  if (!existsSync(navLogoDest)) {
    for (const name of ["verbaSense Logo.webp", "verbaSense Logo.png"]) {
      const src = join(brand, name);
      if (existsSync(src)) {
        await sharp(src).webp({ quality: 92 }).toFile(navLogoDest);
        console.log(`ok: verbasense.webp (from ${name})`);
        break;
      }
    }
  }
  const hyphenTransparent = join(brand, "verbaSense-Logo-transparent.webp");
  const spaceTransparent = join(brand, "verbaSense Logo-transparent.webp");
  if (existsSync(spaceTransparent)) {
    await sharp(spaceTransparent).webp({ quality: 92 }).toFile(hyphenTransparent);
    console.log("ok: verbaSense-Logo-transparent.webp");
  }
  await featureToWebp("audio-transcription-vip.png", "audio-transcription-vip.webp");
  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
