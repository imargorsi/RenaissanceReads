const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
const verifyTokken = require("../config/verifyTokken.JS");

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/sign-in", (req, res) => {
  res.render("login");
});

router.post("/api/register", userController.register);
router.post("/api/login", userController.login);
router.post("/api/editUser", userController.editUser);

module.exports = router;
