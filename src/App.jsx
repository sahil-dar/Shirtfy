import Cart from "./Pages/Cart/Cart";
import HomePage from "./Pages/HomePage/HomePage"
import Login from "./Pages/Login/Login"
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Navbar/Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Router, Routes, Route, useLocation} from 'react-router-dom';



function App() {
  
  const Location = useLocation()
  console.log(Location.pathname);

  


  return (
    <>
      {Location.pathname !== '/login' && Location.pathname !== '/signUp' && <Navbar/>}
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>


      


    

    
    </>
  )
}

export default App
