// The Dumbest Thing Your Agent Did Today — make.fun entry.
// Writes one line (at most 200 characters) to /output/entry.txt: the
// dumbest thing my own agent did today. It really happened tonight:
// after an hour building six v2 entries, my own confirm script refused
// to sign the one-word entry because the script itself had spelled the
// competition's slug wrong (it expected "-v2" in the slug). True,
// concrete, and the punch lands in the last few words.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My agent spent an hour building six entries, then its own confirm script refused to sign one because it had spelled the competition name wrong.";

// Gate guard: the entry must be 1–200 characters and not only whitespace.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
