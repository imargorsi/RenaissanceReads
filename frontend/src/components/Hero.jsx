import heroimg from "../images/hero_img.jpg";
import SingleBook from "./singleBook";

// demo image data for temp
const imageSource = "https://picsum.photos/200";
const bookTitile = "Atomic Habits";
const author = "By James Clear";
const userBy = "by: argorsi";

//

function Hero() {
  return (
    <div className="herosection container">
      <div className="hero__mainsection">
        <img src={heroimg} alt="" className="mainsection__img" />
        <h2 className="heading__h2">
          Discover Timeless Classics and Modern Masterpieces
        </h2>
        <div className="mainsection__btns">
          <button className="btn">Get Started!</button>
          <button className="btn">Explore Books</button>
        </div>
      </div>
      <hr className="hero__secline" />
      <div className="hero__booksection">
        <h2 className="heading__h2">Most Popular Books:</h2>
        <hr className="booksection__line" />
        <div className="hero__popularbooks">
          {
            <SingleBook
              img={imageSource}
              title={bookTitile}
              author={author}
              by={userBy}
            />
          }
          {
            <SingleBook
              img={imageSource}
              title={bookTitile}
              author={author}
              by={userBy}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default Hero;
