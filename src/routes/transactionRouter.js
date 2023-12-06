const express = require('express');
const transactionController = require('../controllers/transactionController.js');
const router = express.Router();

// route for creating a new transaction
router.post('/transactions', transactionController.createTransactionController);

module.exports = router;
