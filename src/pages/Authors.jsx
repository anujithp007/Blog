import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
    <div>
      {data.map((item)=>(
        <>

      {/* <img src={`http://localhost:5000/${item.file}`} alt="asdda" /> */}
        </>
      ))}
    </div>
  )
}

export default Authors
