const menuService = require('../services/menuService.js');

// semua data menu controller
async function getAllMenu(req, res) {
    try {
        const menu = await menuService.getAllMenu();
        res.status(200).json({
            message: "Successfully fetched all users",
            data: menu
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// data menu berdasarkan category controller
async function getMenuByCategory(req, res) {
    try {
        const category = await menuService.getMenuByCategory(req.params.category);
        res.status(200).json({
            message: "Successfully fetched all users",
            data: category
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getAllMenu,
    getMenuByCategory
}