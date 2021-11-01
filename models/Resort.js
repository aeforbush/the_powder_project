const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Resort extends Model {}

Resort.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    resort_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resort_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "resort",
  }
);
module.exports = Resort;
