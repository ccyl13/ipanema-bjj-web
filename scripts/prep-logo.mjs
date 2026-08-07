// One-off: turn the real Ipanema BJJ logo (pulled from their live site) into
// square, properly-sized assets for favicons and the on-page <Logo>.
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, "..", "brand-assets", "ipanema-logo-original.webp");
const APP_DIR = path.join(__dirname, "..", "src", "app");
const PUBLIC_DIR = path.join(__dirname, "..", "public");

const meta = await sharp(SRC).metadata();
const side = Math.min(meta.width, meta.height);
const left = Math.round((meta.width - side) / 2);
const top = Math.round((meta.height - side) / 2);

const square = sharp(SRC).extract({ left, top, width: side, height: side });

await square.clone().resize(64, 64).png().toFile(path.join(APP_DIR, "icon.png"));
await square.clone().resize(180, 180).png().toFile(path.join(APP_DIR, "apple-icon.png"));
await square.clone().resize(512, 512).png().toFile(path.join(PUBLIC_DIR, "images", "logo.png"));

console.log("Logo assets written: app/icon.png, app/apple-icon.png, public/images/logo.png");
