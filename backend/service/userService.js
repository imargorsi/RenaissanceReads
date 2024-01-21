const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports = {
  register: async (body) => {
    try {
      const user = await userModel.findbyEmail(body.email);

      if (user.response || user.error) {
        return {
          error: "User with this email already exists",
        };
      }

      delete body.Cpassword;
      body.password = await bcrypt.hash(body.password, 10);
      const createdUser = await userModel.register(body);

      return {
        response: createdUser.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  login: async (body) => {
    try {
      const user = await userModel.findbyEmail(body.email);

      if (!user.response || user.error) {
        return {
          error: "Invalid Email Address",
        };
      }

      const passwordMatch = await bcrypt.compare(
        body.password,
        user.response.dataValues.password
      );

      console.log("se", passwordMatch);

      if (!passwordMatch) {
        return {
          error: "Incorrect Password",
        };
      }

      delete user.response.dataValues.password;

      return {
        response: user.response.dataValues,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  editUser: async (body) => {
    try {
      const updateUser = await userModel.editUser(body);

      if (updateUser.error) {
        return {
          error: updateUser.error,
        };
      }

      return {
        response: updateUser.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  getbooks: async (id) => {
    try {
      const getbooks = await userModel.getbooks(id);

      if (getbooks === null) {
        return {
          error: "You don't have any books",
        };
      }

      return {
        response: getbooks,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
