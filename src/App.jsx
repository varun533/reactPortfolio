import React, { useState } from 'react';
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Foot from './foot';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<Projects/>}></Route>
        <Route path='/proj' element={<Contact/>}></Route>
      </Routes>
      <Foot></Foot>
    </BrowserRouter>
  )
}

export default App
