/**
 * Pour autoriser les requêtes depuis localhost en locale (bloquée par sécurité par les navigateurs)
 * utile dans certains cas et surtout en dev
 */
export const allowAccess = (req, res, env) => {
  if (env === "development") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Accept, Origin, Authorization",
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, OPTIONS");
  }
};
