import {FormGroup,FormControl,Button, TextField,Box} from "@mui/material"
import { useState } from "react";
import {UpdateFetehedUser} from '../service/api'

function Modals(props){

  /*const defaultValue={
    firstname:'',
    lastname:'',
    mobilenumber:'',
    age:'' 
 }*/
  
    const [user,setUser] = useState(props.fetch)
    //setUser(props.fetch)
    const onValueChange= (e)=>{
     setUser({...user,[e.target.name]:e.target.value})
   }
    
    const confirmHandler = async() => {
      props.onConfirm();
     await UpdateFetehedUser(user);

    }

   

    return(
        
        <div className="modal">
        <Box sx={{margin:'30px',width:350,alignContent:"center"}}>
        <h1>Update User</h1>
        <FormGroup>
          <FormControl>
            <TextField 
            required label="First Name" 
            defaultValue={props.fetch.firstname}
            margin="normal" onChange={(e)=> onValueChange(e)}
             name = "firstname" 
             //error ={/^[A-Za-z]*$/.test(user.firstname) }
             //helperText ={"only Alphabets Allowed"}
             />
          </FormControl>
          <FormControl>
            <TextField required label="Last Name" margin="normal" defaultValue={props.fetch.lastname} onChange={(e)=> onValueChange(e)}  name= "lastname"/>
          </FormControl>
          <FormControl>
            <TextField required label="Mobile Number" margin="normal" disabled value={props.fetch.mobilenumber}  name = "mobilenumber"/>
          </FormControl>
          <FormControl>
            <TextField required label="Age" margin="normal" defaultValue={props.fetch.age} onChange={(e)=> onValueChange(e)} name = "age"/>
          </FormControl> 
          <FormControl>
          <Button variant="contained" onClick={confirmHandler}>Update User</Button>
          </FormControl> 
        </FormGroup>
      </Box>
      </div>
    );
}

export default Modals;