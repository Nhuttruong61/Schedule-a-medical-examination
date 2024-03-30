"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Blog.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Blog.init(
    {
      userId: DataTypes.UUID,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      img: {
        type: DataTypes.TEXT,
        get() {
          const rawValue = this.getDataValue("img");
          return rawValue ? JSON.parse(rawValue) : [];
        },
        set(img) {
          return this.setDataValue("img", JSON.stringify(img));
        },
      },
    },
    {
      sequelize,
      modelName: "Blog",
    }
  );
  return Blog;
};
