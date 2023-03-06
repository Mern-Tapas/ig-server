const mongoose = require("mongoose")

const registrationSchema = new mongoose.Schema(
    {
        name: String,
        contact: Number,
        email: String,
        password: String,
        cpassword: String,
        type: String,
        toknes: [{
            token: { type: String, required: true }
        }]

    }
)


registrationSchema.methods.genToken = function (next) {

}
const usermodel = mongoose.model("user", registrationSchema)

module.exports = usermodel