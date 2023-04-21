import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./header";
import FooterAll from "./FooterAll";
import axios from "axios";
import { BASE_URI } from "./Secret";
import LoadingSpinner from './LoadingSpinner';

const Post = () => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const index = params.id;//2
  const [blog, setBlog] = useState([]);//[]
  const postData = blog[index];//courses[2]
  console.log(index);
  const fetchData = async () => {
    setIsLoading(true);
    const response = await axios.get(`${BASE_URI}/api/products/blogs`);
    setBlog(response.data.myBlog);
    console.log(response.data.myBlog);
    setIsLoading(false);
  };  
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      {isLoading ? <LoadingSpinner /> : 
      <div className="container col-md-10 mx-auto">
        <div className="content my-5 pt-5">
          <h1
            className="text-center"
            style={{ fontSize: "36px", fontWeight: "700", lineHeight: "40px" }}
          >
            {postData?.title}
          </h1>
          <p
            className="text-center"
            style={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              color: "rgb(75, 85, 99)",
            }}
          >
            Category: {postData?.category}
          </p>
          <p
            className="text-center aname"
            style={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              color: "rgb(75, 85, 99)",
            }}
          >
            Author Name: {postData?.authorName}
          </p>
          <img
            src={postData?.cover}
            className="rounded mx-auto d-block postimg"
            style={{ height: "500px", width: "800px" }}
            alt="Human "
            width="80%"
          ></img>
          <div className="mt-3 pt-3">
            <p className="center txtcls">{postData?.description}</p>
          </div>
          <div className="mt-3 pt-3">
            <p className="center txtcls">{postData?.description}</p>
          </div>
        </div>
      </div>}
      <FooterAll />
    </>
  );
};

export default Post;
