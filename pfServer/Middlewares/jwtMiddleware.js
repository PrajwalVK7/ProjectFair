

const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
    console.log("Verifying Token: jwtMiddleware...");
    const token = req.headers['authorization'].split(' ')[1];
    console.log(token)
    try {
        const jwtResponse = jwt.verify(token, "supersecretkey1234");
        console.log("jwt response", jwtResponse);
        req.payload = jwtResponse.userID;

        console.log(req.payload)
        next();

    }
    catch (err) {
        console.log(err)
        res.status(401).json("Auothorization Failed, Please Login")
    }

}

module.exports = jwtMiddleware