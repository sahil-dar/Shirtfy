import HomePage from "./Pages/HomePage/HomePage"
import Login from "./Pages/Login/Login"
import Navbar from "./Pages/Navbar/Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Router, Routes, Route, useLocation} from 'react-router-dom';



function App() {
  
  const Location = useLocation()
  console.log(location.pathname);

  


  return (
    <>
      {Location.pathname !== "/login" && <Navbar/>}
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Homepage" element={<HomePage/>}/>
      </Routes>


      


    

    
    </>
  )
}

export default App
