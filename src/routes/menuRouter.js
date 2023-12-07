const express = require('express');
const menuController = require('../controllers/menuController.js');
const menuRouter = express.Router();

// menu & category router
menuRouter.get("/", menuController.getAllMenuController);
menuRouter.get("/:category", menuController.getMenuByCategoryController);

module.exports = menuRouter;
