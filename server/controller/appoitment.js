const { Sequelize } = require("sequelize");
const db = require("../models");

const createAppoitment = async (req, res) => {
  try {
    const { date, time, doctorId, serviceId, name, phone, gender } = req.body;
    const patient = await db.Patient.create({
      name: name,
      phone: phone,
      gender: gender,
    });
    if (patient) {
      const appointment = await db.Appoitment.create({
        date: date,
        time: time,
        patientId: patient.id,
        doctorId: doctorId,
        serviceId: serviceId,
      });
      return res.status(200).json({
        success: true,
        appointment,
      });
    }
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};
const getAppoitments = async (req, res) => {
  try {
    const appointment = await db.Appoitment.findAll({
      include: [
        {
          model: db.Doctor,
        },
        {
          model: db.Service,
        },
      ],
    });
    if (!appointment) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy lịch",
      });
    }
    return res.status(200).json({
      success: true,
      appointment,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};

const getAppoitment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await db.Appoitment.findByPk(id, {
      include: [
        {
          model: db.Doctor,
        },
        {
          model: db.Service,
        },
      ],
    });
    if (!appointment) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy lịch",
      });
    }
    return res.status(200).json({
      success: true,
      appointment,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};

const updateAppoitment = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const appointment = await db.Appoitment.findByPk(id);
    if (!appointment) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy lịch",
      });
    }
    appointment.status = status;
    await appointment.save();
    return res.status(200).json({
      success: true,
      appointment,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};
const deleteAppoitment = async (req, res) => {
  try {
    const { id } = req.params;
    const appoitment = await db.Appoitment.findByPk(id);
    if (!appoitment) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy cuộc hẹn",
      });
    }
    await appoitment.destroy();

    const patient = await db.Patient.findByPk(appoitment.patientId);
    if (!patient) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy người đặt cuộc hẹn",
      });
    }
    await patient.destroy();

    return res.status(200).json({
      success: true,
      mes: "Xóa thành công",
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.message,
    });
  }
};

module.exports = {
  createAppoitment,
  getAppoitments,
  getAppoitment,
  updateAppoitment,
  deleteAppoitment,
};
