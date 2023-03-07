
const clientauth = (req,res,next)=>{
    const token = req.cookies.jwt
    console.log(token)
    console.log("token")
}

module.exports = clientauth