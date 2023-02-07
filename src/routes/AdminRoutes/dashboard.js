const express = require("express")
const dashboard = express.Router()


dashboard.get('', (req, res) => {
    res.send({data:"tapas"})
})






module.exports = dashboard