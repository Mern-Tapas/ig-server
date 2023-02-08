const express = require("express")
const dashboard = express.Router()
const leadsmodel = require("../../schema/models")


dashboard.get('', async (req, res) => {
    try {
        const data = await leadsmodel.find().sort({_id:-1}).limit(10)
        console.log(data)
        res.send({ massage: "welcome to IG Server", data: data })

    } catch (error) {
        console.log(`dashboard-js error found ${error}`)
    }
})






module.exports = dashboard