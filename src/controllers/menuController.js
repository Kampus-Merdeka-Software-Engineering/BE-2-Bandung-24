const menuModel = require('../models/menuModel.js');
const { successResponse, errorResponse } = require('../../helpers/response.js');
const pino = require('pino');

const logger = pino();

async function getAllMenuController(req, res) {
    try {
        const data = await menuModel.getAllMenu();
        res.status(200).json(successResponse(data, "Menu get list"));
    } catch (error) {
        logger.error("Error in getAllMenuController:", error);
        res.status(500).json(errorResponse("Internal server error"));
    }
}

async function getMenuByCategoryController(req, res) {
    const category = req.params.category;
    try {
        const data = await menuModel.getMenuByCategory(category);
        res.status(200).json(successResponse(data, "Filtered menu by category"));
    } catch (error) {
        logger.error("Error in getMenuByCategoryController:", error);
        res.status(500).json(errorResponse("Internal server error"));
    }
}

module.exports = { getAllMenuController, getMenuByCategoryController };
