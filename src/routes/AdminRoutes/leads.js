const express = require('express')
const leads = express.Router()


leads.get("",(req,res)=>{
    res.send("done")
})



module.exports = leads