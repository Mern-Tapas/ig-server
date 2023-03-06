const mongoose = require("mongoose")

const registrationSchema = new mongoose.Schema(
    {
        name: String,
        contact: Number,
        email: String,
        password: String,
        cpassword: String,
        type: String,

    }
)

const usermodel = mongoose.model("user", registrationSchema)

module.exports = usermodel