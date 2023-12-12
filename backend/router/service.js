const express = require("express");
const router = express.Router()
const {createService,getService,getServiceById} = require("../controller/service")


router.get("/service",(req,res)=>{
    res.send({msg:"service router"})
})

router.post("/",createService)
router.get("/",getService)
router.get("/:id",getServiceById)




module.exports = router