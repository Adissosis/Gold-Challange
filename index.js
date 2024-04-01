const express = require('express')
const pg = require('pg')

const app = express()

const client = new pg.Client({
    host: 'satao.db.elephantsql.com',
    port: 5432,
    database: 'arkshjud',
    user: 'arkshjud',
    password: 'tUrv3Rmq0o40h8Dd5tfS8ZP_s6IR0dcv',
})
client.connect(function(error){
    if(error !== null){
        console.log('Cannot connect to database', error)
    } else {
        console.log('Connected to database')
    }
})
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
//   });