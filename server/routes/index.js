const express = require('express')
const router = express.Router()

const UserController = require("../controllers/userController")
const CategoryController = require("../controllers/categoryController")
const ArtController = require("../controllers/artController")

router.post("/register", UserController.register)
router.post("/login", UserController.login)

router.get("/categories", CategoryController.readCategories)
router.post("/categories", CategoryController.createCategory)
router.delete("/categories/:id", CategoryController.deleteCategory)

router.get("/arts", ArtController.readArts)
router.get("/arts/:id", ArtController.detailArt)
router.post("/arts", ArtController.createArt)
router.put("/arts/:id", ArtController.editArt)
router.post("/arts/:id", ArtController.deleteArt)

module.exports = router