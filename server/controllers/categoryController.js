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

      const foundCategory = await Category.findOne({
        where: { name },
      });

      if (foundCategory) {
        throw { name: "CategoryExist" };
      }

      const response = await Category.create({
        name,
      });

      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      const id = +req.body.id;

      const foundCategory = await Category.findOne({
        where: { id },
      });

      if (!foundCategory) {
        throw { name: "CategoryNotFound" };
      }

      await Category.destroy({
        where: { id },
      });

      res.status(200).json({ message: "Category has been deleted!" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CategoryController;
