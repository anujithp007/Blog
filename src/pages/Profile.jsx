import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Logo from '../Componets/Logo';

const Profile = () => {
    let id=localStorage.getItem('id')
    let token=localStorage.getItem('token')
    console.log(id,token);
    const[data,setData]=useState([''])
    const[count,setCount]=useState(0)
    useEffect(()=>{
        let fetchData=async ()=>{
           try{
            const response = await axios.get(`http://localhost:5000/profileview/${id}`, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
              console.log(response);
              setData(response.data.response)
              setCount(response.data.counts)
            
           }
           catch(e){
            console.error(e.message)
           }
        }
        fetchData()
        console.log(data,'tra');
    },[])
  return (
    <>
    <Logo/>
    <div className='font-serif text-6xl text-center text-orange-800 '>Profile</div>
   
    
        

<div class="max-w-sm m-auto mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={`http://localhost:5000/${data.file}`} alt="hh" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{data.firstname}</h5>
        </a>

        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Email: <span>{data.email}</span></h5>
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Dob: <span>{data.dob}</span></h5>
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">NO.of Blogs: <span>{count}</span></h5>


    </div>
</div>

    


    </>
    
  )
}

export default Profile
