import Cart from "./Pages/Cart/Cart";
import HomePage from "./Pages/HomePage/HomePage"
import Login from "./Pages/Login/Login"
import SignUp from "./Pages/Login/SignUp";
import Favourites from './Pages/Favourites/Favourites';
import Navbar from "./Pages/Navbar/Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Router, Routes, Route, useLocation} from 'react-router-dom';
import Men from "./Pages/Navbar/Men";



function App() {
  
  const Location = useLocation()

  


  return (
    <>
    {Location.pathname !== '/login' && Location.pathname !== '/SignUp' && <Navbar/>}
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/Favourites" element={<Favourites/>}/>
        <Route path="/Men" element={<Men/>}/>
      </Routes>


      


    

    
    </>
  )
}

export default App
