import Cart from "./Pages/Cart/Cart";
import HomePage from "./Pages/HomePage/HomePage"
import Login from "./Pages/Login/Login"
import SignUp from "./Pages/Login/SignUp";
import Favourites from './Pages/Favourites/Favourites';
import Navbar from "./Pages/Navbar/Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Router, Routes, Route, useLocation} from 'react-router-dom';
import Men from "./Pages/Navbar/Men";
import Woman from "./Pages/Navbar/Woman";
import Sneakers from "./Pages/Navbar/Sneakers";
import Products from "./Pages/Products/Product";
import Otp from "./Pages/Otp/Otp";



function App() {
  
  const Location = useLocation()

  


  return (
    <>
    {Location.pathname !== '/login' && Location.pathname !== '/signUp' && Location.pathname !== '/Otp' && <Navbar/>}
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Otp" element={<Otp/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/Favourites" element={<Favourites/>}/>
        <Route path="/Men" element={<Men/>}/>
        <Route path="/Woman" element={<Woman/>}/>
        <Route path="/Sneakers" element={<Sneakers/>}/>
        <Route path="/Product/:id" element={<Products/>}/>

      </Routes>


      


    

    
    </>
  )
}

export default App
