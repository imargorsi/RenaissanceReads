const sequelize = require("../bin/dbConnection");
const user = require("./definations/user");
const books = require("./definations/books");

const models = { user, books };

const db = {};

user.hasMany(books, { foreignKey: "id" }); // One user has many books
books.belongsTo(user, { foreignKey: "id" }); // Each book belongs to a user

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
