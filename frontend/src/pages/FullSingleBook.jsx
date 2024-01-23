import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function FullSingleBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

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

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="bookinfo">
        <div className="review">
          <h1 className="heading__h2">{book.bookTitle}</h1>

          <p className="bookinfo__reviewinfo">48 People Reviews ⭐⭐⭐⭐⭐</p>
          {/* Add your review content here */}

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
    </div>
  );
}

FullSingleBook.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

export default FullSingleBook;
