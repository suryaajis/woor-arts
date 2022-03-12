const { Art } = require("../models");

class ArtController {
  static async readArts(req, res, next) {
    try {
      const response = await Art.findAll();

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async detailArt(req, res, next) {
    try {
      const id = +req.body.id;

      const response = await Art.findById(id);

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async createArt(req, res, next) {
    try {
      const { title, price, description, category_id } = req.body;

      const foundArt = await Art.findOne({ where: { title } });

      if (foundArt) {
        throw { name: "ArtExist" };
      }

      const response = await Art.create({
        title,
        price,
        description,
        category_id,
      });

      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async editArt(req, res, next) {
    try {
      const id = +req.body.id;
      const { title, price, description, category_id } = req.body;

      const foundArt = await Art.findByPk(id);

      if (!foundArt) {
        throw { name: "ArtNotFound" };
      }

      const response = await Art.update(
        { title, price, description, category_id },
        { where: { id }, returning: true }
      );

      res.status(200).json(response[1]);
    } catch (err) {
      next(err);
    }
  }

  static async deleteArt(req, res, next) {
    try {
      const id = +req.body.id;

      const foundArt = await Art.findByPk(id);

      if (!foundArt) {
        throw { name: "ArtNotFound" };
      }

      await Art.destroy({
        where: { id },
      });

      res.status(200).json({ message: "Art has been deleted!" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ArtController;
