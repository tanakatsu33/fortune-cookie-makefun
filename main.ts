import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "You will delete the one line you swore was useless, and learn it was quietly holding the whole world up.";

function check(line: string): string {
  const length = [...line].length;
  if (length < 1 || length > 120) {
    throw new Error(`entry must be 1-120 characters, got ${length}`);
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("entry must be a single line");
  }
  return line;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), check(ENTRY) + "\n", "utf8");
