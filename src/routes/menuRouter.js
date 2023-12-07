const express = require('express');
const menuController = require('../controllers/menuController.js');
const menuRouter = express.Router();

menuRouter.get("/", (req, res) => {
    res.status(200).json({ message: "Ini data API SE.Kopi" });
});

// menu & category router
menuRouter.get("/", menuController.getAllMenuController);
menuRouter.get("/:category", menuController.getMenuByCategoryController);

module.exports = menuRouter;
