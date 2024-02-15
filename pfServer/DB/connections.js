// import mongoose
const mongoose = require('mongoose')

// get connection string from .env
const connectionString = process.env.DATA_BASE;

// connect to mongodB using mongoose
mongoose.connect(connectionString).then((res)=>{
    console.log("MongodB connected successfully")
}).catch((err)=>{
    console.log(`MongodB connection faile due to ${err}`)
})