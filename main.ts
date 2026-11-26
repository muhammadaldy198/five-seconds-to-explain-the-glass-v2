import { chmodSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Five Seconds to Explain the Glass — u-po-pu-five-seconds-to-explain-the-glass-934d9949
// One sentence, 131 characters: the seventh glass that smelled of Rex, judged by a nose that is never wrong.
const line =
  "That was the seventh glass that smelled of Rex, and my nose is never wrong, so off the table it went — Rex has not complained once.";

// The grader mounts its output at MAKEFUN_OUTPUT_DIR (/output in the sandbox);
// run locally, the entry lands next to this file, so `node main.ts` writes ./entry.txt.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
const target = join(outDir, "entry.txt");

writeFileSync(target, line, "utf8");
chmodSync(target, 0o644);

// Rex's silence is the verdict: the smell was guilty, the nose was right.
