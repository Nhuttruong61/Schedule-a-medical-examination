const { verifyToken, isAdmin } = require("../middleware/authen");
const router = require("express").Router();
const UserController = require("../controller/user");
const Joi = require("joi");
const validateDto = require("../middleware/validate");
const { string } = require("../middleware/joiSheme");
router.get("/get-user", verifyToken, UserController.getUser);
router.get("/get-users", verifyToken, isAdmin, UserController.getUsers);
router.get("/get-user/:id", verifyToken, isAdmin, UserController.getUserPK);
router.put(
  "/update-user/:id",
  validateDto(
    Joi.object({
      name: string,
      avatar: string,
      address: string,
    })
  ),
  verifyToken,
  isAdmin,
  UserController.updateUser
);
router.delete(
  "/delete-user/:id",
  verifyToken,
  isAdmin,
  UserController.deleteUser
);
module.exports = router;
