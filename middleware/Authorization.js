const jwt = require("jsonwebtoken");

// Clave pública de Auth0
const AUTH0_CERT = process.env.AUTH0_CERT;

const authenticateToken = (req, res, next) => {
  const token =
    req.header("Authorization")?.split(" ")[1] ||
    req.query.token ||
    req.params.token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied: No token provided" });
  }

  try {
    // Verificar el token utilizando el certificado público
    const decoded = jwt.verify(token, AUTH0_CERT, { algorithms: ["RS256"] });
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = authenticateToken;
