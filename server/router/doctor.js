const { verifyToken, isAdmin } = require("../middleware/authen");
const router = require("express").Router();
const DoctorController = require("../controller/doctor");
const Joi = require("joi");
const validateDto = require("../middleware/validate");
const { string, stringReq } = require("../middleware/joiSheme");

router.post(
  "/create-doctor",
  validateDto(
    Joi.object({
      userId: stringReq,
      description: stringReq,
      departmentId: stringReq,
    })
  ),
  verifyToken,
  isAdmin,
  DoctorController.createDoctor
);
router.get("/get-doctors", DoctorController.getDoctors);
router.get("/get-doctor/:id", DoctorController.getDoctor);
router.put("/update-doctor/:id", verifyToken, DoctorController.updateDoctor);
router.delete(
  "/delete-doctor/:id",
  verifyToken,
  isAdmin,
  DoctorController.deleteDoctor
);

module.exports = router;
