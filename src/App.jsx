import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home'
import Details from './component/Details/Details'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={ <Home /> } ></Route>
   <Route path='/movie/:id' element={ <Details /> } ></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
