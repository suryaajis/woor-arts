const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class UserController {
  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body;

      const response = await User.create({
        name,
        email,
        password,
        role: "Admin",
      });

      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const foundUser = await User.findOne({
        where: { email },
      });

      if (!foundUser) {
        throw { name: "InvalidLogin" };
      }

      if (!comparePassword(password, foundUser.password)) {
        throw { name: "InvalidLogin" };
      }

      const payload = {
        id: foundUser.id,
        email: foundUser.email,
      };

      const token = generateToken(payload);

      res.status(200).json({ access_token: token });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController
