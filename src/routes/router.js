const express = require("express")
const router = express.Router()
const dashboard = require("./clientRoutes/dashboard")
const clientauth = require("./clientRoutes/clientauth")
const login = require("./clientRoutes/login")
const signup = require("./clientRoutes/signup")


router.get('', (req, res) => {
    res.send("home")
})

router.post("", async (req, res) => {


})


router.use("/dashboard", clientauth, dashboard)
router.use("/login", login)
router.use("/signup", signup)


module.exports = router