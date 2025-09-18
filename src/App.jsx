import Cart from "./Pages/Cart/Cart";
import HomePage from "./Pages/HomePage/HomePage"
import Login from "./Pages/Login/Login"
import SignUp from "./Pages/Login/SignUp";
import Favourites from './Favourites/Favourites';
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
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/Favourites" element={<Favourites/>}/>
      </Routes>


      


    

    
    </>
  )
}

export default App
