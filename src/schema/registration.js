const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const registrationSchema = new mongoose.Schema(
    {
        name: String,
        contact: Number,
        email: {unique:true , type:String},
        password: String,
        cpassword: String,
        type: String,
        tokens: [{
            token: { type: String, required: true }
        }]

    }
)


registrationSchema.methods.genToken = async function (next) {

    const token = jwt.sign({ _id: this._id.toString() }, 'thesecratekeyforjwt')

    this.tokens = this.tokens.concat({ token })
    await this.save()

    return token    


}
const usermodel = mongoose.model("user", registrationSchema)

module.exports = usermodel