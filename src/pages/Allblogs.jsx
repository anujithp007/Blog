import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Logo from '../Componets/Logo'
import { Link } from "react-router-dom";

const Allblogs = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/allblogs");
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error.message);
            }
        };
     
        fetchData();
    }, []);
    
    return (
            <>
            <Logo/>
    

        <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {data.map((item, index) => (
            <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
           <Link to={`/detailblog/${item._id}`}><article  className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img alt="Placeholder" className="block h-auto w-full " src={item.image}/>
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-3xl">
                    <a  className="no-underline font-bold t  hover:underline text-black" href="#">
                      {item.title}
                    </a>
                  </h1>
                </header>
                <footer className="flex-col  items-center justify-between leading-none p-2 md:p-[.5rem]">
                  <a className="flex  items-center no-underline hover:underline text-black" href="#">
                    {/* <img alt="Placeholder" className="block rounded-full" src={l}/> */}
                    <p className="ml-2 font-serif  text-m  flex gap-2 items-center ">
                      <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg></span>{item.author?.email}
                    </p>
                    
                  </a>
                  <a className="flex items-center no-underline hover:underline text-black" href="#">
                    {/* <img alt="Placeholder" className="block rounded-full" src={l}/> */}
                    <p className="ml-2 text-sm">
                      <span className='font-bold'>Category:</span>{item.category.category}
                    </p>
                  </a>
                  <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>
              </article></Link>
            </div>
          ))}
        </div>
      </div>
      </>
    )
}

export default Allblogs;
