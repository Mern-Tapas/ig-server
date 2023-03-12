const jwt = require("jsonwebtoken")
const usermodel = require('../../schema/registration')

const clientauth = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"]
        const id = jwt.verify(token, "thesecratekeyforjwt")
        const user = await usermodel.findById(id)
        // console.log(user)
        const verifytoken = user.tokens.filter((tokendata) => {

            return tokendata.token == token
        })

        if (verifytoken[0] === undefined) {
            res.json({ validation: false })
            console.log("user is already logout")
        } else {
            req.user = user
            next()
        }

    } catch (error) {
        console.log(`auto route function error = ${error}`)
        res.json({ validation: false })
    }
}

module.exports = clientauth