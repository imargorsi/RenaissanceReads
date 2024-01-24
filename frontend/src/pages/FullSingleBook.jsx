import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Reviews from "../components/Reviews";
import { useSelector } from "react-redux";
import SingleReview from "../components/SingleReview";

function FullSingleBook() {
  // for passing the bookId
  const { id } = useParams();

  // for book
  const [book, setBook] = useState(null);

  // for reviews
  const [reviews, setReviews] = useState([]);

  const { currentUser } = useSelector((state) => state.user);

  // to fetch book details

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`/api/singlebook/${id}`);
        setBook(response.data.response);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  // to fetch reviews

  useEffect(() => {
    const gettingReviews = async () => {
      try {
        const allReviews = await axios.get(`/api/getreviews/${id}`);

        if (allReviews.data.status === "success") {
          setReviews(allReviews.data.data);
        }
      } catch (error) {
        console.log("Error fetching reviews:", error);
      }
    };
    gettingReviews();
  }, [reviews]); // ignore the error because local state is changing

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="bookinfo">
        <div className="review">
          <h1 className="heading__h2">{book.bookTitle}</h1>

          <p className="bookinfo__reviewinfo">{`${reviews.length} Reviews ⭐⭐⭐⭐⭐`}</p>

          <div className="single__reviews">
            <p className="single__review__content">
              {/* Sample content, replace with actual reviews */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, eius reiciendis veniam quibusdam dolorum quasi magnam
              eos, numquam sapiente quisquam distinctio cumque dignissimos, eum
              consectetur inventore quas officia quae rem. Repellat sit veniam
              reiciendis obcaecati placeat expedita dolorum omnis vero maxime
              eos quaerat magni iusto facilis rem numquam, blanditiis
              exercitationem et assumenda quidem tenetur nemo. Exercitationem
              vero non maiores quod!
            </p>
            <p className="single__review__user">By Ar Gorsi</p>
          </div>
        </div>

        <img
          className="bookcover"
          src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
          alt={book.bookTitle}
        />
      </div>

      {/* for posting reviews */}
      <Reviews bookId={book.bookId} userId={currentUser.id} />

      {/* for getting reviews */}
      <div className="allreviews">
        {reviews.map((review) => (
          <SingleReview
            key={review.reviewId}
            img={review.user.profile}
            heading={review.reviewTitle}
            review={review.reviewContent}
            author={review.user.fullName}
            stars={review.stars}
            date={review.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

FullSingleBook.propTypes = {
  img: PropTypes.string,
  bookTitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

export default FullSingleBook;
