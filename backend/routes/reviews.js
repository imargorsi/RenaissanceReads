var express = require("express");
var router = express.Router();
const reviewController = require("../controller/reviewController");

router.post("/api/postingreview", reviewController.postingReview);

router.get("/api/getreviews/:id", reviewController.getBookReviews);

module.exports = router;
