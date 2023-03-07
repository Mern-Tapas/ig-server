
const clientauth = (req,res,next)=>{
    const token = req.cookie()
    console.log(token)
}

module.exports = clientauth