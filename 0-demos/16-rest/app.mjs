/**
 * API REST
 *  côté client
 * 1. une méthode HTTP (get, post, put, delete)
 * 2. une route à intérroger pour une ressource
 * 3. Un body (optionnel) : données à transmettre au serveur
 * 4. Un header (optionnel) : meta données à transmettre au serveur pour l'aider à traiter correctement la requête
 * ---------------------------
 * côté serveur
 * 1. un routeur qui traite la requête et retourne une ressource généralement du JSON
 */
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { readFile } from "node:fs/promises";
import express from "express";

const PORT = 8160;
const getContent = async (filename, charset = "utf-8") => {
  return readFile(filename, charset)
    .then((data) => {
      return JSON.parse(data);
    })
    .catch((error) => error);
};

const filename = join(
  dirname(fileURLToPath(import.meta.url)),
  "public",
  "users.json",
);
const app = express();

// Route qui sert de documentation
app.get("/", (req, res) => {
  const meta = {
    version: "1.0.0",
    author: "Glodie Tshimini",
    description: "API REST to manage users",
  };
  const body = {
    type: "JSON",
    properties: {
      name: { type: "string", required: true },
      email: { type: "string", required: true },
    },
    response: {
      type: "JSON",
      data: {
        success: 'false ou true',
        message: "message only if error",
        data: {
          id: "number"
        }
      }
    }
  };
  const routes = [
    {
      name: "GET /users",
      description: "All users",
      path: `http://localhost:${PORT}/users`,
    },
    {
      name: "POST /users",
      description: "Create a new user",
      path: `http://localhost:${PORT}/users`,
      body,
    },
    {
      name: "UPDATE /users/:id",
      description: "Update one user from ID",
      path: `http://localhost:${PORT}/users`,
      body,
    },
  ];
  res.json({ meta, routes });
});
/**
 * CRUD :
 *  CREATE -> associé à la méthode HTTP POST
 *  READ -> GET
 *  UPDATE -> PUT
 * DELETE -> DELETE
 */
app.get("/users", (req, res) => {
  getContent(filename).then((data) => res.json(data));
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  getContent(filename).then((users) => {
    const user = users.find((u) => u.id === id);
    if (user) res.json(user);
    else res.json({ success: false, message: "User not found" });
  });
});

// TODO créer un utiliser et le stocker dans le fichier users.json
app.post("/users", (req, res) => {
  let body = "";
  // Récupère le body au fur à mesure sous forme de flux (paquet)
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    // à la fin de la réception du body
    body = JSON.parse(body);
    // TODO traitement pour ajouter l'utilisateur dans le fichier public/users.json
    res.json(body);
  });
});

app.delete("/users/:id", (req, res) => {
  res.json({ success: false, message: "TODO" });
});

app.put("/users/:id", (req, res) => {
  res.json({ success: false, message: "TODO" });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
