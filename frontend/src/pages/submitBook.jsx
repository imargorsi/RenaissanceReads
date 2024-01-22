import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function SubmitBook() {
  const { currentUser } = useSelector((state) => state.user);
  const [bookForm, setBookForm] = useState({
    bookTitle: "",
    author: "",
    genre: "",
    isbn: "",
    id: currentUser.id,
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookForm({ ...bookForm, [name]: value });
  };

  // frontend.js
  // frontend.js
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/submitbook", bookForm);

      if (response.data.status === "success") {
        console.log("Book Added");
        setError("Book Added Successfully");
        navigate("/library");
      }

      if (response.data === "Book already exists") {
        setError(
          "This Book Already Exist in Our Database, Please Check the spelling or try another book"
        );
      }
    } catch (error) {
      setError(
        error.response.data ? error.response.data.error : "Something Went Wrong"
      );
    }
  };

  return (
    <div className="container">
      <div className="formmain bookform">
        <h2 className="heading__h2">Submit Your Book</h2>
        <p className="form__desc">
          Enter the details to submit your book. Make sure to enter the ISBN
          number of the book; it will help us find the right book cover.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="inputitem"
            placeholder="Book Name"
            value={bookForm.bookTitle}
            onChange={handleChange}
            name="bookTitle"
            required
          />
          <input
            type="text"
            className="inputitem"
            placeholder="Author's Name"
            value={bookForm.author}
            onChange={handleChange}
            name="author"
            required
          />

          <select
            className="inputitem drowpdown"
            value={bookForm.genre}
            onChange={handleChange}
            name="genre"
          >
            <option className="singleitem" value="option1">
              Select Genre
            </option>
            <option value="History">History</option>
            <option value="Fiction">Fiction</option>
            <option value="Self Help">Self Help</option>
            <option value="Others">Others</option>
          </select>

          <input
            type="text"
            className="inputitem"
            placeholder="10 Digit ISBN Number"
            value={bookForm.isbn}
            onChange={handleChange}
            name="isbn"
            required
          />

          <p className="form__desc">{error}</p>

          <button className="btn submi__btn" type="submit">
            Submit Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubmitBook;
