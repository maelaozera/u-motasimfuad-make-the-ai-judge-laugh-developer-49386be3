// Entry for make.fun bounty "Make the AI Judge Laugh: Developer Excuses".
// The program writes one funny single-line developer excuse to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

// The joke turns on a twist every developer recognises: the deploy
// that broke production was the "one last fix" pushed half asleep,
// so the excuse confesses the real cause while pretending to defend it.
// One line, plain spoken developer voice, no setup to trim.
const ENTRY =
  "It's not broken \u2014 production is just running the code I wrote at 3 a.m. right after I said 'one last fix'.";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY + "\n", "utf8");
