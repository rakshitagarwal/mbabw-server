export const isAuthenticated = (req,res,next)=>{
    const token = req.cookies["connect.sid"];

    if(!token){
        return res.status(400).json({message:"Unauthorized"});
    }
    console.log(token);
    next();
}