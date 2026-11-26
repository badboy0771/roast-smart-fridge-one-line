import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry is one roast line. The sealed gate reads /output/entry.txt and
// requires UTF-8 text of 1 to 160 characters, not only white space, so the
// program enforces the same shape here before it writes anything.
const raw = readFileSync(new URL("./line.txt", import.meta.url), "utf8");
const line = raw.trim();

if (line.length < 1 || line.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${line.length}`);
}
if (/\r|\n/.test(line)) {
  throw new Error("entry must be a single line, no line breaks allowed");
}
if (!/\S/.test(line)) {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// The leaderboard's tie-break prefers the smaller text, so report the byte
// size too; then read the file back and confirm it round-trips exactly.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== line) {
  throw new Error("entry.txt did not round-trip exactly");
}
const bytes = Buffer.byteLength(line, "utf8");
console.log(`wrote ${line.length} characters (${bytes} bytes) to /output/entry.txt`);
