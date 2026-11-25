import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

const opener = "Out of office until Monday.";
// The joke lands by refusing to be the hero: urgency is handed to
// whoever is actually in the office, not to the person on leave.
const punchline = "If it's urgent, tell someone who is here.";

const reply = `${opener} ${punchline}`;

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, reply, "utf8");
