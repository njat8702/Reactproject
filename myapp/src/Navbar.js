import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home';
import Register from './Register';
import Contact from './Contact';

function Navbar() {
  const myStyle={
    marginLeft:"30px",
    color:"blue",
    fontSize:"20pt"
  }
  return (
    <BrowserRouter>
      <nav>
        <Link to="/" style={myStyle}>Home</Link>
        <Link to="/register" style={myStyle}>Register</Link>
        <Link to="/contact" style={myStyle}>Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default Navbar
