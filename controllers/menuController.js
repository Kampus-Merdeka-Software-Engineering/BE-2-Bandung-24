const menuService = require('../services/menuService.js');
const { successResponse, errorResponse } = require('../helpers/helper.js');
const pino = require('pino');
const logger = pino();

// ambil semua data menu controller
async function getAllMenuController(req, res) {
    try {
        const menu = await menuService.getAllMenu();
        res.status(200).json(successResponse("Successfully fetched all menu", menu));
    } catch (error) {
        logger.error("Error in getAllMenuController:", error);
        res.status(500).json(errorResponse('Internal server error'));
    }
}

// ambil data menu berdasarkan kategori controller
async function getMenuByCategoryController(req, res) {
    try {
        const category = await menuService.getMenuByCategory(req.params.category);
        res.status(200).json(successResponse("Successfully fetched menu by category", category));
    } catch (error) {
        console.error('Error in getMenuByCategoryController:', error);
        res.status(500).json(errorResponse('Internal server error'));
    }
}

module.exports = { getAllMenuController, getMenuByCategoryController };
