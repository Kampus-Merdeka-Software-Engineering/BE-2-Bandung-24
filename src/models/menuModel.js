const pool = require('../../config/connection.js');

async function getAllMenu() {
    try {
        const result = await pool.query('SELECT * FROM menu');
        return result.rows;
    } catch (error) {
        console.error("Error fetching data from menu:", error);
        throw error;
    }
}

async function getMenuByCategory(category) {
    try {
        const query = {
            text: 'SELECT * FROM menu WHERE category = $1',
            values: [category],
        };

        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error("Error fetching data from menu:", error);
        throw error;
    }
}

module.exports = { getAllMenu, getMenuByCategory };
