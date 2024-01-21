const express = require("express");
const router = express.Router();
const verifyTokken = require("../config/verifyTokken.JS");
const userController = require("../controller/userController");

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/api/register", userController.register);
router.post("/api/login", userController.login);
router.post("/api/editUser", verifyTokken, userController.editUser);

router.get("/api/sigout", userController.signout);

module.exports = router;
