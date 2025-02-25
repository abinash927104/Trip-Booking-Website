import User from '../models/User.js'


//create a new User 

export const createUser  =async(req,res) =>{
    const newUser= new User(req.body);

    try{

        const savedUser= await newUser.save();

        res.status(200).json({
            success:true,message:"Succesfully created",data:savedUser
        })

    }catch(err){
        res.status(200).json({
            success:false,message:"failed to save . Try agin"
        })
    }
}

//to update a tour

export const updateUser= async(req,res)=>{
    const id=req.params.id

    try{
        const updatedUser =await User.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true})

        res.status(200).json({
            success:true,message:"Succesfully updated",data:updatedUser
        })

    }catch(err){
        res.status(200).json({
            success:false,message:"failed to update . Try agin"
        })
        
    }
}
//to delete a tour

export const deleteUser= async(req,res)=>{
    const id=req.params.id

    try{
        await User.findByIdAndDelete(id);
      

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

export const getSingleUser= async(req,res)=>{
    const id=req.params.id

    try{
        const user=await User.findById(id)
      

        res.status(200).json({
            success:true,message:"Succesfull",data:user
        })

    }catch(err){
        res.status(404).json({
            success:false,message:"user not found"
        })
        
    }
}
//to get  All tour

export const getAllUser= async(req,res)=>{

  
    try{
        const users=await User.find({})
      
      

        res.status(200).json({
            success:true,message:"Succesfull",data:users
        })

    }catch(err){
        res.status(404).json({
            success:false,message:"user not found"
        })
        
    }
}