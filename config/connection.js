const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

pool.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => {
        console.error('Error connecting to database', err);
        process.exit(1);
    });

pool.on('error', err => {
    console.error('Database error', err);
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
                console.log('Reconnected to the database');
            })
            .catch(reconnect);
    }, 2000);
}

module.exports = {
    query: async (text, params) => {
        try {
            const result = await pool.query(text, params);
            return result;
        } catch (err) {
            throw err;
        }
    },
};
