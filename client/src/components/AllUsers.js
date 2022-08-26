//import {Card , Box} from '@mui/material'
import {
   Card,
   Row,
   Col,
   CardBody,
   CardHeader
 } from "reactstrap";
import { useEffect , useState} from 'react';
import {getUser} from '../service/api'

function AllUsers(){

   const [users,setUsers] = useState([]);

   useEffect(()=>{
      getAllUsers();
   },[])


   const getAllUsers = async ()=>{
      let response = await getUser();
      setUsers(response.data);
   }

   //console.log(users)


   return(
      <div>
      <h1>Fetch Users</h1>
      <Row>
      {users.map((data) => {
        return (
          <Col  key={data._id} xl="3" lg="3" md="4" sm="4" xs="6">
            <Card style = {{margin:'20px',backgroundColor:'#0589f5'}}>
            <CardHeader>{data.firstname}</CardHeader>
              <CardBody>
               {/* <p style = {{color:'shadow'}}>First Name: {data.firstname}</p>*/}
                <p style = {{color:'shadow'}}>Last Name : {data.lastname}</p>
                <p style = {{color:'shadow'}}>Age: {data.age }</p>
                <p style = {{color:'shadow'}}>Mobile Number :{data.mobilenumber}</p>
              </CardBody>
            </Card>
          </Col>
        );
      })}
    </Row>
    </div>
      
   );
}

export default AllUsers;