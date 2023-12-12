const Booking = require("../model/booking")


const createBooking = async(req,res) =>{
   try{
    const { bookName,type,serviceId} = req.body;
    if(bookName=="" || type==""|| serviceId=="") {
       res.status(400).send({msg:"Plz fill all the field"})
    }
    const booking = new Booking({
        bookName,
        type,
        serviceId
    })
    await booking.save()
    res.status(200).send({msg:"Created Successfully..."})
   }catch(err){
      res.status(400).send({msg:"Something went wrong"})
   }
}


const getBooking = async(req,res) =>{
    try {
        const booking = await Booking.find()
        if(!booking){
           res.status(400).send({msg:"Not Found"})
        }
        res.status(200).send({booking})
    } catch (error) {
        res.status(400).send({msg:"Something Went Wrong"})
    }
}


const getBookingById = async(req,res) =>{
    try {
        const bookingDetails = await Booking.find({_id:req.params.id})
        if(!bookingDetails){
           res.status(400).send({msg:"Not Found"})
        }
        res.status(200).send({bookingDetails})
    } catch (error) {
        res.status(400).send({msg:"Something Went Wrong"})
    }
}

module.exports = {
    createBooking,
    getBooking,
    getBookingById
}