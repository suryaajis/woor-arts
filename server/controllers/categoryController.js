const { Category } = require("../models");

class CategoryController {
  static async readCategories(req, res, next) {
    try {
      const response = await Category.findAll();

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async createCategory(req, res, next) {
    try {
      const { name } = req.body;

      const response = await Category.create({
        name,
      });

      res.status(201).json(response)
    } catch (err) {
      next(err);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CategoryController;
