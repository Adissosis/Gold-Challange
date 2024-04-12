const express = require('express');
const PORT = (process.env.PORT || '3000');
const { Client } = require("pg");

const app = express()

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });
client.connect(function(error){
    if(error !== null){
        console.log('Cannot connect to database', error)
    } else {
        console.log('Connected to database')
    }
})

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