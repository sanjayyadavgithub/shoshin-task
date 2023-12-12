const Service = require("../model/service")
const createService = async(req,res) =>{
    
   try{
    const {name,type} = req.body;
    if(name=="" || type ==""){
        res.status(400).send({msg:"plz fill all the fields"})
        return ;
    }
    const service = new Service({
        name,
        type
    })
    await service.save();
    res.status(200).send({msg:"Created Successfully"})

   }catch(err){
      res.status(400).send({msg:"Something went wrong", error:err})
   }
}

const getService = async(req,res) =>{
    try{
       const service = await Service.find({})
       if(!service){
        res.status.send({msg:"service not found"})
       }
       res.status(200).send({service})
    }catch(err){
    res.status(400).send({msg:"something went wrong...."})
    }
}

const getServiceById = async(req,res)=>{
    try{
        const {id} = req.params;
        const serviceDetails = await Service.find({_id:id})
        if(!serviceDetails){
            res.status(400).send({msg:"Service Not Found for this id"})
        }
        res.status(200).send({serviceDetails})
    }catch(err){
        res.status(400).send({msg:"something went wrong...."})
    }

}



module.exports = {
    createService,
    getService,
    getServiceById
}