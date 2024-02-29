import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const[user,setUser]=useState({})

  



  useEffect(()=>{
    const token = localStorage.getItem('token');
    const id=localStorage.getItem('id')
    if (!token) {
      
      console.log('Token missing');
      return;
    }
    let fetchData=async()=>{
      let response=await axios.get(`http://localhost:5000/find/${id}`,{headers: {
        Authorization: `Bearer ${token}` }})
      console.log('response',response);
      setUser(response.data)
      console.log('user:',user);
    }
    fetchData()
    },[]
  )
  return (
    <div>
     
    </div>
  )
}

export default Home
