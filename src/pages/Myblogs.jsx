import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Myblogs = () => {
  const[data,setData]=useState([''])
  let id=localStorage.getItem('id')
  let token=localStorage.getItem('token')
  useEffect(()=>{
    let fetchData= async()=>{
      let response=await axios.get(`http://localhost:5000/userblogs/${id}`,{headers: {
        Authorization: `Bearer ${token}` }})
        setData(response.data)
      console.log(data);

    }
    fetchData()
  },[])
  return (
    <div>
      {
        data.map((items,index)=>(
            <div className=''>
              
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={items.image} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{items.title}</div>
    
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

            </div>
        ))
      }
    </div>
  )
}

export default Myblogs
