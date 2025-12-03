const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).send("No token provided");

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).send("Malformed token");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Handle all token formats
    req.userId =
      decoded.userId ||
      decoded._id ||
      decoded.id;    // auto-detect correct key

    if (!req.userId) return res.status(401).send("Invalid token payload");

    req.isAdmin = decoded.isAdmin || false;

    next();
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
};

module.exports = auth;
