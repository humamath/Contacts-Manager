import {FormGroup,FormControl,Button, TextField,Box} from "@mui/material"
import { useState } from "react";
import {fetchUsertoUpdate} from '../service/api'
import { useNavigate} from 'react-router-dom';
import Modals from "./modals";
import Backdrop from "./backdrop";

function UpdateUser(){


  const navigate=useNavigate();

  const [modalopen,setModalopen] = useState(false);
  

  function closeModalHandler(){
    setModalopen(false);
  }


 const [fetch,setfetch] = useState([]);
 const [user,setUser] = useState()
 const onValueChange= (e)=>{
     setUser({...user,[e.target.name]:e.target.value})
 }

 const fetchUser = async()=>{
    //e.preventdefault(); 
    let res = await fetchUsertoUpdate(user);
    /*if(res.data.length() == 0) {
      setModalopen(false);
      //navigate('/fetch'); 
    }*/
    setModalopen(true);
    setfetch(res.data);
 }

    return(
        <Box sx={{margin:'30px',width:350,alignContent:"center"}}>
        <h1>Update User</h1>
        <FormGroup>
          <FormControl>
            <TextField required label="Mobile Number" margin="normal" onChange={(e)=> onValueChange(e)} name = "mobilenumber"/>
          </FormControl>
          <FormControl>
          <Button variant="contained" onClick={fetchUser}>Edit</Button>
          </FormControl> 
        </FormGroup>
        {modalopen && <Modals fetch = {fetch} onConfirm = {closeModalHandler} />}
        {modalopen && <Backdrop onCancel = {closeModalHandler}/>}
      </Box>
       )
   }
   
   export default UpdateUser;