var express = require("express");
var router = express.Router();
const bookController = require("../controller/bookController");
/* GET home page. */

router.get("/api/allbook", bookController.getallbooks);

module.exports = router;
