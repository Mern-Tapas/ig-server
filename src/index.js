const express = require("express")
const app = express()
const router = require("./routes/router")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("./database/db")


//udpate
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/',express.static("public"))

app.use("", router)



app.listen("4000", () => { console.log("server is running in 4000") })