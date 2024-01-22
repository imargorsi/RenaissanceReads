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

    profile: {
      type: DataTypes.STRING,
      defaultValue:
        "https://wqhlyhvifxyzmuipyzsn.supabase.co/storage/v1/object/public/images/profile/defaultimg0909.jpg",
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "users",
    primaryKey: "id",
  }
);

module.exports = Users;
