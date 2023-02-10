const express = require('express')
const leads = express.Router()
const leadsmodel = require("../../schema/models")


leads.get("", async(req,res)=>{

    try {
        const leads = await leadsmodel.find().sort({_id:-1})
        res.send({massage:"all leads data",data:leads})
    } catch (error) {
        
    }
    
})


leads.get("/:id",(req,res)=>{
    console.log(req.params.id)
})


module.exports = leads