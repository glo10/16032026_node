import { readFile } from "node:fs";
import { writeFile } from "node:fs/promises";

const FILENAME = "hello.md";
await writeFile(FILENAME, "Hello world", { encoding: "utf8" })
.then(() => {
  console.log('Ecriture OK')
})
.catch(error =>  console.error(`[ERROR:writeFile] écriture fichier ${error}`))

readFile(FILENAME, (err, data) => {
  if (err) console.error(`[ERROR:readFile] lecture du fichier ${FILENAME}`);
  // Lecture en hexadecimal donc il faut transformer en string pour les humains avec data.toString()
  else console.log("data", data.toString());
});
