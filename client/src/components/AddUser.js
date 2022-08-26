import {FormGroup,FormControl,Button, TextField,Box} from "@mui/material"
import { useState } from "react";
import {addUser} from "../service/api";


/*const obj = {
    firstname :'',
    lastname :'',
    mobilenumber :'',
    age:''
}*/


function AddUser(){

 const [user,setUser] = useState([])
 const onValueChange= (e)=>{
     setUser({...user,[e.target.name]:e.target.value})
 }

 const AddUserDetails = async()=>{
    //e.preventdefault(); 
    await addUser(user);
 }


 return (
   <Box sx={{margin:'30px',width:350,alignContent:"center"}}>
     <h1>Add User</h1>
     <FormGroup>
       <FormControl>
         <TextField 
         required label="First Name" 
         margin="normal" onChange={(e)=> onValueChange(e)}
          name = "firstname" 
          //error ={/^[A-Za-z]*$/.test(user.firstname) }
          //helperText ={"only Alphabets Allowed"}
          />
       </FormControl>
       <FormControl>
         <TextField required label="Last Name" margin="normal" onChange={(e)=> onValueChange(e)}  name= "lastname"/>
       </FormControl>
       <FormControl>
         <TextField required label="Mobile Number" margin="normal" onChange={(e)=> onValueChange(e)} name = "mobilenumber"/>
       </FormControl>
       <FormControl>
         <TextField required label="Age" margin="normal" onChange={(e)=> onValueChange(e)} name = "age"/>
       </FormControl> 
       <FormControl>
       <Button variant="contained" onClick={AddUserDetails}>Add User</Button>
       </FormControl> 
     </FormGroup>
   </Box>
 );
}

export default AddUser;