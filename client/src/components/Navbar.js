import { AppBar, Toolbar,styled } from "@mui/material";

import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  font-size : 20px;
`
const Tabs = styled(NavLink)`
  font-size : 20px;
  margin-right :20px;
  color:inherit;
  text-decoration:none;
`


function Navbar(){
   return(
    <Header position="static">
      <Toolbar>
          <Tabs to="/">CRUD</Tabs> 
          <Tabs to="/add"> Add Users</Tabs>
          <Tabs to="/fetch">Fetch Users</Tabs>
          <Tabs to ="/update">Update Users</Tabs>
          <Tabs to ="/delete">Delete Users</Tabs>
      </Toolbar>
    </Header>
   );
}

export default Navbar