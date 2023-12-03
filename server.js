require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pino = require('pino');
const menuRoutes = require('./routes/menuRoutes.js');
const logger = pino();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", menuRoutes);

// jalanin server
app.listen(process.env.PORT, (err) => {
    if (err) {
        logger.error('Error starting the server:', err);
    } else {
        logger.info(`Server is running on port ${port}`);
    }
});
