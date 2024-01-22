const userService = require("../service/userService");
const joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("../config/config.json");

const signUpschema = joi.object({
  firstName: joi.string().min(3).max(30).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  Cpassword: joi.string().valid(joi.ref("password")).required().messages({
    "any.only": "Passwords do not match",
  }),
});

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

const editUserSchema = joi.object({
  id: joi.number().required(),
  fullName: joi.string().min(3).max(30),
  email: joi.string().email(),
  profile: joi.string(),
});

module.exports = {
  register: async (req, res) => {
    try {
      const validate = await signUpschema.validateAsync(req.body);
      const createdUser = await userService.register(validate);

      if (createdUser.error) {
        return res.send(createdUser.error);
      }
      return res.send("registration successful, Please Login Now");
    } catch (error) {
      return res.send(error.details ? error.details[0].message : error.message);
    }
  },

  login: async (req, res) => {
    try {
      // const validator = await loginSchema.validateAsync(req.body);

      const user = await userService.login(req.body);

      if (user.error) {
        // console.log(user.error);
        return res.send(user.error);
      }

      const token = jwt.sign({ id: user.response.id }, config.jwt.secret);

      console.log("Before setting cookie");
      res.status(200).cookie("access_token", token, { httpOnly: true }).json({
        status: "success",
        user: user.response,
      });

      console.log("After setting cookie");

      // return res.send("login successful");
    } catch (error) {
      console.log(error);
      return res.send(error.details ? error.details[0].message : error.message);
    }
  },

  editUser: async (req, res) => {
    try {
      if (req.user.id !== Number(req.body.id)) {
        // jwt id and user id

        return res.send("You are not authorized to edit this user");
      }

      const validator = await editUserSchema.validateAsync(req.body);

      const user = await userService.editUser(validator);

      if (user.error) {
        res.status(500).json(user.error);
      }

      res.status(200).json({
        status: "success",
        user: user.response,
      });
    } catch (error) {
      return res.send(error.details ? error.details[0].message : error.message);
    }
  },

  signout: async (req, res) => {
    res
      .clearCookie("access_token")
      .status(200)
      .json("You are successfully logged out");
  },
};
