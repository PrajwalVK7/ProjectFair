//import mongoose

const mongoose = require('mongoose');

// create a schema : use schema class in mongoose module

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require
    },
    github:{
        type:String
    },
    linkedin:{
        type:String
    },
    profile:{
        type:String
    }
})

// define to which collection in db , our newly created schema refers
const users = mongoose.model("users",userSchema);
module.exports = users;