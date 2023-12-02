const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const menuRouter = require('./src/routes/menuRouter.js');
const errorMiddleware = require('./src/middleware/errorMiddleware.js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
    origin: process.env.ORIGINS ? process.env.ORIGINS.split(',') : '*',
    methods: process.env.METHODS,
    allowedHeaders: process.env.HEADERS ? process.env.HEADERS.split(',') : '*',
}));
app.use(bodyParser.json());

app.use("/", menuRouter);

app.use(errorMiddleware);

app.listen(port, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log(`Server is running on port ${port}`);
    }
});
