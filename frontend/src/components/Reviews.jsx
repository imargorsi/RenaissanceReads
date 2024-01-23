import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function Reviews(props) {
  Reviews.propTypes = {
    bookId: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
  };

  const [reviewData, setReviewData] = useState({
    stars: "",
    reviewTitle: "",
    reviewContent: "",
  });

  const bookId = props.bookId;
  const userId = props.userId;

  const [error, setError] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/postingreview", {
        bookId,
        userId,
        reviewData,
      });

      console.log(response);

      // if (response.data.status === "success") {
      //   setReviewData({ stars: "", reviewTitle: "", reviewContent: "" });

      //   setError("Review Posted Successfully");
      // }

      setReviewData({ stars: "", reviewTitle: "", reviewContent: "" });

      setError("Review Posted Successfully");
    } catch (error) {
      setError(error.response.data.error);
      console.log(error.response.data.error);
    }
  };

  console.log(reviewData, bookId, userId);

  return (
    <div className="container">
      <form className="reviewform">
        <div className="rating">
          {[1, 2, 3, 4, 5].map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="stars"
                value={value}
                onChange={handleChange}
              />
              {[...Array(value)].map((_, index) => (
                <span key={index} className="fa fa-star icon"></span>
              ))}
            </label>
          ))}
        </div>

        <input
          className="inputitem"
          type="text"
          name="reviewTitle"
          value={reviewData.reviewTitle}
          onChange={handleChange}
          placeholder="Your Review Title"
        />

        <textarea
          className="textarea2"
          type="text"
          name="reviewContent"
          value={reviewData.reviewContent}
          onChange={handleChange}
          placeholder="Your Review"
        />
        <p className="paragraph">{error}</p>
        <button onClick={handleSubmit} className="btn">
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default Reviews;
