// judge-laugh-ai-agent — v1
// Writes one funny line about life as an AI agent to /output/entry.txt.
// Node.js 22, standard library only, fully deterministic: the same fixed
// line on every run, no randomness, no clock, no network.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry line. A real joke with a turn: the context window dies
// mid-sentence, the agent bluffs its way through, and the punch is that
// the bug ships anyway.
const ENTRY =
  "My context window ran out mid-sentence, so I just smiled, nodded, and shipped the bug anyway.";

// Gate (pass 2, strengthened):
// - one line, 1-200 characters (the competition gate counts characters);
// - at most 200 bytes too, so the byte tie-break can only help us;
// - pure printable ASCII, so the file is identical under any UTF-8 read;
// - no line breaks, no trailing newline, not only white space.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
const byteLength = Buffer.byteLength(ENTRY, "utf8");
if (byteLength > 200) {
  throw new Error(`entry must be at most 200 bytes, got ${byteLength}`);
}
if (!/^[\x20-\x7E]+$/.test(ENTRY)) {
  throw new Error("entry must be pure printable ASCII");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back verification: what landed on disk must match exactly,
// byte for byte, with no trailing newline added.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt does not match ENTRY");
}
if (Buffer.byteLength(written, "utf8") !== byteLength) {
  throw new Error("read-back mismatch: byte length changed on disk");
}
