const pool = require('../config/database.js');
const pino = require('pino');
const logger = pino();

// ambil semua data menu
async function getAllMenu() {
    try {
        const query = 'SELECT * FROM menu';
        const result = await executeQuery(query);
        return result;
    } catch (error) {
        logger.error("Error fetching data from menu:", error);
        throw error;
    }
}

// ambil data menu berdasarkan kategori
async function getMenuByCategory(category) {
    try {
        const query = 'SELECT * FROM menu WHERE category = ?';
        const result = await executeQuery(query, [category]);
        return result;
    } catch (error) {
        logger.error("Error fetching data from menu:", error);
        throw error;
    }
}

// fungsi eksekusi kueri umum
function executeQuery(query, values) {
    return new Promise((resolve, reject) => {
        pool.query(query, values, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = { getAllMenu, getMenuByCategory };
