import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Componets/Logo';


const Myblogs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh,setRefresh]=useState(false)
  const id = localStorage.getItem('id');
  console.log(id,'ggggggg');
  const token = localStorage.getItem('token');
  console.log(token,'ttt');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/userblogs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response.data);
        setData(response.data);
        console.log(data);

       
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [refresh]);
  const handleDelete=(blogId)=>{
    let response =  axios.delete(`http://localhost:5000/deleteblog/${blogId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setRefresh(!refresh)
    console.log(response);
  }
  
  
  return (
    <>
    <Logo/>
    <div className='flex flex-wrap justify-center align-items-center mt-8 gap-5'>
      {loading ? (
        <div role="status">
         <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
             <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
         </svg>
         <span class="sr-only">Loading...</span>
     </div>
      ) : data.length === 0 ? (
        <p>No blogs found.</p>
        ) : (
          data.map((item, index) => (
            <>
          <div  key={index} className=''>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link  to={`/detailblog/${item._id}`}>
              <img className="object-cover w-[19rem] h-[10rem]" src={item.image} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-[2rem] border-b-[6px] border-b-slate-600 mb-2">{item.title}</div>
                <div className="font-bold text-xl mb-2">Category:{item.category.category}</div>
                <div className="flex items-center gap-2 font-bold text-xl mb-2">By: <span className='font-semibold text-[18px]'>{item.author.email}</span>
               </div>

                
              </div>
              {item.tags && item.tags.length > 0 && item.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    #{tag}
  </span>
))}

          </Link>
          <svg onClick={() => handleDelete(item._id)} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-trash3 float-right  " viewBox="0 0 16 16">
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                        </svg>
            </div>
          </div>
                          
                        </>

))
)}
    </div>
</>
  );
};

export default Myblogs;
