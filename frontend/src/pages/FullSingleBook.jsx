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

  const [bookInfo, setBookInfo] = useState({
    publishers: "",
    publish_date: "",
    number_of_pages: "",
    subtitle: "",
  });

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

  // to fetch reviews and book information

  useEffect(() => {
    const gettingReviewsAndBookInformation = async () => {
      try {
        const allReviews = await axios.get(`/api/getreviews/${id}`);

        if (allReviews.data.status === "success") {
          setReviews(allReviews.data.data);
        }

        if (book) {
          const response = await axios.get(
            `https://openlibrary.org/isbn/${book.isbn}.json`
          );
          setBookInfo({
            publishers: response.data.publishers[0],
            publish_date: response.data.publish_date,
            number_of_pages: response.data.number_of_pages,
            subtitle: response.data.subtitle,
          });
        }
      } catch (error) {
        console.log("Error fetching reviews or book information:", error);
      }
    };

    gettingReviewsAndBookInformation();
  }, [id, book]); // Correct dependencies array including id and book

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="bookinfo">
        <div className="review">
          <h1 className="heading__h2">{book.bookTitle}</h1>

          <p className="bookinfo__reviewinfo">{`${reviews.length} Reviews ⭐⭐⭐⭐⭐`}</p>

          <div className="book__desc">
            <h2 className="heading__h3">Book Information:</h2>
            <p className="book__desc__content">
              <span>Publishers:</span> {bookInfo.publishers}
            </p>
            <p className="book__desc__content">
              <span>Published Year:</span> {bookInfo.publish_date}
            </p>
            <p className="book__desc__content">
              <span>Subtitle:</span> {bookInfo.subtitle}
            </p>
            <p className="book__desc__content">
              <span>Number of Pages:</span> {bookInfo.number_of_pages}
            </p>
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
      <h2 className="heading__h2 reviews__main"> Read All Reviews:</h2>

      <div className="allreviews">
        {reviews.map((review) => {
          // Convert the date string to a Date object
          const reviewDate = new Date(review.createdAt);
          const formattedDate = reviewDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return (
            <SingleReview
              key={review.reviewId}
              img={review.user.profile}
              heading={review.reviewTitle}
              review={review.reviewContent}
              author={review.user.fullName}
              stars={review.stars}
              date={formattedDate}
            />
          );
        })}
      </div>
    </div>
  );
}

FullSingleBook.propTypes = {
  img: PropTypes.string,
  bookTitle: PropTypes.string,
  author: PropTypes.string,
  by: PropTypes.string,
  genre: PropTypes.string,
  bookId: PropTypes.string,
};

export default FullSingleBook;
