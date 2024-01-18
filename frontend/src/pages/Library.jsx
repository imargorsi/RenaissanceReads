import SingleBook from "../components/singleBook";
function Library() {
  // demo image data for temp
  const imageSource = "https://picsum.photos/200";
  const bookTitile = "Atomic Habits";
  const author = "By James Clear";
  const userBy = "by: argorsi";

  //

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
        <SingleBook
          img={imageSource}
          title={bookTitile}
          author={author}
          by={userBy}
        />
        <SingleBook
          img={imageSource}
          title={bookTitile}
          author={author}
          by={userBy}
        />
        <SingleBook
          img={imageSource}
          title={bookTitile}
          author={author}
          by={userBy}
        />
        <SingleBook
          img={imageSource}
          title={bookTitile}
          author={author}
          by={userBy}
        />
        <SingleBook
          img={imageSource}
          title={bookTitile}
          author={author}
          by={userBy}
        />
        \
      </div>
    </div>
  );
}

export default Library;
