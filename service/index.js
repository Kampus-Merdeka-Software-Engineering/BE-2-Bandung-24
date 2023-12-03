const db = require('../config/index')
const helper = require('../helper')
const config = require('../config')

async function getAllMenu(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage)
    const data = await db.query(
        `SELECT * FROM menu`
    )
    const result = helper.isEmpty(data)
    const meta = {
        page
    }

    if (data.length) {
        return {
            ...helper.reqSuccess('Success get all menu', false, result)
        }
    } else {
        return {
            ...helper.reqFail('Fail to get all menu')
        }
    }
}

async function getCategory() {
    const data = await db.query(
        `SELECT * FROM menu`
    )
    const result = helper.isEmpty(data)

    if (data.length) {
        return {
            ...helper.reqSuccess('Success get all menu', false, result)
        }
    } else {
        return {
            ...helper.reqFail('Fail to get all menu')
        }
    }
}

module.exports = {
    getAllMenu
}