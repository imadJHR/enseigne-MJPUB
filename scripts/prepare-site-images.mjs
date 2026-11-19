#!/usr/bin/env node
/**
 * MJ PUB display-image pass.
 * Keeps original client photos and logos untouched; enhances only referenced
 * raster visuals by Lanczos resampling, gentle sharpening, and WebP encoding.
 * Upscaling improves display dimensions, not true photographic detail.
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");
const OUTPUT = path.join(PUBLIC, "optimized");
const SOURCE_DIRS = ["app", "components", "data", "lib"];
const CODE_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".css"]);
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const EXCLUDE = new Set(["/logo.png", "/favicon.ico"]);
const MIN_WIDTH = 1440;
const MAX_UPSCALE = 2.5;
const quoteChars = ['"', "'", String.fromCharCode(96)];

async function walk(directory, accept) {
  const results = [];
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const pathname = path.join(directory, entry.name);
    if (entry.isDirectory()) results.push(...await walk(pathname, accept));
    else if (accept(pathname)) results.push(pathname);
  }
  return results;
}

const codeFiles = (await Promise.all(SOURCE_DIRS.map(async dir => {
  try {
    return await walk(path.join(ROOT, dir), f => CODE_EXTENSIONS.has(path.extname(f)));
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}))).flat();
const code = new Map(await Promise.all(
  codeFiles.map(async file => [file, await fs.readFile(file, "utf8")])
));
const files = await walk(
  PUBLIC,
  f => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()) &&
    !f.startsWith(OUTPUT + path.sep)
);

const referenced = new Set();
const pattern = /["'\x60](\/(?:[A-Za-z0-9_.% -]+\/)*[A-Za-z0-9_.% -]+\.(?:jpe?g|png|webp|avif))["'\x60]/g;
for (const content of code.values()) {
  for (const match of content.matchAll(pattern)) referenced.add(match[1]);
}
const selected = files
  .map(source => ({
    source,
    sitePath: "/" + path.relative(PUBLIC, source).split(path.sep).join("/")
  }))
  .filter(({ sitePath }) => referenced.has(sitePath) && !EXCLUDE.has(sitePath));

let previous = [];
try {
  previous = JSON.parse(await fs.readFile(path.join(OUTPUT, "manifest.json"), "utf8")).images || [];
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
if (!selected.length) {
  if (previous.length) {
    console.log("Already optimized: " + previous.length + " images.");
    process.exit(0);
  }
  throw new Error("No referenced raster image files found.");
}
await fs.mkdir(OUTPUT, { recursive: true });
const manifest = [];
for (const { source, sitePath } of selected) {
  const metadata = await sharp(source, { failOn: "error" }).metadata();
  if (!metadata.width || !metadata.height) {
    throw new Error("Unusable image dimensions: " + sitePath);
  }
  const upscale = Math.min(MAX_UPSCALE, Math.max(1, MIN_WIDTH / metadata.width));
  const outputWidth = Math.round(metadata.width * upscale);
  const displayPath = "/optimized" + sitePath.replace(/\.(?:jpe?g|png|webp|avif)$/i, ".webp");
  const outputFile = path.join(PUBLIC, displayPath.slice(1));
  await fs.mkdir(path.dirname(outputFile), { recursive: true });
  let pipeline = sharp(source, { failOn: "error" }).rotate();
  if (upscale > 1.001) {
    pipeline = pipeline.resize({ width: outputWidth, kernel: "lanczos3", withoutEnlargement: false });
  }
  pipeline = pipeline.sharpen({ sigma: upscale > 1.001 ? 0.65 : 0.45 });
  await pipeline.webp({ quality: 88, effort: 5, alphaQuality: 95 }).toFile(outputFile);
  const result = await sharp(outputFile).metadata();
  manifest.push({
    original: sitePath,
    optimized: displayPath,
    originalSize: (await fs.stat(source)).size,
    size: (await fs.stat(outputFile)).size,
    sourceDimensions: [metadata.width, metadata.height],
    displayDimensions: [result.width, result.height],
    scaled: upscale > 1.001
  });
  for (const [file, content] of code) {
    let updated = content;
    for (const quote of quoteChars) {
      updated = updated.replaceAll(quote + sitePath + quote, quote + displayPath + quote);
    }
    if (updated !== content) code.set(file, updated);
  }
}
for (const [file, content] of code) {
  if (content !== await fs.readFile(file, "utf8")) {
    await fs.writeFile(file, content);
  }
}
const changed = new Set(manifest.map(m => m.original));
manifest.push(...previous.filter(m => !changed.has(m.original)));
manifest.sort((a, b) => a.original.localeCompare(b.original));
await fs.writeFile(
  path.join(OUTPUT, "manifest.json"),
  JSON.stringify({
    method: "Lanczos3 / restrained sharpening / WebP q88; originals preserved",
    images: manifest
  }, null, 2) + "\n"
);
const originalBytes = manifest.reduce((sum, m) => sum + m.originalSize, 0);
const displayBytes = manifest.reduce((sum, m) => sum + m.size, 0);
console.log(
  "Prepared " + manifest.length + " referenced images: " +
  (originalBytes / 1048576).toFixed(1) + " MiB originals -> " +
  (displayBytes / 1048576).toFixed(1) + " MiB optimized assets."
);
