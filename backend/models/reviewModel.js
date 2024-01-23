const { models } = require("./index");

module.exports = {
  postingReview: async (body, bookID, userId) => {
    const reviewId = Math.floor(Math.random() * 1000000);
    try {
      const review = await models.reviews.create({
        reviewId: reviewId,
        reviewTitle: body.reviewTitle,
        reviewContent: body.reviewContent,
        stars: body.stars,
        id: userId,
        bookId: bookID,
      });

      return {
        response: review,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
