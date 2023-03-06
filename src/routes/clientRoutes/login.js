const express = require("express")
const login = express.Router()




login.get('', (req, res) => {
})

login.post('', (req, res) => {
    console.log(req.body)
})

module.exports = login