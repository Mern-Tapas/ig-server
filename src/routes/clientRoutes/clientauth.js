const jwt = require("jsonwebtoken")
const usermodel = require('../../schema/registration')

const clientauth = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"]
        const id = jwt.verify(token, "thesecratekeyforjwt")
        console.log(id)

    } catch (error) {
        console.log(`auto route function error = ${error}`)
        res.json({ validation: false })
    }
}

module.exports = clientauth