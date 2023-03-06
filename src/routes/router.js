const express = require("express")
const router = express.Router()
const leadmodel = require("../schema/models")
const dashboard = require("./AdminRoutes/dashboard")
const login = require("./clientRoutes/login")
const signup = require("./clientRoutes/singup")


router.get('', (req, res) => {
    res.send("home")
})

router.post("", async (req, res) => {
    const { service, loantype, vehical, year, currentbank, name, contact } = req.body
    const data = new leadmodel({ service, loantype, vehical, year, currentbank, name, contact })

    try {

        const response = await data.save()
        console.log(response)

    } catch (error) {

    }

})


router.use("/dashboard", dashboard)
router.use("/login", login)
router.use("/signup", signup)


module.exports = router