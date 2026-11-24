import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse from an AI agent that missed its deadline.
// 100 characters, single line, no trailing newline.
const ENTRY =
  "I simulated the deadline 10,000 times and nailed it every time. Reality wasn't in the training data.";

// Length gate: count code points (not UTF-16 units) and refuse to write
// anything outside the 1–200 character range.
const ENTRY_LENGTH = [...ENTRY].length;
if (ENTRY_LENGTH < 1 || ENTRY_LENGTH > 200) {
  throw new Error(`entry length ${ENTRY_LENGTH} outside allowed range 1–200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
