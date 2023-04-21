import React from 'react'
import Header from './header'
import { useEffect, useState } from "react";
import FooterAll from './FooterAll';
import { Link } from 'react-router-dom';
import axios from "axios";
import { BASE_URI } from "./Secret"; 
import LoadingSpinner from './LoadingSpinner';

const Blog = () => {
  document.title="Blog | BlogWithNikhil"

  const [blog,setBlog]=useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async()=>{
    setIsLoading(true);
    const response = await axios.get(`${BASE_URI}/api/products/blogs`);
    setBlog(response.data.myBlog);
    console.log(response.data.myBlog);
    setIsLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <>

        <Header/>
        <div className='container'>
        <div className="row col-md-12 col-12  mx-auto">
        {isLoading ? <LoadingSpinner /> : 
        blog.map((curr,index) => {
              return(
                <div className="col-md-4 mx-auto rad">
            <div
              className="card shadow p-0 ms-2 mb-5 bg-body rounded"
              style={{maxWidth: "30rem", minHeight: "34rem"}} key={index}
            >
            
              <img
                src={curr.cover}
                className="card-img-top imgRounded"
                alt="Human"
                width="462 px"
                height="216px"
              ></img>
              <div className="card-body">
                <h5
                  className="card-title mx-2"
                style={{fontSize: "24px", fontWeight: "520"}}
                >
                 {curr.title}
                </h5>
                <p className="card-text mx-2 pb-4">Author Name: {curr.authorName}</p>
                <p
                  className="card-text mx-2 pb-4 aname"
                  style={{color: "rgb(55, 65, 81)", fontSize: "16px", lineHeight: "22px", fontWeight: "400"}}
                >
                  {curr.description.slice(0,200)}...
                </p>
                
                <Link
                  className="btn btn readMore my-auto mx-2 mb-2 mybtn"
                  to={`post/${index}`}
                >
                  Read More ▶️
                </Link>
              </div>
            </div>
          </div>
              )
            }) }
        </div>
        </div>
        <FooterAll></FooterAll>
    </>
  )
}

export default Blog