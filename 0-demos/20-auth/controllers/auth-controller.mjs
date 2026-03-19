
import { findByEmail } from '../utils/my-mongodb.mjs';
import { isCorrectPassword } from '../utils/my-bcrypt.mjs';
import { genToken, verifyTokenPromise } from '../utils/my-jwt.mjs';
const headers = { "Content-Type": "application/json; charset=utf-8" };

export const login = (req, res) => {
  const message  = "Mot de passe ou email incorrect"
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", async () => {
    const { email, password } = JSON.parse(data);
    const user = await findByEmail(email)
    if(!user) {
      res.end(JSON.stringify({ message, success: false }))
    }
    // comparer le hash avec ce que l'utilisateur envoit en clair
    const isOk = await isCorrectPassword(password, user.password)
    if (isOk) {
      const token = genToken({ email })
      res.end(JSON.stringify({ message: 'Welcome' , success: true, token }));
    } else {
      res.writeHead(400, )
      res.end(JSON.stringify({ message, success: false}));
    }
  });
};

export const verify = async (req, res) => {
  const bearer = req.headers.authorization // valeur est "bearer token"
  const info = bearer.split(' ') // transforme le string bearer token en tableau ['bearer', 'token']
  const token = info[1]
  const data = await verifyTokenPromise(token)
  res.end(JSON.stringify(data))
};

export const welcome = (_, res) => {
  res.writeHead(200, headers)
  res.end(JSON.stringify({ message: "Welcome" }));
};
