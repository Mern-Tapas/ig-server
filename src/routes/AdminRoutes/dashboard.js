const express = require("express")
const dashboard = express.Router()
const leadsmodel = require("../../schema/models")
const leads = require("./leads")


dashboard.get('', async (req, res) => {
    try {
        const data = await leadsmodel.find().sort({ _id: -1 }).limit(10)
        res.send({ massage: "welcome to IG Server", data: data })

    } catch (error) {
        console.log(`dashboard-js error found ${error}`)
    }
})

dashboard.delete("/:id", async (req, res) => {
    try {
        const result = await leadsmodel.deleteOne({ _id: req.params.id })
        res.send({ massage: "Deleted Success", operation: true })
    } catch (error) {

    }
})

dashboard.use("/leads",leads)







module.exports = dashboard