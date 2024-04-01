const db = require("../models");

const createDepartment = async (req, res) => {
  try {
    const { title, avatar } = req.body;
    const check = await db.Department.findOne({
      where: { title: title },
    });
    if (check) {
      return res.status(400).json({
        success: false,
        mes: "Tiêu đề đã tồn tại",
      });
    }
    const department = await db.Department.create({
      title: title,
      avatar: avatar,
    });
    return res.status(200).json({
      success: true,
      department,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};
const getDepartments = async (req, res) => {
  try {
    const department = await db.Department.findAll();
    if (!department) {
      return res.status(400).json({
        success: false,
        mes: "Không tìm thấy phòng ban ",
      });
    }

    return res.status(200).json({
      success: true,
      department,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};
const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, avatar } = req.body;
    const department = await db.Department.findByPk(id);
    if (!department) {
      return res.status(400).json({
        success: false,
        mes: "Không tìm thấy phòng ban ",
      });
    }
    department.title = title;
    department.avatar = avatar;
    await department.save();
    return res.status(200).json({
      success: true,
      department,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};
const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await db.Department.findByPk(id);
    if (!department) {
      return res.status(400).json({
        success: false,
        mes: "Không tìm thấy phòng ban ",
      });
    }

    await department.destroy();
    return res.status(200).json({
      success: true,
      mes: "Xóa thành công phòng ban",
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};

module.exports = {
  createDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment,
};
