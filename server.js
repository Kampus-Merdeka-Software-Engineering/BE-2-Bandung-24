require('dotenv').config();
const express = require('express');
const cors = require('cors')
const pino = require('pino');
const app = express();
const logger = pino();
const { menuRoutes } = require('./routes/menuRoutes.js');
const PORT = 3001 || process.env.PORT;

// middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const menuRoutes = express.Router();
app.use('/api', menuRoutes);

// server status
app.listen(PORT, () => logger.info('Server ready on port:', PORT));