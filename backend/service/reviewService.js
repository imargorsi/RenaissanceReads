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

  getBookReviews: async (body) => {
    try {
      const reviews = await reviewModel.getBookReviews(body);

      return reviews;
    } catch (error) {
      throw new Error(error.message || "Error getting book reviews");
    }
  },
};
