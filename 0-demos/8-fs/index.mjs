import { readFile, writeFileSync } from "node:fs";
import { writeFile } from "node:fs/promises";

/**
 * Ecriture d'un fichier hello.md contenant "hello world"
 * Lecture de ce fichier
 */
const FILENAME = "hello.md";
// await writeFile(FILENAME, "Hello world", { encoding: "utf8" })
// .then((err) => {
//   if(err) throw err
// })
// .catch(error =>  console.error(`[ERROR:writeFile] écriture fichier ${error}`))

writeFileSync(FILENAME, "hello world")
readFile(FILENAME, (err, data) => {
  if (err) console.error(`[ERROR:readFile] lecture du fichier ${FILENAME}`);
  // Lecture en hexadecimal donc il faut transformer en string pour les humains avec data.toString()
  else console.log("data", data.toString());
});
