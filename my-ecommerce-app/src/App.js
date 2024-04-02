import './App.css';
import Homepage from './component/Homepage.js';
import Productpage from './component/ProductPage.js';
import LoginPage  from './component/LoginPage.js';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/ProductPage' element={<Productpage />} />
            <Route path='/LoginPage' element={<LoginPage/>}/>
        </Routes>
    </Router>
  )
}

export default App;
