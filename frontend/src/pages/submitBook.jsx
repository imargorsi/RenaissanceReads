function SubmitBook() {
  return (
    <div className="container">
      <div className="formmain bookform">
        <h2 className="heading__h2">Submit Your Book</h2>
        <p className="form__desc">
          Make sure to enter the ISBN number of the book, it will help us find
          the right book cover.
        </p>

        <div className="regform">
          <form className="form">
            <input
              type="text"
              className="inputitem"
              placeholder="Book Name"
              id="bookName"
              name="bookName"
              required
            />
            <input
              type="text"
              className="inputitem"
              placeholder="Author's Name"
              id="auhtorName"
              name="auhtorName"
              required
            />

            <select
              id="selectOption"
              name="selectOption"
              className="inputitem drowpdown"
            >
              <option className="singleitem" value="option1">
                Select Genre
              </option>
              <option value="option2">History</option>
              <option value="option3">Fiction</option>
              <option value="option3">Self Help</option>
              <option value="option3">Others</option>
            </select>

            <input
              type="text"
              className="inputitem"
              placeholder="10 Digit ISBN Number"
              id="auhtorName"
              name="auhtorName"
              required
            />

            <button className="btn submi__btn" type="submit">
              Submit Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SubmitBook;
