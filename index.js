const express = require('express');
const PORT = (process.env.PORT || '3000');
const { Client } = require("pg");

const app = express()

//test DB
app.get("/test", async (req, res) => {
    const data = await client.query(` SELECT * FROM admin`);
    res.status(200).json(data.rows);
  });

app.listen(PORT, ()=>{
    console.log(`Dijalankan di localhost:${PORT}`)
})
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
//   });