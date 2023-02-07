const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://freejobalert:yamahavb5850@cluster0.huzbtzz.mongodb.net/?retryWrites=true&w=majority").then(() => { console.log("connected") }).catch((error) => { console.log(error) })