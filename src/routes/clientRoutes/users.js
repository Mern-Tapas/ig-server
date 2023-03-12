const express = require("express")
const users = express.Router()


users.get("", (req, res) => {
    console.log("getuser")
})



module.exports = users