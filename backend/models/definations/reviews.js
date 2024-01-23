const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class Reviews extends Model {}

Reviews.init(
  {
    reviewId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },

    reviewTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    reviewContent: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    stars: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "reviews",
    primaryKey: "reviewId",
  }
);

module.exports = Reviews;
