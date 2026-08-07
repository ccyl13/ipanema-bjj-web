// One-off script: resize + rename the source photos from Desktop/ipanema into public/images
// Run with: node scripts/prep-images.mjs
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.join(__dirname, "..", "..", "ipanema");
const OUT_DIR = path.join(__dirname, "..", "public", "images");

const MAP = {
  "YDRAY-IPANEMA-_V1A0364.jpg": "exterior-fachada.jpg",
  "YDRAY-IPANEMA-_V1A0373.jpg": "recepcion-lounge.jpg",
  "YDRAY-IPANEMA-_V1A9752.jpg": "tatami-vacio.jpg",
  "YDRAY-IPANEMA-_V1A9756.jpg": "medallas-cerca.jpg",
  "YDRAY-IPANEMA-_V1A9760.jpg": "medallas-pared.jpg",
  "YDRAY-IPANEMA-_V1A9775.jpg": "pasillo-taquillas.jpg",
  "YDRAY-IPANEMA-_V1A9786.jpg": "tatami-logos.jpg",
  "YDRAY-IPANEMA-_V1A9796.jpg": "pasillo-banco.jpg",
  "YDRAY-IPANEMA-_V1A9939.jpg": "kimonos-percha.jpg",
  "YDRAY-IPANEMA-_V1A9961.jpg": "coffee-bar.jpg",
  "YDRAY-IPANEMA-_V1A9973.jpg": "duchas.jpg",
  "YDRAY-IPANEMA-_V1A9984.jpg": "vestuario-surf.jpg",
  "YDRAY-IPANEMA-_V1A9989.jpg": "figura-profesor.jpg",
  "YDRAY-IPANEMA_V1A0011.jpg": "profesor-accion-giro.jpg",
  "YDRAY-IPANEMA_V1A0258.jpg": "entrenamiento-rolling.jpg",
  "YDRAY-IPANEMA_V1A0337.jpg": "equipo-grupo.jpg",
  "YDRAY-IPANEMA_V1A9864.jpg": "profesor-negro-frente.jpg",
  "YDRAY-IPANEMA_V1A9875.jpg": "profesor-negro-brazos.jpg",
  "YDRAY-IPANEMA_V1A9891.jpg": "profesor-blanco-frente.jpg",
  "YDRAY-IPANEMA_V1A9897.jpg": "profesor-blanco-brazos.jpg",
};

const MAX_DIM = 2200; // longest side, px
const QUALITY = 82;

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  let ok = 0;
  for (const [src, out] of Object.entries(MAP)) {
    const srcPath = path.join(SRC_DIR, src);
    const outPath = path.join(OUT_DIR, out);
    if (!fs.existsSync(srcPath)) {
      console.warn("MISSING SOURCE:", src);
      continue;
    }
    const meta = await sharp(srcPath).metadata();
    const isPortrait = (meta.height ?? 0) > (meta.width ?? 0);
    await sharp(srcPath)
      .rotate() // respect EXIF orientation
      .resize({
        ...(isPortrait ? { height: MAX_DIM } : { width: MAX_DIM }),
        withoutEnlargement: true,
      })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(outPath);
    const before = fs.statSync(srcPath).size;
    const after = fs.statSync(outPath).size;
    console.log(
      `${src} -> ${out}  ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024).toFixed(0)}KB`
    );
    ok++;
  }
  console.log(`\nDone. ${ok}/${Object.keys(MAP).length} images processed.`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
