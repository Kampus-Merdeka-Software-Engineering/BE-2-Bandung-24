require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pino = require('pino');
const menuRouter = require('./src/routes/menuRouter.js');
const transactionRouter = require('./src/routes/transactionRouter.js');
const errorMiddleware = require('./src/middleware/errorMiddleware.js');
const logger = pino();
const app = express();
const v1 = express.Router();
const port = process.env.PORT || 3001;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// error middleware
app.use(errorMiddleware);

// routes
app.use("/v1", v1);

// menu & category routes
v1.use("/menu", menuRouter);

// transaction routes
v1.use("/transaction", transactionRouter);

// start the server
app.listen(port, (err) => {
    if (err) {
        logger.error('Error starting the server:', err);
    } else {
        logger.info(`Server is running on port ${port}`);
    }
});
