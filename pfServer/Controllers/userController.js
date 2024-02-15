// logic to register
//import userSchema
const users = require('../Models/userSchema');

// web token
const jwt = require('jsonwebtoken');
//register user

exports.register = async (req, res) => {
    console.log("Inside user conroller : register method");
    console.log("Request Body:", req.body);
    const { username, email, password } = req.body;
    //check whether email id is already exist in user collection
    try {
        const existingUser = await users.findOne({ email: email });
        console.log("existing user")
        console.log(existingUser)
        if (existingUser) {
            // if user already  registered by checking email
            res.status(406).json('Account already exists,please Login')
        }
        else {
            const newUser = new users({
                username: username,
                email: email,
                password: password,
                github: "",
                linkedin: "",
                profile: ""
            })
            await newUser.save();
            res.status(200).json(newUser);
        }
    }
    catch (err) {
        res.status(401).json("registration reqest failed due to ", err)
    }
}

// login

exports.login = async (req, res) => {
    console.log("Inside login method ");
    console.log("Request Body:", req.body);
    const { email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email: email, password: password });
        if (existingUser) {
            const token = jwt.sign({userID:existingUser._id},"supersecretkey1234") // generating json web token, token using user id& and set a password
            res.status(200).json({
                existingUser:existingUser,
                token:token
            })
            // console.log(token)
        }
        else{
            res.status(406).json("Invalid email id or Password")
        }
    }
    catch (err) {
        res.status(401).json("Login req failed due to ", err)
    }
}



