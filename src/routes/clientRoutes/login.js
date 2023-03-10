const express = require("express")
const usermodel = require("../../schema/registration")
const login = express.Router()




login.get('', (req, res) => {
})

login.post('', async (req, res) => {
    const { email, password } = req.body
    try {

        const user = await usermodel.findOne({ email })
        const token = await user.genToken()
        console.log(token)
        if (user.password == password) {
            res.json({ validation: true , token:token})
        }


    } catch (error) {
        console.log(`login post route error ${error}`)
    }

})

module.exports = login