const express = require("express")
const deletelead = express.Router()



deletelead.get("",(req,res)=>{
    res.send("hellow")
    console.log(req.params.id)
})

deletelead.post("",(req,res)=>{
    res.send(req.params.id)
})


module.exports = deletelead