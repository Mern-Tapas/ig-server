const mongoose = require("mongoose");

const leadschema = new mongoose.Schema({
    service: String,
    loantype: String,
    vehical: String,
    year: String,
    currentbank: String,
    name: String,
    contact: Number
})

const leadmodel =  mongoose.model("leades",leadschema)

module.exports = leadmodel
