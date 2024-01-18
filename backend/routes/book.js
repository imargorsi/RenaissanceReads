var express = require("express");
var router = express.Router();
const bookController = require("../controller/bookController");

router.post("/submitbook", bookController.newbook);

router.get("/submitform", (req, res) => {
  res.render("submitbook");
});

router.get("/bookdetails/:id", bookController.singlebook);

router.post("/notechanges", bookController.editNotes);

router.post("/deletebook/:id", bookController.deletebook);

module.exports = router;
