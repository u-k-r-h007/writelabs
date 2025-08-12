
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CreateUser from './components/CreateUser'
import Navigation from './components/Navigation'
import ShowUser from './components/ShowUser'
import Home from './components/Home'
import { useState } from 'react'

function App() {

   const [id,setId]=useState()


  return (
    <>

   <BrowserRouter>
   <Navigation />
  <Routes>
    <Route path={'/user'} element={<CreateUser id={id} setId={setId}/>} />
    <Route path={'/show'} element={<ShowUser setId={setId} />} />
    <Route path={'/'} element={<Home />} />
  </Routes>
  </BrowserRouter>
     
    </>
  )
}

export default App
