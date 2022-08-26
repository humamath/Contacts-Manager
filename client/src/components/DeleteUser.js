import {FormGroup,FormControl,Button, TextField,Box} from "@mui/material"
import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import {deleteUserCompletely} from '../service/api'


const defaultValue={
  mobilenumber:''
}

const DeleteUser = ()=>{

   //const out = false;
   const navigate=useNavigate();
  
    const [user,setUser] = useState(defaultValue)
    const onValueChange= (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
   
    const deleteUser = async()=>{
       //e.preventdefault(); 
       let res = await deleteUserCompletely(user);
       if(res.data.message==="deleted successfully") navigate('/fetch'); 
      // else return <p>User Donot exist</p>
    }
   
       return(
           <Box sx={{margin:'30px',width:350,alignContent:"center"}}>
           <h1>Delete User</h1>
           <FormGroup>
             <FormControl>
               <TextField required label="Mobile Number" margin="normal" onChange={(e)=> onValueChange(e)} name = "mobilenumber"/>
             </FormControl>
             <FormControl>
             <Button variant="contained" onClick={deleteUser}>Delete</Button>
             </FormControl> 
           </FormGroup>
            
         </Box>
        )   
}
   
   export default DeleteUser;