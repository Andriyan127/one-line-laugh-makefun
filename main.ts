// One-Line Laugh — make.fun entry (u-ronigrv-the-one-line-laugh-7ccca46f)
// Writes a single funny line (one sentence, <= 200 chars) to /output/entry.txt.
// Deterministic: no network, no randomness, no secrets, no environment reads.
// The joke: noise-cancelling headphones promise silence to think in —
// the punchline lands in the final words, where the silence turns out empty.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I bought noise-cancelling headphones to hear myself think, and discovered there's nothing to hear.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
