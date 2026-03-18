// bcrypt pour hasher le mot de passe
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { mongoose } from "mongoose";
import UserModel from "./models/user-schema.mjs";
import { createServer } from "node:http";
process.loadEnvFile();

await mongoose
  .connect(process.env.DB_LOCAL)
  .then(() => mongoose.connection.readyState)
  .catch((err) => {
    console.error("DB KO", err);
    process.exit(1);
  });

const glodie = await UserModel.findOne({ email: "contact@tshimini.fr" });

createServer((req, res) => {
  if (req.url === "/") res.end("OK");
  else if (req.url === "/login" && req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", async () => {
      data = JSON.parse(data);
      // comparer le hash avec ce que l'utilisateur envoit en clair
      const isOk = await compare(data.password, glodie.password)
        .then((result) => result)
        .catch((error) => console.error("error", error));

      if (isOk) {
        console.log("Ok même mot de passe");
        // on génère un token avec JWT
        const { firstname, lastname } = glodie;
        const payload = { firstname, lastname };
        const token = jwt.sign(payload, process.env.SECRET, {
          expiresIn: "120",
        });
        console.log("token", token);
        res.end(token);
      } else {
        res.end("Mot de passe ou identifiant incorrectes");
      }
    });
  } else {
    const { token } = req.headers
    jwt.verify(token, process.env.SECRET, (err, glodieDecoded) => {
      if(err) res.end('token invalide')
      // ok faire ce qu'on a faire...
    });
  }
}).listen(8200);

// Le hashage du mot de passe pour le stocker en BDD
// hash(plainPassword, 10, (err, passwordHashed) => {
//   console.log('err', err, 'password', passwordHashed);
//   if(!err) {
//     UserModel.create({
//       firstname: "Glodie",
//       lastname: "Tshimini",
//       email: "contact@tshimini.fr",
//       password: passwordHashed
//     })
//   }
// })
