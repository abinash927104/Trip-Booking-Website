import Tour from '../models/Tour.js'


//create a new tour

export const createTour =async(req,res) =>{
    const newTour= new Tour(req.body);

    try{

        const savedTour= await newTour.save();

        res.status(200).json({
            success:true,message:"Succesfully created",data:savedTour
        })

    }catch(err){
        res.status(200).json({
            success:false,message:"failed to book . Try agin"
        })
    }
}

//to update a tour

export const updateTour= async(req,res)=>{
    const id=req.params.id

    try{
        const updatedTour =await Tour.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true})

        res.status(200).json({
            success:true,message:"Succesfully updated",data:updatedTour
        })

    }catch(err){
        res.status(200).json({
            success:false,message:"failed to update . Try agin"
        })
        
    }
}
//to delete a tour

export const deleteTour= async(req,res)=>{
    const id=req.params.id

    try{
        await Tour.findByIdAndDelete(id);
      

        res.status(200).json({
            success:true,message:"Succesfully deleted"
        })

    }catch(err){
        res.status(200).json({
            success:false,message:"failed to delete . Try agin"
        })
        
    }
}
//to get single  tour

export const getSingleTour= async(req,res)=>{
    const id=req.params.id

    try{
        const tour=await Tour.findById(id).populate('reviews')
      

        res.status(200).json({
            success:true,message:"Succesfull",data:tour
        })

    }catch(err){
        res.status(404).json({
            success:false,message:"tour not found"
        })
        
    }
}
//to get  All tour

export const getAllTour= async(req,res)=>{

    // for pagination

    const page=parseInt(req.query.page)

   
    try{
        const tours=await Tour.find({}).populate('reviews')
        .skip(page * 8).limit(8);
      
      

        res.status(200).json({
            success:true,count:tours.length,message:"Succesfull",data:tours
        })

    }catch(err){
        res.status(404).json({
            success:false,message:"tour not found"
        })
        
    }
}

export const getTourBySearch =async(req,res) =>{

    const city= new RegExp(req.query.city,'i');
    const distance=parseInt(req.query.distance);
    const maxGroupSize=parseInt(req.query.maxGroupSize);

    try{
        const tours=await Tour.find({city,distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize}}).populate('reviews')

        res.status(200).json({
            success:true,message:"Succesfull",data:tours
        })


    }catch(err){
        res.status(404).json({
            success:false,message:"tour not found"
        })

    }
}

export const getFeaturedTour =async(req,res) =>{

  
    try{
        const tours=await Tour.find({featured:true}).populate('reviews').limit(8);

        res.status(200).json({
            success:true,message:"Succesfull",data:tours
        })


    }catch(err){
        res.status(404).json({
            success:false,message:"tour not found"
        })

    }
}

export const getTourCount=async(req,res) =>{

  
    try{
        const tourCount=await Tour.estimatedDocumentCount()

        res.status(200).json({
            success:true,message:"Succesfull",data:tourCount
        })


    }catch(err){
        res.status(500).json({
            success:false,message:"failed to fetch"
        })

    }
}