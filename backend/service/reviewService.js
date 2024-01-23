const reviewModel = require("../models/reviewModel");

module.exports = {
  postingReview: async (body, bookID, userId) => {
    try {
      const review = await reviewModel.postingReview(body, bookID, userId);

      return review;
    } catch (error) {
      throw new Error(error.message || "Error posting review");
    }
  },
};
