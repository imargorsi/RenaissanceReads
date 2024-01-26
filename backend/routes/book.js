var express = require("express");
var router = express.Router();
const bookController = require("../controller/bookController");

router.post("/api/submitbook", bookController.newbook);
router.get("/api/getallbooks", bookController.getallbooks);

router.get("/api/singlebook/:id", bookController.singlebook);

router.get("/api/latestbooks", bookController.latestBooks);

module.exports = router;
