const bookModel = require("../models/booksModel");

module.exports = {
  newbook: async (body) => {
    try {
      const bookId = Math.floor(Math.random() * 10000);
      const checkBookName = await bookModel.bookTitle(body.bookTitle);

      if (checkBookName.response) {
        return {
          response: "Book already exists",
        };
      }

      const book = await bookModel.newBook(body, bookId);

      if (book.error) {
        console.log("service error", book.error);
        return { error: book.error };
      }

      return { response: book.response };
    } catch (error) {
      console.log("service catch", error);
      return { error: error };
    }
  },

  allbooks: async () => {
    try {
      const getallbooks = await bookModel.allbooks();

      if (getallbooks.response.length == 0) {
        return {
          response: "No books found",
        };
      }
      return {
        response: getallbooks.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  singlebook: async (id) => {
    try {
      const getbook = await bookModel.singlebook(id);

      if (getbook.response == null) {
        return {
          response: "No book found",
        };
      }

      return {
        response: getbook.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  editNotes: async (bookid, notes) => {
    try {
      const bookNotes = await bookModel.editNotes(bookid, notes);

      if (bookNotes.response == null) {
        return {
          response: "no book found",
        };
      }

      return {
        response: bookNotes.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  deletebook: async (id) => {
    try {
      const deletedbook = await bookModel.deletebook(id);

      if (deletedbook.response == null || deletedbook.error == null) {
        return {
          response: "no book found",
        };
      }
      return {
        response: deletedbook.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
