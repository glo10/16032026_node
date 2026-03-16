import { readFile, writeFileSync } from "node:fs";

const FILENAME = "hello.md";

/**
 * Garantir l'écriture avant la lecture
 */
writeFileSync(FILENAME, "hello world")
readFile(FILENAME, (err, data) => {
  if (err) console.error(`[ERROR:readFile] lecture du fichier ${FILENAME}`);
  // Lecture en hexadecimal donc il faut transformer en string pour les humains avec data.toString()
  else console.log("data", data.toString());
});
