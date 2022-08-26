import { Users } from "../db/mongoose.js";

export const addUser = async (req,res)=>{
   const user = req.body;
   
   const newUser = new Users(user);

   try{
     await newUser.save(); 
     res.status(201).json(newUser)
   }catch(error){
      res.status(409).json({message:error.message})
      //console.log("Error ")
   }

   //console.log(user)
}

export const getUser = async (req,res)=>{
   

   try{
     const users = await Users.find({});
     res.status(200).json(users);

   }catch(error){
      res.status(404).json({message:error.message})
      //console.log("Error ")
   }

}


export const fetchUsertoUpdate = async (req,res)=>{
   
  // console.log(req.params);

   try{
     const users = await Users.findOne({mobilenumber:req.params.mobilenumber});
     res.status(200).json(users);

   }catch(error){
      res.status(404).json({message:error.message})
      //console.log("Error ")
   }

}


export const UpdateFetehedUser = async (req,res)=>{
   
   const user = req.body;
   const updatedUser = new Users(user);

  try {
      await Users.updateOne({mobilenumber:user.mobilenumber},updatedUser);
      res.status(200).json(updatedUser);
   }catch(error){
      res.status(404).json({message:error.message})
      //console.log("Error ")
   }

}




export const deleteUser = async (req,res)=>{
   
   //console.log(req.params);
  // res.send("Deleted Successfully")

   try {
      await Users.deleteOne({mobilenumber:req.params.mobilenumber });
      res.status(200).json({message:'deleted successfully'});

   } catch (error) {
      res.status(409).json({message: error.message});
   }
}