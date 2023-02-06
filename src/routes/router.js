const express = require("express")
const router = express.Router()
const leadmodel = require("../schema/models")


router.get('', (req, res) => {
    res.send("home")
})

router.post("",async(req,res)=>{
    const { service, loantype, vehical, year, currentbank, name, contact } = req.body
    const data = new leadmodel({ service, loantype, vehical, year, currentbank, name, contact })

    try {

        const response = await data.save()
        console.log(response)
        
    } catch (error) {
        
    }

})


module.exports = router