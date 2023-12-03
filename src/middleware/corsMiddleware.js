const cors = require('cors');

const corsMiddleware = cors({
    origin: ["http://localhost:5500", "http://localhost:3001", "http://127.0.0.1:5500", "http://127.0.0.1:3001", "https://sekopi.biz.id/"],
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
});

module.exports = {
    corsMiddleware,
};
