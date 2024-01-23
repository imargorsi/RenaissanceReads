const reviewService = require("../service/reviewService");
const joi = require("joi");

const schema = joi.object({
  reviewTitle: joi.string().required(),
  reviewContent: joi.string().required(),
  stars: joi.string().required(),
});

module.exports = {
  postingReview: async (req, res) => {
    try {
      const validator = await schema.validateAsync(req.body.reviewData);

      const postingReview = await reviewService.postingReview(
        validator,
        req.body.bookId,
        req.body.userId
      );

      res.status(200).json({ data: postingReview.response, status: "success" });
    } catch (error) {
      // Handle validation errors or other errors
      res.status(400).json({ error: error.message || "Validation failed" });
    }
  },
};
