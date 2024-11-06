import { useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path ="/" element = {<HomePage/>} />
            <Route path="/login" element = {<LoginPage/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}



export default App
