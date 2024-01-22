const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class Books extends Model {}

Books.init(
  {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },

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
    },

    notes: {
      type: DataTypes.TEXT,
    },

    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    genre: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "books",
    primaryKey: "bookId",
  }
);

module.exports = Books;
