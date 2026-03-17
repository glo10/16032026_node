import { readFile, writeFile } from "node:fs";

/**
 * Fonctionnel mais problématique
 */
const FILENAME = "hello.md";
writeFile(FILENAME, "Hello world", { encoding: "utf8" }, (err) => {
  if (err) console.log(`[ERROR:writeFile] ${err}`);
  else {
    console.log('écriture OK')
    readFile(FILENAME, (error, data) => {
      if (error) console.error(`[ERROR:readFile] lecture du fichier ${FILENAME}`);
      // Lecture en hexadecimal donc il faut transformer en string pour les humains avec data.toString()
      else console.log("data", data.toString());
    });
  }
});
