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
import Myblogs from './pages/Myblogs';
import DetailPage from './Detailpage/DetailPage';
import Allblogs from './pages/Allblogs';
import Authors from "./pages/Authors";
import Profile from './pages/Profile';
import Update from './Update/Update';
import UpdateProfile from './Update/UpdateProfile';
import AdminDetail from './adminpage/AdminDetail';
import Adminauthors from './adminpage/Adminauthors';




const App = () => {
  return (
    <div>
     
  <React.StrictMode>
  <BrowserRouter>
<Routes>
 <Route path='/' element={<Login/>}></Route>
 <Route path='/register' element={<Register/>}></Route>
 <Route path='/' element={<NavBar/>}>
  <Route path='/allblogs' element={<Allblogs/>}></Route>
  <Route path='/home' element={<Home/>}></Route>

  <Route path='/blogcreate' element={<PageCreation/>}></Route>
  <Route path='/myblogs' element={<Myblogs/>}></Route>
  <Route path='/detailblog/:id' element={<DetailPage/>}></Route>
  <Route path='/authors' element={<Authors/>}></Route>
  <Route path='/profile' element={<Profile/>}></Route>
  <Route path='/updateprofiles' element={<UpdateProfile/>}></Route>
  
 </Route>
  <Route path='/update/:id' element={<Update/>}></Route>
 <Route path='/admin' element={<AdminNav/>}>
  <Route path='adminhome' element={<Adminhome/>}></Route>
  <Route path='admincategory' element={<AdminCategory/>}></Route>
  <Route path='admindetail/:id' element={<AdminDetail/>}></Route>
  <Route path='adminauthors' element={<Adminauthors/>}></Route>
 </Route>
  
</Routes>

  </BrowserRouter>
</React.StrictMode>

   
    </div>
  )
}

export default App

