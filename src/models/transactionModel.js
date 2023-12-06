const pool = require('../../config/connection.js');
const pino = require('pino');
const logger = pino();

// create transaction model
async function createTransaction({ nomor_meja, nama_pemesan, orders, status_pembayaran }) {
    if (!nomor_meja || !nama_pemesan || !orders || status_pembayaran === undefined) {
        const errorMessage = 'Invalid parameters for createTransaction';
        logger.error(errorMessage);
        throw new Error(errorMessage);
    }

    const query = `
        INSERT INTO transactions (nomor_meja, nama_pemesan, orders, status_pembayaran)
        VALUES ($1, $2, $3::json, $4)
        RETURNING *
    `;

    const values = [nomor_meja, nama_pemesan, orders, status_pembayaran];
    try {
        const result = await pool.query(query, values);
        const newTransaction = result.rows && result.rows.length > 0 ? result.rows[0] : null;
        return newTransaction;
    } catch (error) {
        const errorMessage = `Error creating transaction: ${error.message}`;
        logger.error(errorMessage, error);
        throw new Error(errorMessage);
    }
}

module.exports = { createTransaction };
