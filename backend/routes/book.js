var express = require("express");
var router = express.Router();
const bookController = require("../controller/bookController");

router.post("/api/submitbook", bookController.newbook);

// router.get("/bookdetails/:id", bookController.singlebook);

// router.post("/notechanges", bookController.editNotes);

// router.post("/deletebook/:id", bookController.deletebook);

module.exports = router;
