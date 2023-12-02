const mysql = require('mysql')

const db = mysql.createPool({
    host: "",
    user: "",
    password: "",
    database: "",
    port: 3005,
    connectionLimit: 10
})

module.exports = db