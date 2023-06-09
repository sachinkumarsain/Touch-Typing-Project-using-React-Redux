import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
function First() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/header' element={<Header/>}></Route>
    </Routes>
    </BrowserRouter>

  )
}

export default First