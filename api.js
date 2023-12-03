const express = require('express');
const bodyParser = require('body-parser');
const menuRouter = require('./src/routes/menuRouter.js');
const errorMiddleware = require('./src/middleware/errorMiddleware.js');
const { corsMiddleware } = require('./src/middleware/corsMiddleware.js');
const pino = require('pino');
require('dotenv').config();

const logger = pino();
const app = express();
const port = process.env.PORT || 3001;

app.use(corsMiddleware);

app.use(bodyParser.json());
app.use("/api/v1", menuRouter);
app.use(errorMiddleware);

app.listen(process.env.PORT, (err) => {
    if (err) {
        logger.error('Error starting the server:', err);
    } else {
        logger.info(`Server is running on port ${port}`);
    }
});
