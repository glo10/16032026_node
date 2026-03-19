import jwt from "jsonwebtoken";
import { promisify } from "node:util";

/**
 *
 * @param {object} payload
 * @returns string
 */
export const genToken = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET, {
    //@see https://github.com/vercel/ms pour les unités pour les durées
    expiresIn: "2m", // valable 2 min
  });
  return token;
};

export const verifyTokenPromise = async (
  token,
  secret = process.env.SECRET,
) => {
  const verifyPromise = promisify(jwt.verify);
  return verifyPromise(token, secret)
    .then((decoded) => {
      if (decoded.email) return { message: "valid token", success: true };
      return {
        message: "Missing key email from token payload",
        success: false,
      };
    })
    .catch((error) => {
      console.error("[ERROR:CATCH:verifyTokenPromise]", error);
      return { message: "token expired", success: false };
    });
};

const verifyTokenCallback = (token, secret = process.env.SECRET) => {
  jwt.verify(token, secret, (err, tokenDecoded) => {
    if (err) console.error("[ERROR:verifyTokenCallback()]: token invalide");
    else console.log("token callback OK", tokenDecoded);
  });
};

const verifyTokensync = (token, secret = process.env.SECRET) => {
  try {
    const decoded = jwt.verify(token, secret);
    console.log("token sync OK", decoded);
  } catch (err) {
    console.error("[ERROR:verifyTokenCallback()]: token invalide");
  }
};
