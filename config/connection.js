require('dotenv').config();
const { Pool } = require('pg');
const pino = require('pino');
const logger = pino();
const pool = new Pool({
    connectionString: process.env.SEKOPI_URL + "?sslmode=require",
});

// connect to database
pool.connect()
    .then(() => logger.info('Connected to the database'))
    .catch(err => {
        logger.error('Error connecting to database', err);
        process.exit(1);
    });

// reconnect to database
pool.on('error', err => {
    logger.error('Database error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        reconnect();
    } else {
        throw err;
    }
});

// reconnect function
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
