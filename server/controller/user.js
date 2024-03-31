const { Sequelize } = require("sequelize");
const db = require("../models");
const getUser = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await db.User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy người dùng",
      });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const { page, name } = req.query;

    if (name) {
      const user = await db.User.findAll(
        {
          where: Sequelize.where(
            Sequelize.fn("lower", Sequelize.col("name")),
            "LIKE",
            `%${name.toLowerCase()}%`
          ),
        },
        {
          attributes: { exclude: ["password"] },
        }
      );
      return res.status(200).json({
        success: true,
        user,
      });
    }
    const limit = process.env.LIMIT;
    let offset = 0 + (page - 1) * limit;
    const user = await db.User.findAndCountAll(
      {
        offset,
        limit,
      },
      {
        attributes: { exclude: ["password"] },
      }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy người dùng",
      });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};
const getUserPK = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy người dùng",
      });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};
const updateUser = async (req, res) => {
  try {
    const { name, address, avatar } = req.body;
    let option = {};

    if (name) {
      option.name = name;
    }
    if (address) {
      option.address = address;
    }
    if (avatar) {
      option.avatar = avatar;
    }
    const { id } = req.params;
    const user = await db.User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy người dùng",
      });
    }

    await user.update(option);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    return res.status(500).json({
      mes: "Lỗi máy chủ nội bộ",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy người dùng",
      });
    }
    await user.destroy();
    res.status(200).json({
      success: true,
      mes: "Xóa người dùng thành công",
    });
  } catch (err) {
    return res.status(500).json({
      mes: "Lỗi máy chủ nội bộ",
    });
  }
};

module.exports = { getUser, getUsers, getUserPK, updateUser, deleteUser };
