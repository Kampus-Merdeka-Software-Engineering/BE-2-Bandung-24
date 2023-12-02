const express = require("express");
const app = express();
const PORT = 3005;
const cors = require("cors");


// data
const fs = require("fs");

// handle request
app.get("/", (req, res) => {
    res.send("Ini respon buat kamu yaa");
});

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