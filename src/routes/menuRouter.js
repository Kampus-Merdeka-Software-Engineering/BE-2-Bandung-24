const express = require('express');
const { menuController } = require('../controllers/menuController.js');
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "Ini data API SE.Kopi" });
});

// menu & category router
router.get("/menu", menuController.getAllMenuController);
router.get("/menu/:category", menuController.getMenuByCategoryController);

module.exports = router;
