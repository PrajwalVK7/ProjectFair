
const appMiddleware = (req,res,next)=>{
    console.log("Inside application middleware");
    next();
}
module.exports= appMiddleware;