const express = require("express")
const clientauth = require("./clientauth")
const logout = require("./logout")
const users = require("./users")
const dashboard = express.Router()


dashboard.get('', async (req, res) => {


})




dashboard.use("/logout", logout)

dashboard.use("/users", users)







module.exports = dashboard