import React, { useState } from 'react'
import Logo from '../Componets/Logo'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const [signup,setSignup]=useState({})
  const navigate=useNavigate()
  
 const handleChange=(e)=>{
 
  if (e.target.name === 'file') {
    // For file input, store the file object
    setSignup({ ...signup, file: e.target.files[0] });
  } else {
    // For text inputs, update the state with the new value
    setSignup({ ...signup, [e.target.name]: e.target.value });
  }
}

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create FormData object
    const formData = new FormData();
  
    // Append form data
    formData.append('firstname', signup.firstname);
    formData.append('email', signup.email);
    formData.append('password', signup.password);
    formData.append('dob', signup.dob);
    formData.append('file', signup.file);
  
    try {
      // Make a POST request using axios with FormData
      const response = await axios.post('http://localhost:5000/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log(response);
      alert('Registration success');
      navigate('/');
    } catch (error) {
      console.error('Error registering: ', error);
      alert('An error occurred');
    }}



  return (
    <>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
<ToastContainer/>
    <div className='main-div1 h-[130vh]'>
  <Logo/>
<form onSubmit={(e)=>handleSubmit(e)} class="max-w-sm mx-auto   bg-[#22857bb4] ">
  <div className='p-12 '>
    <h1 className='text-center text-white text-[3rem] mb-2 font-serif'>Register</h1>
    <div class="mb-5">
    <label for="firstname" class="block mb-2 text-sm font-medium text-white">First Name</label>
    <input onChange={(e)=>handleChange(e)} type="text" name='firstname' id="firstname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>

  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
    <input onChange={(e)=>handleChange(e)} type="email" name='email' id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your email @.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-white ">Your password</label>
    <input onChange={(e)=>handleChange(e)} type="password" name='password' id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-5">
    <label for="dob" class="block mb-2 text-sm font-medium text-white">Date Of Birth</label>
    <input onChange={(e)=>handleChange(e)} type="date" name='dob' id="dob" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your email @.com" required />
  </div>
  <div class="mb-5">
    <label for="file" class="block mb-2 text-sm font-medium text-white">Avathar</label>
    <input onChange={(e)=>handleChange(e)} type="file" name='file' id="dob" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your email @.com" required />
  </div>
  
  <div class="flex items-start mb-5">
   
    
  </div>
    <p className='text-white text-[15px] text-center mb-4'>Already Have A Account ? <Link to={'/'}> <span className='font-bold text-cyan-200 cursor-pointer'>Login</span></Link></p>
  <button type="submit" class="text-[#2D2D2D] ml-[] bg-cyan-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  ">Submit</button>
  </div>
</form>
</div></>
  )
}

export default Register
