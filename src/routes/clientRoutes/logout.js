const express = require("express")
const logout = express.Router()


logout.get("", async(req, res) => {
    const user  = req.user
    user.tokens = []
    await user.save()
    console.log(user)
    res.json({validation:true})
})



module.exports = logout
    