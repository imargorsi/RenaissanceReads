const bookService = require("../service/bookService");
const joi = require("joi");

const schema = joi.object({
  bookTitle: joi.string().required(),
  author: joi.string().required(),
  isbn: joi
    .string()
    .pattern(/^\d{10,}$/)
    .required()
    .messages({
      "string.pattern.base": "ISBN must be at least 10 digits long",
    }),
  genre: joi.string().required(),
  id: joi.number().required(),
});

module.exports = {
  newbook: async (req, res) => {
    try {
      const validator = await schema.validateAsync(req.body);
      const newBook = await bookService.newbook(validator);

      if (newBook.response == "Book already exists") {
        console.log(newBook.response);
        return res.status(500).send({
          error: newBook.response,
          status: "error",
        });
      }

      if (newBook.error) {
        return res.status(500).send({
          error: newBook.error,
          status: "error",
        });
      }

      return res
        .status(200)
        .send({ response: newBook.response, status: "success" });
    } catch (error) {
      return res.status(500).send({
        error: error.details ? error.details[0].message : error.message,
        status: "error",
      });
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

      await res.status(200).send({ response: getbook.response });
    } catch (error) {
      res.send({ error: error });
    }
  },
};
