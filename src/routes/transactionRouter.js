const express = require('express');
const transactionController = require('../controllers/transactionController.js');
const transactionRouter = express.Router();

// route for creating a new transaction
transactionRouter.post('/', transactionController.createTransactionController);

// route for getting all transactions
transactionRouter.get('/', transactionController.getAllTransactionController);

module.exports = transactionRouter;
