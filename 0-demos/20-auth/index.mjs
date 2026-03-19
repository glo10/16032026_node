import { createServer } from "node:http";
import { login, verify, welcome } from "./controllers/auth-controller.mjs";
import { mgdConnect as connect } from "./utils/my-mongodb.mjs";
import { allowAccess } from "./utils/allow-access.mjs";
process.loadEnvFile();

const PORT = process.env.PORT || 8200;
await connect(process.env.DB_LOCAL);
createServer((req, res) => {
  allowAccess(req, res, process.env.NODE_ENV)
  if (req.url === "/login" && req.method === "POST") login(req, res);
  else if (req.url === "/verify" && req.method === "GET") verify(req, res);
  else welcome(req, res);
}).listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
