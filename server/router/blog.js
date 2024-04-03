const { verifyToken, isAdmin } = require("../middleware/authen");
const router = require("express").Router();
const BlogController = require("../controller/blog");
const Joi = require("joi");
const validateDto = require("../middleware/validate");
const { string, stringReq } = require("../middleware/joiSheme");

router.post(
  "/create-blog",
  validateDto(
    Joi.object({
      userId: stringReq,
      title: stringReq,
      description: stringReq,
      img: stringReq,
    })
  ),
  verifyToken,
  isAdmin,
  BlogController.createBlog
);
router.get("/get-blogs", BlogController.getBlogs);
router.get("/get-blog/:id", BlogController.getBlog);
router.put("/update-blog/:id", verifyToken, BlogController.updateBlog);
router.delete(
  "/delete-blog/:id",
  verifyToken,
  isAdmin,
  BlogController.deleteBlog
);

module.exports = router;
