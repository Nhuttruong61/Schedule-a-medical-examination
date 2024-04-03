const { verifyToken, isAdmin } = require("../middleware/authen");
const router = require("express").Router();
const AppointmentController = require("../controller/appoitment");
const Joi = require("joi");
const validateDto = require("../middleware/validate");
const { string, stringReq } = require("../middleware/joiSheme");

router.post(
  "/create-appointment",
  validateDto(
    Joi.object({
      date: stringReq,
      time: stringReq,
      doctorId: stringReq,
      serviceId: stringReq,
      name: stringReq,
      phone: stringReq,
      gender: stringReq,
    })
  ),

  AppointmentController.createAppoitment
);
router.get(
  "/get-appointments",
  verifyToken,
  isAdmin,
  AppointmentController.getAppoitments
);

router.get(
  "/get-appointment/:id",
  verifyToken,
  AppointmentController.getAppoitment
);

router.put(
  "/update-status-appointment/:id",
  validateDto(
    Joi.object({
      status: stringReq,
    })
  ),
  verifyToken,
  AppointmentController.updateAppoitment
);
router.delete(
  "/delete-appointment/:id",
  verifyToken,
  AppointmentController.deleteAppoitment
);
module.exports = router;
