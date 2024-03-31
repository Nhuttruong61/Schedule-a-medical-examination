const Joi = require("joi");
const { stringReq, string, numberReq } = require("../middleware/joiSheme");
const validateDto = require("../middleware/validate");
const router = require("express").Router();
const AuthController = require("../controller/auth");
const { verifyRfToken, verifyToken } = require("../middleware/authen");
router.post(
  "/rerister",
  validateDto(
    Joi.object({
      name: stringReq,
      phone: stringReq,
      email: stringReq,
      password: stringReq,
      gender: stringReq,
    })
  ),
  AuthController.register
);
router.post(
  "/login",
  validateDto(
    Joi.object({
      phone: stringReq,
      password: stringReq,
    })
  ),
  AuthController.login
);
router.post("/refresh", verifyRfToken, AuthController.refesToken);
router.post("/logout", verifyToken, AuthController.logout);

module.exports = router;
