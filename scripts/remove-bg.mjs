// Removes the white studio background from the Warrior flapjack box photo,
// keeping the product opaque. Flood-fills from the image border through
// white-ish pixels only, so it doesn't punch holes in the white badges
// printed on the box itself (they're enclosed by dark box colour, not
// connected to the outer white background).
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, "..", "public", "images", "warrior-flapjack.jpg");
const OUT = path.join(__dirname, "..", "public", "images", "warrior-flapjack.png");

const WHITE_THRESHOLD = 228; // min channel value to count as "white-ish"
const MAX_CHANNEL_SPREAD = 18; // max(R,G,B) - min(R,G,B), keeps it neutral/white not colored

async function run() {
  const img = sharp(SRC).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const isWhiteish = (idx) => {
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    return min >= WHITE_THRESHOLD && max - min <= MAX_CHANNEL_SPREAD;
  };

  const visited = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let qHead = 0;
  let qTail = 0;

  const pushIfWhite = (x, y) => {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const p = y * width + x;
    if (visited[p]) return;
    const idx = p * channels;
    if (!isWhiteish(idx)) return;
    visited[p] = 1;
    queue[qTail++] = p;
  };

  // Seed the flood fill from every border pixel.
  for (let x = 0; x < width; x++) {
    pushIfWhite(x, 0);
    pushIfWhite(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    pushIfWhite(0, y);
    pushIfWhite(width - 1, y);
  }

  while (qHead < qTail) {
    const p = queue[qHead++];
    const x = p % width;
    const y = (p / width) | 0;
    pushIfWhite(x + 1, y);
    pushIfWhite(x - 1, y);
    pushIfWhite(x, y + 1);
    pushIfWhite(x, y - 1);
  }

  let cleared = 0;
  for (let p = 0; p < width * height; p++) {
    if (visited[p]) {
      data[p * channels + 3] = 0;
      cleared++;
    }
  }

  console.log(
    `Cleared ${cleared} / ${width * height} pixels (${((cleared / (width * height)) * 100).toFixed(1)}%)`
  );

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(OUT);

  console.log("Wrote", OUT);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
