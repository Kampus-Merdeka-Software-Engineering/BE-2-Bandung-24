require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pino = require('pino');
const { menuRouter } = require('./src/routes/menuRouter.js');
const { errorMiddleware } = require('./src/middleware/errorMiddleware.js');
const logger = pino();
const app = express();
const port = process.env.PORT || 3001;

// middleware
app.use(cors());
app.use(bodyParser.json());

// error middleware
app.use(errorMiddleware);

// routes
app.use("/v1", menuRouter);

// start the server
app.listen(process.env.PORT, (err) => {
    if (err) {
        logger.error('Error starting the server:', err);
    } else {
        logger.info(`Server is running on port ${port}`);
    }
});
