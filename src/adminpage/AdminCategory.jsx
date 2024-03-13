import axios from 'axios'
import React, { useState } from 'react'

const AdminCategory = () => {
    const[data,setData]=useState(' ')
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        

    }
    const handleSubmit= async(e)=>{
        e.preventDefault()
        try{
            setData(data)
            console.log(data);
            let response= await axios.post('http://localhost:5000/addcategory',data)
            console.log(response,'res');
        }
        catch{

        }
        console.log(data);
      
    }
  return (
    <div>
      <form onSubmit={handleSubmit} class="max-w-sm mx-auto mt-32">
  <div class="mb-5">
    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter the Category</label>
    <input onChange={handleChange} type="text" name='category' id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter the category " required />
  </div>
 
 
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
    </div>
  )
}

export default AdminCategory
