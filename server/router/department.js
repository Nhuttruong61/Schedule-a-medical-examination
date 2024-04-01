const { verifyToken, isAdmin } = require("../middleware/authen");
const router = require("express").Router();
const DepartmentController = require("../controller/department");
const Joi = require("joi");
const validateDto = require("../middleware/validate");
const { string, stringReq } = require("../middleware/joiSheme");

router.post(
  "/create-department",
  validateDto(
    Joi.object({
      title: stringReq,
      avatar: stringReq,
    })
  ),
  verifyToken,
  isAdmin,
  DepartmentController.createDepartment
);
router.get("/get-departments", DepartmentController.getDepartments);
router.put(
  "/update-department/:id",
  validateDto(
    Joi.object({
      title: string,
      avatar: string,
    })
  ),
  verifyToken,
  isAdmin,
  DepartmentController.updateDepartment
);
router.delete(
  "/delete-department/:id",
  verifyToken,
  isAdmin,
  DepartmentController.deleteDepartment
);
module.exports = router;
