/**
 * Converts added PNG marketing assets under public/brand/ to WebP.
 * Run: node scripts/convert-marketing-images.mjs
 */
import { mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const brand = join(root, "public", "brand");
const featuresDir = join(brand, "features");

const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

async function resizeLogoWebp(srcPath, outName, w, h) {
  await sharp(srcPath)
    .ensureAlpha()
    .resize(w, h, { fit: "contain", background: transparent })
    .webp({ quality: 92 })
    .toFile(join(brand, outName));
}

async function main() {
  await mkdir(featuresDir, { recursive: true });

  await sharp(join(brand, "Hero image.png"))
    .resize(2560, null, { withoutEnlargement: true, fit: "inside" })
    .webp({ quality: 86 })
    .toFile(join(brand, "hero.webp"));

  const logoSrc = join(
    brand,
    "CourtSense_logo_with_AI_and_justice_elements-removebg-preview.png",
  );
  await resizeLogoWebp(logoSrc, "logo-nav.webp", 128, 88);
  await resizeLogoWebp(logoSrc, "logo-hero.webp", 880, 520);
  await resizeLogoWebp(logoSrc, "logo-footer.webp", 112, 76);
  await sharp(logoSrc)
    .ensureAlpha()
    .resize(1024, null, {
      fit: "inside",
      withoutEnlargement: true,
      background: transparent,
    })
    .webp({ quality: 92 })
    .toFile(join(brand, "logo-transparent.webp"));

  const features = [
    ["audio-transcription.png", "transcription.webp"],
    ["AI summarization.png", "summarization.webp"],
    ["doc-summarization.png", "documents.webp"],
    ["smart-search.png", "search.webp"],
    ["face-recognition.png", "verification.webp"],
    ["Action-items-extraction.png", "action-items-extraction.webp"],
  ];

  for (const [file, out] of features) {
    await sharp(join(brand, file))
      .resize(960, null, { withoutEnlargement: true, fit: "inside" })
      .webp({ quality: 86 })
      .toFile(join(featuresDir, out));
  }

  console.log(
    "Wrote hero.webp, logo-transparent.webp, logo-nav/hero/footer.webp, features/*.webp",
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
