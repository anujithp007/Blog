import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Logo from '../Componets/Logo';
import { Link } from 'react-router-dom';

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
    const date = new Date(data.dob);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are zero-indexed, so we add 1
    const year = date.getUTCFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;
  return (
    <div className='bg22'>
    <Logo/>
    <div className='font-serif text-6xl text-center text-orange-800 '>Profile</div>
   
    
        

<div class="max-w-sm m-auto mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={`http://localhost:5000/${data.file}`} alt="hh" />
    </a>
    <div class=" p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{data.firstname}</h5>
        </a>
      

        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Email: <span>{data.email}</span></h5>
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Dob: <span>{formattedDate}</span></h5>
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">NO.of Blogs: <span>{count}</span></h5>
      <Link to={'/updateprofiles'}>
      
     <button  type="" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-24 mt-4 me-2 mb-2">Edit Profile</button>
    </Link> 
      </div>

    </div>


    


    </div>
    
  )
}

export default Profile
