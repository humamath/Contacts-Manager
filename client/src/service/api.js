import axios from 'axios';

const url = 'http://localhost:8000';


 export const addUser = async (data)=>{

    try{
       return await axios.post(`${url}/add`,data)
    }
    catch(error){
       console.log("Error while calling addUser Api",error)
    }
 }

 export const getUser = async()=>{
  
   try{
      return await axios.get(`${url}/fetch`)
   }catch(error){
      console.log("Error while calling getUser Api",error)

   }
   
 }

 export const fetchUsertoUpdate = async(data)=>{
  
   //console.log(data.mobilenumber)
   try{
      return await axios.get(`${url}/${data.mobilenumber}`)
   }catch(error){
      console.log("Error while calling fetchUsertoUpdate Api",error)

   }
   
 }

 export const UpdateFetehedUser = async (data)=>{

   try{
      return await axios.put(`${url}/update`,data)
   }
   catch(error){
      console.log("Error while calling UpdateUser Api",error)
   }
}
 

 export const deleteUserCompletely = async(data)=>{
  
   //console.log(data);
   try{
      return await axios.delete(`${url}/${data.mobilenumber}`)
   }catch(error){
      console.log("Error while calling deleteUserCompletely Api",error)

   }
   
 }

 