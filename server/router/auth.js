const Joi = require("joi");
const { stringReq, string, numberReq } = require("../middleware/joiSheme");
const validateDto = require("../middleware/validate");
const router = require("express").Router();
const UserController = require("../controller/auth");
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
  UserController.register
);
router.post(
  "/login",
  validateDto(
    Joi.object({
      phone: stringReq,
      password: stringReq,
    })
  ),
  UserController.login
);
router.post("/refresh", verifyRfToken, UserController.refesToken);
router.post("/logout", verifyToken, UserController.logout);

module.exports = router;
