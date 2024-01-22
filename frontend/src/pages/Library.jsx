import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import SingleBook from "../components/singleBook";

function Library() {
  const [books, setBooks] = useState([]);

  SingleBook.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    by: PropTypes.number.isRequired,
  };

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get("api/getallbooks");

        setBooks(response.data.response); // Assuming the response data is an array of books
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="container library">
      <div className="library__hero">
        <h2 className="library__hero__heading">
          Literary Haven: Explore Your Digital Library
        </h2>
        <p className="library__hero__desc">
          Whether you seek the charm of timeless classics or the excitement of
          modern narratives, our digital library invites you to embark on a
          journey of literary exploration and enrichment.
        </p>
      </div>
      <div className="library__filter">
        <p className="library__filter__heading">Filter by Genre:</p>

        <div className="genres">
          <a href="">
            <button className="btn">History</button>
          </a>
          <a href="">
            <button className="btn">Fiction</button>
          </a>
          <a href="">
            <button className="btn">Self Help</button>
          </a>
          <a href="">
            <button className="btn">Classics</button>
          </a>
        </div>
      </div>

      <div className="library__books">
        <hr />
        {books.map((book) => (
          <SingleBook
            key={book.bookId}
            img={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
            title={book.bookTitle}
            author={book.author}
            by={book.user.fullName}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
