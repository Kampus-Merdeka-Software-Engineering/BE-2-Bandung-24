const pool = require('../config/database.js');

// semua data menu
async function getAllMenu() {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query('SELECT * FROM menu');
        return rows;
    } finally {
        connection.release();
    }
}

// data menu berdasarkan category
async function getMenuByCategory(menu) {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query(
            'SELECT * FROM menu WHERE category = ?',
            [menu]
        );
        return rows.insertId;
    } finally {
        connection.release();
    }
}

module.exports = {
    getAllMenu,
    getMenuByCategory
};