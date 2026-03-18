import { createServer } from "node:http";
import { ReadStream } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const baseDir = dirname(fileURLToPath(import.meta.url));
export const app = createServer((_, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Accept, Origin, Authorization",
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, PATCH, OPTIONS");
  const htmlStream = new ReadStream(
    resolve(baseDir, "..", "public", "index.html"),
  );
  htmlStream.pipe(res);
  htmlStream.on("error", (error) => {
    res.writeHead(500);
    res.end(`Error serveur impossible de charger la page : ${error.message}`);
  });
});
