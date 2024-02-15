//  express server creation 

// import router.js
const router = require('./Routes/router')
// 1) import dotenv
require('dotenv').config()

// 2) import express
const express = require('express')
require('./DB/connections')

// import connections

// 3) import cors
const cors = require('cors')

// 4) create server
const pfServer = express();

// 5) apply corse to the created server
pfServer.use(cors())

// 6) use a middleware called express.json()   to convert json data to js object
pfServer.use(express.json());
pfServer.use(router)
// exports upload
pfServer.use('/uploads',express.static('./uploads'))
// 7) defne port number
const PORT = process.env.PORT || 4000;

// 8) run the server
pfServer.listen(PORT,()=>{
    console.log(`Server is UP and Running in PORT ${PORT}`)
})

// create a method for  get

pfServer.get('/',(req,res)=>{
    res.send("project is running on PORT 4000 ")
})
