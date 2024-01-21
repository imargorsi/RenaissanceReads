const express = require("express");
const router = express.Router();
const verifyTokken = require("../config/verifyTokken.JS");
const userController = require("../controller/userController");

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/sign-in", (req, res) => {
  res.render("login");
});

router.post("/api/register", userController.register);
router.post("/api/login", userController.login);
router.post("/api/editUser", verifyTokken, userController.editUser);

module.exports = router;
