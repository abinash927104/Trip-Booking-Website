import Booking from "../models/Booking.js"

export const createBooking = async(req,res)=>{
    const newBooking =new Booking(req.body);
    try{
        const savedBooking=await newBooking.save();

        res.status(200).json({success:true,message:"your tour is booked successfully", data:savedBooking})

    }catch(err){
        res.status(500).json({success:fale,message:"internal server error"})

        
    }
}
// get single booking

export const getBooking =async(req,res)=>{
    const id=req.params.id;
    try{
        const mybooking= await Booking.findById(id);

        res.status(200).json({success:true,message:"got your booking", data:mybooking})

    }catch{
        res.status(404).json({success:false,message:"booking not found"})

    }
}

// get all booking

export const getAllBooking =async(req,res)=>{

    try{
        const bookings= await Booking.find()

        res.status(200).json({success:true,message:"got your booking", data:bookings})

    }catch{
        res.status(500).json({success:fale,message:"server error"})

    }
}