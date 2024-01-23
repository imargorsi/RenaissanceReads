function Reviews() {
  return (
    <div className="container">
      <form className="reviewform">
        <div className="rating">
          <label>
            <input type="radio" name="stars" value="1" />
            <span className="fa fa-star icon"></span>
          </label>
          <label>
            <input type="radio" name="stars" value="2" />
            <span className="fa fa-star icon"></span>
            <span className="fa fa-star icon"></span>
          </label>
          <label>
            <input type="radio" name="stars" value="3" />
            <span className="fa fa-star icon"></span>
            <span className="fa fa-star icon"></span>
            <span className="fa fa-star icon"></span>
          </label>
          <label>
            <input type="radio" name="stars" value="4" />
            <span className="fa fa-star icon"></span>
            <span className="fa fa-star icon"></span>
            <span className="fa fa-star icon"></span>
            <span className="fa fa-star icon"></span>
          </label>
          <label>
            <input type="radio" name="stars" value="5" />
            <span className="fa fa-star icon"></span>
            <span className="fa fa-star icon"></span>
            <span className="fa fa-star icon"></span>
            <span className="fa fa-star icon"></span>
            <span className="fa fa-star icon"></span>
          </label>
        </div>

        <input
          className="inputitem"
          type="text"
          value="hello"
          placeholder="Your Review Title"
        />

        <textarea className="textarea2" type="text" placeholder="Your Review" />
        <button className="btn submitbtnform">Submit Review</button>
      </form>
    </div>
  );
}

export default Reviews;
