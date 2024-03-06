import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
    

const DetailPage = () => {
  const [data, setData] = useState({
    image: '',
    author: { email: '' }, // Providing a default value for author.email
    title: '',
    content: '',
    category:{category:''}
});
 const{id}=useParams()
    console.log(id,'hhh'); 
    let token=localStorage.getItem('token')
    useEffect(()=>{
        const fetchData=async ()=>{
            try{

                const response = await axios.get(`http://localhost:5000/singleblog/${id}`, {
                    headers: {
                      Authorization: `Bearer ${token}`
                    }

                  });
                  setData(response.data)
                  console.log(data);
            }
            catch(e){

            }
        }
        fetchData()
    },[id,token])
  return (
  
    <div className='flex-col justify-center flex-wrap'>
      
     <div  className='w-full bg-zinc-700 '>
      <img className='w-full object-fill h-[20rem]' src={data.image} alt="" />
      </div>
      <div className='flex justify-around pt-6'>
        <div className='hover:border-b-4 flex gap-2 '>

      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
  <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg> 
  <h4 className='font-serif text-xl'>{data.author.email}</h4>
        </div>

        <div className='flex gap-3'>
          <p className='font-bold text-xl'>Category : </p>
          <p className='text-xl font-serif'>{data.category.category}</p>
         
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square bg-red-500 text-orange-50" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
      </div>
     <h1 className='text-7xl font-bold font-mono text-center pt-6    '>{data.title}</h1>
     <p className='font-serif p-5'>{data.content}</p>
     </div>
      

  )
}

export default DetailPage
