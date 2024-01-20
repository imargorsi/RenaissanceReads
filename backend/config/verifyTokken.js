const jwt = require("jsonwebtoken");

const config = require("../config/config");

console.log("config.jwt.secret: ", config.jwt.secret);

module.exports = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json({ error: "Access Denied, You need to login" });
  }

  jwt.verify(token, config.jwt.secret, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid Token" });
    }

    req.user = user;
    next();
  });
};
