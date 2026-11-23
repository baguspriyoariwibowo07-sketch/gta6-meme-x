import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");

// Validate the hand-in before copying it: POST.json must parse as JSON and
// carry a non-empty "url" string, otherwise the entry would point nowhere
// and fail the link check only after submission.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, "utf8"));
} catch (err) {
  console.error(
    `Invalid POST.json at ${source}: not valid JSON (${err instanceof Error ? err.message : String(err)})`,
  );
  process.exit(1);
}

const url =
  parsed !== null && typeof parsed === "object"
    ? (parsed as { url?: unknown }).url
    : undefined;
if (typeof url !== "string" || url.trim() === "") {
  console.error(
    `Invalid POST.json at ${source}: missing a non-empty "url" string`,
  );
  process.exit(1);
}

try {
  mkdirSync(outputDir, { recursive: true });
  const target = join(outputDir, "POST.json");
  copyFileSync(source, target);
  console.log(`Handed in ${target}`);
} catch (err) {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
}
