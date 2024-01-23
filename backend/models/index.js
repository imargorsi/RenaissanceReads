const sequelize = require("../bin/dbConnection");
const user = require("./definations/user");
const books = require("./definations/books");
const reviews = require("./definations/reviews");

const models = { user, books, reviews };

const db = {};

user.hasMany(books, { foreignKey: "id" }); // One user has many books
books.belongsTo(user, { foreignKey: "id" }); // Each book belongs to a user
user.hasMany(reviews, { foreignKey: "id" }); // One user has many reviews
reviews.belongsTo(user, { foreignKey: "id" }); // Each review belongs to a user

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
