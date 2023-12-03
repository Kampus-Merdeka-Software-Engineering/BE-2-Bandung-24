const express = require("express");
const app = express();
const PORT = 3005;
const cors = require("cors");
const router = require('./routes')

app.use(cors())
app.use(express.json())

// data
// const fs = require("fs");

// handle request
app.get("/", (req, res) => {
    res.json({
        message: 'WELCOME'
    })
})

app.use("/menu", router)
// app.get('/menu', (req, res) => {
//     const sql = "SELECT * FROM menu";
//     db.query(sql, (err, fields) => {
//         if (err) throw err;
//         response(200, fields, "menu get list", res)
//     })
// })


// // request menu
// app.get("/menu", (req, res) => {
//     // ambil data
//     fs.readFile('./data/menu.json', (error, data) => {
//         if (error) res.send("Gagal membaca data");
//         const menu = JSON.parse(data)
//         res.status(202).send(data);
//     });
// });

// untuk route yang tidak dikenali
app.all("*", (req, res) => {
    res.status(404).send("404 not found")
})
app.listen(PORT, () => {
    console.log(`server udah nyala yaa`);
});