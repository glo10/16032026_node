import { hash, compare } from "bcrypt";
import { promisify } from "node:util";

export const hashPassword = async (plain) => {
  const hashPromise = promisify(hash);
  // Le hashage du mot de passe pour le stocker en BDD
  return hashPromise(plain, 10)
    .then((passwordHashed) => {
      if (!err) {
        return passwordHashed;
      }
      return false;
    })
    .catch((error) => {
      console.error("ERROR:isCorrectPassword]", error)
      return false
  })
};

export const isCorrectPassword = async (plain, hashed) => {
  return await compare(plain, hashed)
      .then((result) => result)
      .catch((error) => {
        console.error("[ERROR:isCorrectPassword]", error)
        return false
    });
}

const hashCallback = (plain) => {
  hash(plain, 10, (err, passwordHashed) => {
    if (!err) {
      console.log("hashed callback", passwordHashed);
    } else {
      console.error("[ERROR:hashCallback]", err);
    }
  });
};
