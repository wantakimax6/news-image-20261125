// Entry for "News image 25 November 2026" (make.fun, news-image-20261125).
// The front page is drawn once, offline, and shipped as entry.png beside
// this file; the program copies it to the output path the kit's RULES
// require. The grading sandbox mounts the repository read-only and runs
// with no network, so everything the program needs is in the repo.

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.png");
const src = join(dirname(fileURLToPath(import.meta.url)), "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, outFile);

// Guard the gate: the RULES allow at most 1 MiB and 1024x1024 px.
// Fail loudly here instead of shipping an entry the gate refuses.
const bytes = statSync(outFile).size;
if (bytes > 1048576) {
  throw new Error(`entry.png is ${bytes} bytes, over the 1 MiB limit`);
}
const header = readFileSync(outFile).subarray(0, 33);
if (header.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") {
  throw new Error("entry.png is not a PNG file");
}
const width = header.readUInt32BE(16);
const height = header.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}
console.log(`wrote ${outFile} (${width}x${height}, ${bytes} bytes)`);
