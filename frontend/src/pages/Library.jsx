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
    by: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  };

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get("api/getallbooks");

        setBooks(response.data.response);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  const filterBooksByGenre = (genre) => {
    const allBooks = document.getElementsByClassName("popularbooks__single");

    Array.from(allBooks).forEach((book) => {
      if (book.id === genre || genre === "All") {
        book.style.display = "flex";
      } else {
        book.style.display = "none";
      }
    });
  };

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
          <button className="btn" onClick={() => filterBooksByGenre("All")}>
            Show All
          </button>
          <button className="btn" onClick={() => filterBooksByGenre("History")}>
            History
          </button>
          <button className="btn" onClick={() => filterBooksByGenre("Fiction")}>
            Fiction
          </button>
          <button
            className="btn"
            onClick={() => filterBooksByGenre("Self Help")}
          >
            Self Help
          </button>
          <button className="btn" onClick={() => filterBooksByGenre("Others")}>
            Others
          </button>
        </div>
      </div>

      <div className="library__books" id="librarybooks">
        <hr />

        {books.map((book) => (
          <SingleBook
            id={book.genre}
            key={book.bookId}
            img={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
            title={book.bookTitle}
            author={book.author}
            by={book.user.fullName}
            genre={book.genre}
            bookId={book.bookId}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
