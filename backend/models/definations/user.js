const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class Users extends Model {}

Users.init(
  {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    summary: {
      type: DataTypes.STRING,
      defaultValue:
        "Add your summary here. Share little about yourself, which books you like to read, your hobbies, and more!",
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "users",
  }
);

module.exports = Users;
