const bookService = require("../service/bookService");
const joi = require("joi");

const schema = joi.object({
  bookTitle: joi.string().required(),
  author: joi.string().required(),
  review: joi.string().required(),
  notes: joi.string().required(),
  ISBN: joi.number().required(),
  stars: joi.string().required(),
});

module.exports = {
  newbook: async (req, res) => {
    try {
      const validator = await schema.validate(req.body);
      const book = await bookService.newbook(validator);

      res.redirect("/");
    } catch (error) {
      res.send({ error: book.error });
      console.log(error);
    }
  },

  getallbooks: async (req, res) => {
    try {
      const getallbooks = await bookService.allbooks();

      // await res.render("index", { response: getallbooks.response });
      await res.status(200).send({ response: getallbooks.response });
    } catch (error) {
      res.send({ error: error });
    }
  },

  singlebook: async (req, res) => {
    try {
      const getbook = await bookService.singlebook(req.params.id);

      // await res.render("booknotes", {
      //   singlebook: getbook.response.dataValues,
      // });

      await res.status(200).send({ response: getbook.response.dataValues });
    } catch (error) {
      res.send({ error: error });
    }
  },

  editNotes: async (req, res) => {
    try {
      const bookid = parseInt(req.body.id);
      const notes = req.body.notes;

      const bookNotes = await bookService.editNotes(bookid, notes);

      res.send({ response: bookNotes.response });
    } catch (error) {
      res.send({ error: error });
    }
  },

  deletebook: async (req, res) => {
    try {
      const bookid = parseInt(req.params.id);
      const deletebook = await bookService.deletebook(bookid);
      console.log("book deleted", deletebook, bookid);
      res.status(200).json({
        success: true,
        message: "Book deleted",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message || "Error deleting book",
      });
    }
  },
};
