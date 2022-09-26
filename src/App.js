import React, { useState } from 'react';
import Home from './Components/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Images from './Components/Images';
import Videos from './Components/Videos';


export default function App() {
const [images, setImage] = useState(null)

  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home images={images} setImage={setImage} />}/>
            <Route path="/images" element={<Images images={images}/>} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
        </Router>
    </div>
  )
}
