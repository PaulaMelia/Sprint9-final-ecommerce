//import { useState } from 'react'
//import './App.css'
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContent from './components/CartContent';
function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/'element={<Home/>}></Route>
     <Route path='/cart' element={<CartContent/>}></Route>
     

    </Routes>
    </BrowserRouter>
  )

}
export default App;
