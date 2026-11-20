// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is the post on X: the house reads the post from X and
// the judge sees its first picture and its text. This program has one job:
// copy POST.json from the repository root into the output directory, where
// the gate reads it. It writes nothing else and decides nothing.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
} catch (err) {
  // Fail loudly: a missing POST.json means there is no post to hand in,
  // and a silent success would only surface later as an invalid entry.
  console.error(`could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
