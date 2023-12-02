const { Pool } = require('pg');
const pino = require('pino');
require('dotenv').config();

const logger = pino();

const pool = new Pool({
    connectionString: process.env.SEKOPI_URL + "?sslmode=require",
});

pool.connect()
    .then(() => logger.info('Connected to the database'))
    .catch(err => {
        logger.error('Error connecting to database', err);
        process.exit(1);
    });

pool.on('error', err => {
    logger.error('Database error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        reconnect();
    } else {
        throw err;
    }
});

function reconnect() {
    setTimeout(() => {
        pool.connect()
            .then(() => {
                logger.info('Reconnected to the database');
            })
            .catch((err) => {
                logger.error('Error reconnecting to the database', err);
                reconnect();
            });
    }, 2000);
}

module.exports = {
    query: async (text, params) => {
        try {
            const result = await pool.query(text, params);
            return result;
        } catch (err) {
            logger.error('Database query error', err);
            throw err;
        }
    },
};
