const express = require('express')
const sekopiRouter = express.Router()
const service = require('../service/db.js')

sekopiRouter.get('/', async function (req, res, next) {
    try {
        res.json(await service.getAllMenu(req.query.page))
    } catch (error) {
        console.error('Error while getting menu', error.message)
        next(error)
    }
})

module.exports = sekopiRouter