const express = require("express")
const dashboard = express.Router()
const logout = require("./logout")


dashboard.get('', async (req, res) => {
   
})



dashboard.use("/logout", logout)







module.exports = dashboard