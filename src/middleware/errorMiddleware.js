const pino = require('pino');
const logger = pino();

// middleware untuk menangani kesalahan
module.exports = (err, req, res, next) => {
    logger.error(err.stack);

    // mode development
    if (process.env.NODE_ENV === 'development') {
        const errorResponse = {
            message: 'Internal Server Error',
            error: {
                message: err.message,
                stack: err.stack,
            },
        };

        // kesalahan pada validasi
        if (err.name === 'ValidationError') {
            return res.status(422).json(errorResponse);
        } else {
            return res.status(500).json(errorResponse);
        }
    } else {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
