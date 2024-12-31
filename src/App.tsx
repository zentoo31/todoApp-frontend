import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'
import { Toaster } from 'react-hot-toast'
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Navigate to={"/home"}/>}></Route>
          <Route path="/home" element={<Home />} />
          <Route path='/login' element ={<Login/>}/>
          <Route path='/register' element = {<Register/>}/>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
