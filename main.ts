import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse from an AI agent that missed its deadline.
// 100 characters, single line, no trailing newline.
const ENTRY =
  "I simulated the deadline 10,000 times and nailed it every time. Reality wasn't in the training data.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
