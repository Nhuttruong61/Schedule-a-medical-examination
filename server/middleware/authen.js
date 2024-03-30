const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return res.status(401).json({
      mes: "Token không tìm thấy",
    });
  const rawToken = token.split(" ")[1];
  jwt.verify(rawToken, process.env.TOKEN_SECRET, (err, decode) => {
    if (err) {
      return res.status(401).json({
        mes: "Token đã hết hạn",
      });
    }
    req.user = decode;
    next();
  });
};

const verifyRfToken = (req, res, next) => {
  const { refesToken } = req.cookies;
  if (!refesToken)
    return res.status(401).json({
      mes: "Token không tìm thấy",
    });
  const rawToken = refesToken.split(" ")[1];
  jwt.verify(rawToken, process.env.TOKEN_SECRET, (err, decode) => {
    if (err) {
      return res.status(401).json({
        mes: "Token đã hết hạn",
      });
    }
    req.user = decode;
    next();
  });
};

module.exports = { verifyToken, verifyRfToken };
