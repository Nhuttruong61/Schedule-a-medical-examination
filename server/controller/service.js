const { Sequelize } = require("sequelize");
const db = require("../models");

const createService = async (req, res) => {
  try {
    const { userId, title, description, img, price } = req.body;
    const check = await db.Service.findOne({
      where: {
        title: title,
      },
    });
    if (check) {
      return res.status(400).json({
        success: false,
        mes: "Tiêu đề đã tồn tại",
      });
    }
    const service = await db.Service.create({
      userId: userId,
      description: description,
      price: price,
      title: title,
      img: img,
    });
    return res.status(200).json({
      success: true,
      service,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};

const getServices = async (req, res) => {
  try {
    const { title } = req.query;
    if (title) {
      const service = await db.Service.findAll({
        where: Sequelize.where(
          Sequelize.fn("lower", Sequelize.col("title")),
          "LIKE",
          `%${title.toLowerCase()}%`
        ),
      });
      return res.status(200).json({
        success: true,
        service,
      });
    }

    const service = await db.Service.findAll();
    return res.status(200).json({
      success: true,
      service,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};
const getService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await db.Service.findByPk(id);
    if (!service) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy dịch vụ",
      });
    }
    return res.status(200).json({
      success: true,
      service,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};

const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, img, price } = req.body;
    const service = await db.Service.findByPk(id);
    if (!service) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy dịch vụ",
      });
    }
    service.title = title;
    service.img = img;
    service.price = price;
    service.description = description;
    await service.save();
    return res.status(200).json({
      success: true,
      service,
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};
const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await db.Service.findByPk(id);
    if (!service) {
      return res.status(404).json({
        success: false,
        mes: "Không tìm thấy dịch vụ",
      });
    }
    await service.destroy();
    await service.save();
    return res.status(200).json({
      success: true,
      mes: "Xóa dịch vụ thành công",
    });
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};
module.exports = {
  createService,
  getServices,
  getService,
  updateService,
  deleteService,
};
