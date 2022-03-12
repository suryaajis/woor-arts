"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Art extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Art.belongsTo(models.Category, { foreignKey: "category_id" });
    }
  }
  Art.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Title is required!" },
        },
      },
      price: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Price is required!" },
        },
      },
      description: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: { msg: "Description is required!" },
        },
      },
      category_id: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: { msg: "Category is required!" },
        },
      },
    },
    {
      sequelize,
      modelName: "Art",
    }
  );
  return Art;
};
