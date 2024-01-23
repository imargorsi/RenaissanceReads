var express = require("express");
var router = express.Router();
const reviewController = require("../controller/reviewController");

router.post("/api/postingreview", reviewController.postingReview);

module.exports = router;
