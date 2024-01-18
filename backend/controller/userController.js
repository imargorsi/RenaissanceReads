const userService = require("../service/userService");
const joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("../config/config.json");

const signUpschema = joi.object({
  firstName: joi.string().min(3).max(30).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  Cpassword: joi.ref("password"),
});

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
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
      const validator = await loginSchema.validateAsync(req.body);
      const user = await userService.login(validator);

      if (user.error) {
        // console.log(user.error);
        return res.send(user.error);
      }

      const token = jwt.sign({ id: user.response.id }, config.jwt.secret);

      console.log("Before setting cookie");
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(user.response);

      console.log("After setting cookie");

      // return res.send("login successful");
    } catch (error) {
      return res.send(error.details ? error.details[0].message : error.message);
    }
  },
};
