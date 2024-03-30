const bcrypt = require("bcryptjs");
const db = require("../models");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const register = async (req, res) => {
  try {
    const { phone, email, password, name, gender } = req.body;
    const check = await db.User.findOne({
      where: { phone: phone },
    });
    if (check) {
      return res.status(400).json({
        success: false,
        mes: "Số điện thoại đã được sử dụng",
      });
    }
    const checkEmail = await db.User.findOne({ where: { email: email } });
    if (checkEmail) {
      return res.status(400).json({
        success: false,
        mes: "Email đã được sử dụng",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.User.create({
      name: name,
      email: email,
      phone: phone,
      password: hashedPassword,
      gender: gender,
    });
    if (user) {
      return res.status(200).json({
        success: true,
        user,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      mes: err.mes,
    });
  }
};

const login = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const user = await db.User.findOne({ where: { phone: phone } });
    if (!user) {
      return res.status(400).json({
        success: false,
        phone: "Tài khoản không chính xác",
      });
    }
    const hashedPassword = await bcrypt.compare(password, user.password);
    if (!hashedPassword) {
      return res.status(400).json({
        success: false,
        phone: "Mật khẩu không chính xác",
      });
    }
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "5d",
      }
    );
    const refesToken = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "15d",
      }
    );
    cookieParser("refesToken", refesToken);
    if (token) {
      return res.status(200).json({
        success: true,
        token,
      });
    }
  } catch (err) {
    return res.status(500).json({
      mes: err.mes,
    });
  }
};

const refesToken = (req, res) => {
  try {
    const { id, role } = req.user;
    const token = jwt.sign({ id: id, role: role }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });
    if (token) {
      resolve({
        success: true,
        token,
      });
    }
  } catch (err) {
    reject(err);
  }
};
const logout = () => {
  try {
    clearCookie("refesToken");
  } catch (err) {
    reject(err);
  }
};

module.exports = { register, login, refesToken, logout };
