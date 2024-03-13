import React, { useEffect, useState } from 'react'
import FileBase64 from 'react-filebase64';
import Logo from '../Componets/Logo';
import '../Css/createblog.css'
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify'

const PageCreation = () => {
  const [img,setImg]=useState('')
  const id=localStorage.getItem('id')
  const[cat,setCat]=useState([''])
  const[data,setData]=useState({
    
  })
 
useEffect(()=>{
    const fetchData=async()=>{
        let response= await axios.get('http://localhost:5000/findcategory')
        setCat(response.data)
        console.log(response.data);
        
    }
    fetchData()
},[])

  const handlChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    console.log(data);

  }
  const handleSubmit=async(e)=>{
        e.preventDefault()
        
        try{
        

            let response=await axios.post('http://localhost:5000/addblog',{...data, image:img,author:id})
            console.log(response);
            if(response){
                toast.success('Blog Added')
                setData('')
                // window.location.reload();
                
            }
        
            
        }
        catch(e){
                console.log(e.data.message);
        }

  }


  return (
    <div className=' w-[100%] '>
        <ToastContainer/>
     <div className='m-auto w-fit'>
      <Logo/>
      </div> 
        <div id='section2' class="p-8 mt-6 lg:mt-0 rounded shadow bg1">


            

<form onSubmit={handleSubmit}>

    <div class="md:flex mb-6">
        <div class="md:w-1/3">
            <label class="block text-gray-600 font-bold  md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
               Title
            </label>
        </div>
        <div class="md:w-2/3">
            <input onChange={handlChange} value={data.title ? data.title : ''} class="form-input  block w-full bg-[#ffffff85]  focus:bg-white" name='title' id="my-textfield" placeholder='enter your title' type="text" />
           
        </div>
    </div>

    <div class="md:flex mb-6">
        <div class="md:w-1/3">
            
        </div>
      
    </div>
    <div className='md:flex mb-6'>
        <div className='md:w-1/3'>
        <label for="countries" name='category'  class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4">Select your category</label>
  

        </div>
        <div className='md:w-2/3 '>
        <select onClick={handlChange} value={data.content?data.content:''}  name='category' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#ffffff85]">
<option value="" disabled>select</option>
        {cat.map((item)=>(
                      <option value={item._id}>{item.category}</option>
            ))}  
  
   
  </select>
        </div>
    </div>

    <div class="md:flex mb-6">
        <div class="md:w-1/3">
            <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                Content
            </label>
        </div>
        <div class="md:w-2/3">
            <textarea onChange={handlChange} class="form-textarea  block w-full bg-[#ffffff85] focus:bg-white " name='content' id="my-textarea" placeholder='blog content'  rows="8"></textarea>
           
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
            <input type='submit' value='post' class="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                
            </input>
        </div>
    </div> 
</form>

</div>



    </div>
  )
}

export default PageCreation
