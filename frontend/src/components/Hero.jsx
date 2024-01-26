import heroimg from "../images/hero_img.jpg";
import SingleBook from "./SingleBook";
import axios from "axios";
import { useEffect, useState } from "react";

// demo image data for temp
// const imageSource = "https://picsum.photos/200";
// const bookTitile = "Atomic Habits";
// const author = "By James Clear";
// const userBy = "by: argorsi";

//

function Hero() {
  const [latestBooks, setlatestBooks] = useState([]);

  useEffect(() => {
    const fetchLatestBooks = async () => {
      try {
        const response = await axios.get("api/latestbooks");

        setlatestBooks(response.data.response.response);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchLatestBooks();
  }, []);

  return (
    <div className="herosection container">
      <div className="hero__mainsection">
        <img src={heroimg} alt="" className="mainsection__img" />
        <h2 className="heading__h2">
          Discover Timeless Classics and Modern Masterpieces
        </h2>
        <div className="mainsection__btns">
          <button className="btn">
            <a href="/login">Get Started!</a>
          </button>

          <button className="btn">
            <a href="/library">Explore Books</a>
          </button>
        </div>
      </div>
      <hr className="hero__secline" />
      <div className="hero__booksection">
        <h2 className="heading__h2">Latest Books:</h2>
        <hr className="booksection__line" />
        <div className="hero__popularbooks">
          {latestBooks.map((book) => {
            return (
              <SingleBook
                key={book.bookId}
                img={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
                title={book.bookTitle}
                author={book.author}
                showButton={false}
                userName={false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Hero;
