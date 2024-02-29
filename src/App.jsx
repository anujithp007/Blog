import React from 'react'
import Login from './Login/Login'
import Register from './Reg/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import PageCreation from './pages/PageCreation';
import Adminhome from './adminpage/Adminhome';
import AdminNav from './adminpage/AdminNav';
import AdminCategory from './adminpage/AdminCategory';
import { NavBar } from './Nav/NavBar';



const App = () => {
  return (
    <div>
     
  <React.StrictMode>
  <BrowserRouter>
<Routes>
 <Route path='/' element={<Login/>}></Route>
 <Route path='/register' element={<Register/>}></Route>
 <Route path='/' element={<NavBar/>}>
  <Route path='/home' element={<Home/>}></Route>

  <Route path='/blogcreate' element={<PageCreation/>}></Route>
 </Route>
 <Route path='/admin' element={<AdminNav/>}>
  <Route path='adminhome' element={<Adminhome/>}></Route>
  <Route path='admincategory' element={<AdminCategory/>}></Route>
 </Route>
  
</Routes>

  </BrowserRouter>
</React.StrictMode>

   
    </div>
  )
}

export default App

