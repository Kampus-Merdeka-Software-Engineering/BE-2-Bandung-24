const express = require('express');
const menuController = require('../controllers/menuController');
const menuRoutes = express.Router();

// ambil semua data menu
menuRoutes.get('/menu', menuController.getAllMenu);

// ambil data menu berdasarkan category
menuRoutes.post('/menu:category', menuController.getMenuByCategory);

module.exports = { menuRoutes };