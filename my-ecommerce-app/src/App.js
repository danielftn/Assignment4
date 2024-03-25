import './App.css';
import Homepage from './component/Homepage.js';
import productpage from './component/productpage.js';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Homepage />} />
        </Routes>
    </Router>
  )
}

export default App;
