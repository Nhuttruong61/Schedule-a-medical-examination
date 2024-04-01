const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return res.status(401).json({
      mes: "Token không tìm thấy",
    });
  const rawToken = token.split(" ")[1];
  jwt.verify(rawToken, process.env.JWT_SECRET, (err, decode) => {
    if (err) {
      return res.status(401).json({
        mes: "Token đã hết hạn",
      });
    }
    req.user = decode;
    next();
  });
};
const isAdmin = (req, res, next) => {
  const { role } = req.user;
  if (role !== "ADMIN") {
    return res.status(401).json({
      mes: "Bạn không phải admin",
    });
  }
  next();
};
const verifyRfToken = (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return res.status(401).json({
      mes: "Token không tìm thấy",
    });

  jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
    if (err) {
      return res.status(401).json({
        mes: "Token đã hết hạn",
      });
    }
    req.user = decode;
    next();
  });
};

module.exports = { verifyToken, verifyRfToken, isAdmin };
