module.exports = (err, req, res, next) => {
    console.error(err.stack);

    if (process.env.NODE_ENV === 'development') {
        const errorResponse = {
            message: 'Internal Server Error',
            error: {
                message: err.message,
                stack: err.stack,
            },
        };

        if (err.name === 'ValidationError') {
            res.status(400).json(errorResponse);
        } else {
            res.status(500).json(errorResponse);
        }
    } else {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};