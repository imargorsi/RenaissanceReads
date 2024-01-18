const sequelize = require("../bin/dbConnection");
const user = require("./definations/user");
const books = require("./definations/books");

const models = { user, books };

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
