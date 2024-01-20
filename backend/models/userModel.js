const { models } = require("./index");

module.exports = {
  register: async (body) => {
    try {
      const newuser = await models.user.create({
        fullName: body.firstName,
        email: body.email,
        password: body.password,
      });

      return {
        response: newuser,
      };
    } catch (error) {
      console.log(error);
    }
  },

  findbyEmail: async (email) => {
    try {
      const singleEmail = await models.user.findOne({
        where: {
          email: email,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
      });

      return {
        response: singleEmail,
      };
    } catch (error) {
      error: error;
    }
  },

  login: async (body) => {
    try {
      const user = await models.user.findOne({
        where: {
          email: body.email,
          password: body.password,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
      });

      return {
        response: user.dataValues,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  updateSummary: async (body) => {
    try {
      const user = await models.user.findOne({
        where: {
          id: body.id,
          email: body.email,
        },
      });

      if (!user) {
        return {
          response: user,
        };
      }

      const updatedUser = await user.update({ summary: body.summary });

      return {
        response: updatedUser,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  getbooks: async (id) => {
    try {
      const userbooks = await models.books.findAll({
        where: {
          userId: id,
        },
      });

      const userbooksData = userbooks.map((book) => book.get({ plain: true }));

      return {
        response: userbooksData,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
