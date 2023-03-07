const express = require("express")
const signup = express.Router()
const usermodel = require("../../schema/registration")




signup.get('', (req, res) => {
})

signup.post('', async (req, res) => {
    const { name, contact, email, password, cpassword, } = req.body
    try {

        const user = new usermodel({ name, contact, email, password, cpassword, })
        const result = await user.save()
        const token = await user.genToken()
        console.log(token)
        res.cookie("jwt",token)
        res.send({ massage: "login sucessfull", validation: true })

    } catch (error) {
        console.log(`sign up route error ${error}`)
    }
})

module.exports = signup