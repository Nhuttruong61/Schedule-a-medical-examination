const { Sequelize } = require("sequelize");
const db = require("../models");

const createBlog = async (req, res) => {
  try {
    const { userId, title, description, img } = req.body;
    const blog = await db.Blog.create({
      userId: userId,
      description: description,
      title: title,
      img: img,
    });
    return res.status(200).json({
      success: true,
      blog,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      mes: err.mes,
    });
  }
};
const getBlogs = async (req, res) => {
  try {
    const { page, title } = req.query;
    if (title) {
      const blog = await db.Blog.findAll({
        where: Sequelize.where(
          Sequelize.fn("lower", Sequelize.col("title")),
          "LIKE",
          `%${title.toLowerCase()}%`
        ),
        include: [
          {
            model: db.User,
            attributes: {
              exclude: ["password", "role", "createdAt", "updatedAt"],
            },
          },
        ],
      });
      return res.status(200).json({
        success: true,
        blog,
      });
    }
    const limit = process.env.LIMIT;
    let offset = 0 + (page - 1) * limit;
    const blog = await db.Blog.findAndCountAll({
      offset,
      limit,
      include: [
        {
          model: db.User,
          attributes: {
            exclude: ["password", "role", "createdAt", "updatedAt"],
          },
        },
      ],
    });
    return res.status(200).json({
      success: true,
      blog,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};

const getBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await db.Blog.findByPk(id, {
      include: [
        {
          model: db.User,
          attributes: {
            exclude: ["password", "role", "createdAt", "updatedAt"],
          },
        },
      ],
    });
    if (!blog) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy bài đăng",
      });
    }
    return res.status(200).json({
      success: true,
      blog,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, img } = req.body;
    const blog = await db.Blog.findByPk(id, {
      include: [
        {
          model: db.User,
          attributes: {
            exclude: ["password", "role", "createdAt", "updatedAt"],
          },
        },
      ],
    });
    if (!blog) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy bài đăng",
      });
    }
    blog.title = title;
    blog.img = img;
    blog.description = description;
    await blog.save();
    return res.status(200).json({
      success: true,
      blog,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await db.Blog.findByPk(id, {});
    if (!blog) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy bài đăng",
      });
    }
    await blog.destroy();
    await blog.save();
    return res.status(200).json({
      success: true,
      mes: "Xóa bài đăng thành công",
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};

module.exports = { createBlog, getBlogs, getBlog, updateBlog, deleteBlog };
