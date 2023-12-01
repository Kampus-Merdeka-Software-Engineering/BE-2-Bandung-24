const { Pool } = require('pg');
require('dotenv').config();

const db = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

db.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => {
        console.error('Error connecting to database', err);
        process.exit(1);
    });

db.on('error', err => {
    console.error('Database error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {

        reconnect();
    } else {
        throw err;
    }
});

function reconnect() {
    setTimeout(() => {
        db.connect()
            .then(() => {
                console.log('Reconnected to the database');
            })
            .catch(reconnect);
    }, 2000);
}

module.exports = {
    query: async (text, params) => {
        try {
            const result = await db.query(text, params);
            return result;
        } catch (err) {
            throw err;
        }
    },
};
