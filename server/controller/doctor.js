const db = require("../models");

const createDoctor = async (req, res) => {
  try {
    const { userId, description, departmentId } = req.body;
    const doctor = await db.Doctor.create({
      userId: userId,
      description: description,
      departmentId: departmentId,
    });
    return res.status(200).json({
      success: true,
      doctor,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};

const getDoctors = async (req, res) => {
  try {
    const doctor = await db.Doctor.findAll({
      include: [
        {
          model: db.User,
          attributes: {
            exclude: ["password", "role", "createdAt", "updatedAt"],
          },
        },
        {
          model: db.Department,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
    });

    return res.status(200).json({
      success: true,
      doctor,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};
const getDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await db.Doctor.findByPk(id, {
      include: [
        {
          model: db.User,
          attributes: {
            exclude: ["password", "role", "createdAt", "updatedAt"],
          },
        },
        {
          model: db.Department,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
    });

    return res.status(200).json({
      success: true,
      doctor,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};
const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, description, departmentId } = req.body;

    const doctor = await db.Doctor.findByPk(id, {
      include: [
        {
          model: db.User,
          attributes: {
            exclude: ["password", "role", "createdAt", "updatedAt"],
          },
        },
        {
          model: db.Department,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
    });
    if (!doctor) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy người dùng",
      });
    }
    doctor.userId = userId;
    doctor.description = description;
    doctor.departmentId = departmentId;
    await doctor.save();

    return res.status(200).json({
      success: true,
      doctor,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const doctor = await db.Doctor.findByPk(id);
    if (!doctor) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy người dùng",
      });
    }
    await doctor.destroy();
    await doctor.save();

    return res.status(200).json({
      success: true,
      mes: "Xóa thành công",
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};

module.exports = {
  createDoctor,
  getDoctors,
  getDoctor,
  updateDoctor,
  deleteDoctor,
};
