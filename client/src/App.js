//Routing
import {BrowserRouter ,Routes, Route} from 'react-router-dom'

//Components
import AddUser from './components/AddUser'
import Navbar from './components/Navbar';
import UpdateUser from './components/UpdateUser'
import DeleteUser from './components/DeleteUser'
import AllUsers from "./components/AllUsers"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
        {/*<Route path = '/' element = {<p>HOME</p>}/>*/}
        <Route path ='/add' element={<AddUser/>}/>
        <Route path='/fetch' element={<AllUsers/>}/>
        <Route path = '/update' element ={<UpdateUser/>}/>
        <Route path = '/delete' element={<DeleteUser/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
