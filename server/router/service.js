const { verifyToken, isAdmin } = require("../middleware/authen");
const router = require("express").Router();
const ServiceController = require("../controller/service");
const Joi = require("joi");
const validateDto = require("../middleware/validate");
const { string, stringReq } = require("../middleware/joiSheme");

router.post(
  "/create-service",
  validateDto(
    Joi.object({
      title: stringReq,
      description: stringReq,
      price: stringReq,
      img: stringReq,
    })
  ),
  verifyToken,
  isAdmin,
  ServiceController.createService
);
router.get("/get-services", ServiceController.getServices);
router.get("/get-service/:id", ServiceController.getService);
router.put("/update-service/:id", verifyToken, ServiceController.updateService);
router.delete(
  "/delete-service/:id",
  verifyToken,
  isAdmin,
  ServiceController.deleteService
);

module.exports = router;
