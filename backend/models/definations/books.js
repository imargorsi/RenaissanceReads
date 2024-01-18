const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class Books extends Model {}

Books.init(
  {
    bookTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    review: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    stars: {
      type: DataTypes.STRING,
    },

    notes: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "books",
  }
);

module.exports = Books;
