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
            attributes: ["fullName"],
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
          bookId: id,
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

  latestBooks: async () => {
    try {
      const twoBooks = await models.books.findAll({
        order: [["createdAt", "DESC"]],
        limit: 2,
      });

      console.log(twoBooks);

      return {
        response: twoBooks,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
