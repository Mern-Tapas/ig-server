const express = require('express')
const leads = express.Router()
const leadsmodel = require("../../schema/models")


leads.get("", async (req, res) => {

    try {
        const leads = await leadsmodel.find().sort({ _id: -1 })
        res.send({ massage: "all leads data", data: leads })
    } catch (error) {

    }

})


leads.get("/:id", async(req, res) => {
    const lead = await leadsmodel.findById({_id:req.params.id})
    console.log(lead)

})




module.exports = leads