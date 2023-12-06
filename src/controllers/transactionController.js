const transactionModel = require('../models/transactionModel.js');
const { successResponse, errorResponse } = require('../../helpers/response.js');
const pino = require('pino');
const logger = pino();

// create transaction controller
async function createTransactionController(req, res) {
    try {
        const { nomor_meja, nama_pemesan, orders, status_pembayaran } = req.body;
        const result = await transactionModel.createTransaction({
            nomor_meja,
            nama_pemesan,
            orders,
            status_pembayaran,
        });
        const newTransaction = result.rows && result.rows.length > 0 ? result.rows[0] : null;
        res.json(successResponse(newTransaction, 'Transaction created successfully'));
    } catch (error) {
        const errorMessage = `Error creating transaction: ${error.message}`;
        logger.error(errorMessage, error);
        res.status(500).json(errorResponse('Internal Server Error'));
    }
}

// get all transaction controller
async function getAllTransactionController(req, res) {
    try {
        const result = await transactionModel.getAllTransaction();
        res.json(successResponse(result, 'Get all transaction success'));
    } catch (error) {
        logger.error("Error fetching data from transactions:", error);
        res.status(500).json(errorResponse('Internal Server Error'));
    }
}

module.exports = { createTransactionController, getAllTransactionController };
