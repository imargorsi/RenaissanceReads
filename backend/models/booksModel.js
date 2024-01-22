const { models } = require("./index");

module.exports = {
  newBook: async (body, bookId) => {
    try {
      const newBook = await models.books.create({
        bookId: bookId,
        ...body,
      });

      return { response: newBook };
    } catch (error) {
      console.log(error);
      return { error: error };
    }
  },

  bookTitle: async (bookTitle) => {
    try {
      const book = await models.books.findOne({
        where: {
          bookTitle: bookTitle,
        },
      });

      return {
        response: book,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  allbooks: async () => {
    try {
      const getallbooks = await models.books.findAll({
        include: [
          {
            model: models.user,
            attributes: ["fullName"], // Add the attributes you want to retrieve
          },
        ],
      });

      return {
        response: getallbooks,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  singlebook: async (id) => {
    try {
      const getbook = await models.books.findOne({
        where: {
          id: id,
        },
      });

      return {
        response: getbook,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  editNotes: async (bookid, notes) => {
    try {
      const bookNotes = await models.books.update(
        { notes: notes },
        { where: { id: bookid } }
      );

      return {
        response: bookNotes,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

  deletebook: async (id) => {
    try {
      const deletedbook = await models.books.destroy({
        where: {
          id: id,
        },
      });

      console.log("mm", deletedbook);
      return {
        response: deletedbook,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
