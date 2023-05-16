import React from 'react';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Contactus from './Pages/Contactus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Pagenodefound from './Pagenodefound';

function App() {
  return (
    <>

    <BrowserRouter>

    <Navbar></Navbar>
   

 <Routes>

  <Route path="/"  element={<Home/>}    />
  <Route path="/about"  element={<About/>}    />
  <Route path="/contact"  element={<Contactus/>}    />
  <Route path="/*"  element={<Pagenodefound/>}    />

 </Routes>
  
   
    
    </BrowserRouter>

    </>
  );
}

export default App;
