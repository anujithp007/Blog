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
                    <img class="w-10 h-10 rounded-full" src={`http://localhost:5000/${item.author.file}`} />
                    <span>{item.author.email}</span>
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
              {console.log(item.author.file)}
            </div>
          ))}
        </div>
      </div>
      </>
    )
}

export default Allblogs;
