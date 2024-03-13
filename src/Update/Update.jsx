import React, { useEffect, useState } from 'react'
import Logo from '../Componets/Logo';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import FileBase64 from 'react-filebase64';

const Update = () => {
    const [formdata,setFormdata]=useState('')
    const [img,setImg]=useState('')
    const{id}=useParams()
    console.log(id,'up:id');
    let token=localStorage.getItem('token')
   const navigate=useNavigate()
   useEffect(()=>{
    let fetchData=async ()=>{
        const response = await axios.get(`http://localhost:5000/singleblog/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setFormdata(response.data)
    }
    fetchData()
   },[id])
   const handleChange=(e)=>{
  
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
      
   }
   const handleSubmit= async (e)=>{
    e.preventDefault()
    try {
        await axios.put(`http://localhost:5000/updateblogs/${id}`, {
            ...formdata,
            image: img
          }, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          
        toast.success('updated successfully')
        navigate(`/detailblog/${id}`)
        
      } catch (error) {
        console.error(error.message);
        // Handle error
      }
   }
   console.log(formdata,'fd');


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
    <div className=' w-[100%] '>
    
 <div className='m-auto w-fit'>
  <Logo/>
  </div> 
    <div id='section2' class="p-8 mt-6 lg:mt-0 rounded shadow bg1">


        

<form onSubmit={handleSubmit} >

<div class="md:flex mb-6">
    <div class="md:w-1/3">
        <label class="block text-gray-600 font-bold  md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
           Title
        </label>
    </div>
    <div class="md:w-2/3">
        <input onChange={handleChange} class="form-input  block w-full bg-[#ffffff85]  focus:bg-white" name='title' id="my-textfield" placeholder={formdata.title} type="text" />
       
    </div>
</div>

<div class="md:flex mb-6">
    <div class="md:w-1/3">
        
    </div>
  
</div>
{/* <div className='md:flex mb-6'>
    <div className='md:w-1/3'>
    <label for="countries" name='category'  class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4">Select your category</label>
    
    
    </div>
    <div className='md:w-2/3 '>
    <select   name='category' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#ffffff85]">
    <option value="" disabled>select</option> 
    
    
    
    </select>
    </div>
</div> */}

<div class="md:flex mb-6">
    <div class="md:w-1/3">
        <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
            Content
        </label>
    </div>
    <div class="md:w-2/3">
        <textarea onChange={handleChange}  class="form-textarea  block w-full bg-[#ffffff85] focus:bg-white " name='content' id="my-textarea" placeholder={formdata.content}  rows="8"></textarea>
       
    </div>
    
</div> <br />
<div className='flex justify-around'>

<FileBase64
    multiple={ false }  
onDone={ (res)=>{setImg(res.base64);} } /> 

    
     <img className='w-64' src={img} alt="" />
    
     <br />
    </div>

<div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
        <input type='submit' value='update' class="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            
        </input>
    </div>
</div> 
</form>

</div>



</div>
</>
  )
}

export default Update