import React, { useState } from 'react'
import './login.css'
import Logo from '../Componets/Logo'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {

  const [login,setLogin]=useState('')
 const navigate=useNavigate()
  const handleChange=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value})

  }
  const handleSubmit=async(e)=>{
    
    e.preventDefault()
    try{

      setLogin(login)
      console.log(login);
      let response=await axios.post('http://localhost:5000/login',login)
      console.log(response.data,'ddd');
      const token=response.data.token
      console.log(token);
      localStorage.setItem('token',token)
      localStorage.setItem('id',response.data.user._id)
     
      if(response.data){
        if(response.data.user.usertype =='admin')
        navigate('/admin/adminhome')
      else{

        navigate('/allblogs')
      }
      }
    }
    catch(e){
      console.error(e)
    }
      
  }


  return (

    <div className='main-div1 h-screen'>
      <Logo />
      <form onSubmit={(e)=>handleSubmit(e)} class="max-w-sm mx-auto   bg-[#22857bb4] ">
        <div className='p-12 '>
          <h1 className='text-center text-white text-[3rem] mb-2 font-serif'>Login</h1>
          <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
            <input onChange={(e)=>handleChange(e)} name='email' type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your email @.com" required />
          </div>
          <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-white ">Your password</label>
            <input onChange={(e)=>handleChange(e)} name='password' type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
         
          <p className='text-white text-[15px] text-center mb-4'>New Member? Just <Link to={'/register'}><span className='font-bold text-cyan-200 cursor-pointer'>Sign-Up</span></Link></p>
          <button type="submit" class="text-[#2D2D2D] ml-[] bg-cyan-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  ">Submit</button>
        </div>
      </form>
    </div>

  )
}

export default Login
