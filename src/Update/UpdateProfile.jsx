import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Logo from '../Componets/Logo'
import { useNavigate } from 'react-router-dom'

const UpdateProfile = () => {
    const[data,setData]=useState('')
    let id=localStorage.getItem('id')
    let token=localStorage.getItem('token')
    const navigate=useNavigate()
    useEffect(()=>{
        let fetchData= async ()=>{
            const response = await axios.get(`http://localhost:5000/profileview/${id}`, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
              setData(response.data.response)
              
            }
            fetchData()
        },[id,token])
        console.log(data);

        const handleChange=(e)=>{
            setData({ ...data, [e.target.name]: e.target.value });
        }
        const handleSubmit=async(e)=>{
            e.preventDefault()
            try{

                await axios.put(`http://localhost:5000/updateprofiles/${id}`,data, {
                    headers: {
                      Authorization: `Bearer ${token}`
                    }
                  });

                  navigate(`/profile`)
            }
            catch(e){
                    console.error('data not fetched')
            }
        }
  return (
    <div >
    <Logo/>
  <form onSubmit={(e)=>handleSubmit(e)} class="max-w-sm mx-auto   bg-[#22857bb4] ">
    <div className='p-12 '>
      <h1 className='text-center text-white text-[3rem] mb-2 font-serif'>Update profile </h1>
      <div class="mb-5">
      <label for="firstname" class="block mb-2 text-sm font-medium text-white">First name</label>
      <input onChange={(e)=>handleChange(e)} type="text" name='firstname' id="firstname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={data.firstname}  />
    </div>
  
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-white">Email</label>
      <input onChange={(e)=>handleChange(e)} type="email" name='email' id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={data.email}  />
    </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-white ">Password</label>
      <input onChange={(e)=>handleChange(e)} type="password" name='password' id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={data.password}  />
    </div>
    <div class="mb-5">
      <label for="dob" class="block mb-2 text-sm font-medium text-white">Date Of Birth</label>
      <input onChange={(e)=>handleChange(e)} type="date" name='dob' id="dob" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={data.dob}  />
    </div>
    <div class="mb-5">
      <label for="file" class="block mb-2 text-sm font-medium text-white">Avathar</label>
      <input onChange={(e)=>handleChange(e)} type="file" name='file' id="dob" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your email @.com" />
    </div>
    
    <div class="flex items-start mb-5">
     
      
    </div>
     
    <button type="submit" class="text-[#2D2D2D] ml-[] bg-cyan-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  ">Update</button>
    </div>
  </form>
  </div>
  )
}

export default UpdateProfile