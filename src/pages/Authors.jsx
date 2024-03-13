import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Logo from '../Componets/Logo';

const Authors = () => {
  const id=localStorage.getItem('id')
  console.log(id);
  const[data,setData]=useState([])

  useEffect(()=>{
    const fetchData= async ()=>{
      let response=await axios.get(`http://localhost:5000/findauthors`)
      console.log('sadas');
      console.log(response,'ress');
      setData(response.data)
    }
    fetchData()
  },[])

  console.log(data);
  return (
    <div className='bg22'>
      <Logo/>
      <div className='flex items-center justify-center flex-wrap gap-2'>

      
      
      {data.map((item)=>(
        <>
        

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
      
      
  
    </div>
    
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={ `http://localhost:5000/${item.file}` }/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.firstname}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{item.email}</span>
        <div class="flex mt-4 md:mt-6">
           
        </div>
    </div>
</div>

        </>
      ))}
      </div>
    </div>
  )
}

export default Authors
