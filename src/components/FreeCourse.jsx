import React, { useEffect, useState } from "react";
import Header from "./header";
import FooterAll from "./FooterAll";
import { Link } from "react-router-dom";
import LoadingSpinner from './LoadingSpinner';
import axios from "axios";
import { BASE_URI } from "./Secret";

const FreeCourse = () => {
  document.title="Free Course | BlogWithNikhil";
  const [isLoading, setIsLoading] = useState(false);
  const [courses,setCourses]=useState([]);
  const fetchData = async()=>{
    setIsLoading(true);
    const response = await axios.get(`${BASE_URI}/api/products`);
    setCourses(response.data.myData);
    setIsLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <>
      <Header></Header>
      {isLoading ? <LoadingSpinner /> : 
      courses.map((cur, index) => {
        return(
          <div className="center mt-4" key={index}>
        <div className=" card col-md-8 shadow ps-4 p-3 mb-4 bg-body roundedd mx-5" >
          <h5 
            className="card-header"
            style={{
              backgroundColor: "white",
              border: "none",
              color: "rgb(75, 85, 99)",
              fontWeight: "300",
              lineHeight: "12px",
            }}
          >
            {cur.createdAt}
          </h5>
          <div className="card-body">
            <h5 className="card-title coursesCard"
            >{cur.title}</h5>
            <p
              className="card-text "
              style={{
                color: "rgb(75, 85, 99)",
                lineHeight: "24px",
                marginTop: "8px",
              }}
            >
              {cur.description.slice(0,158)}...
            </p>
            <Link
              className="btn btn-outline-dark "
              id="scroll"
              to={`/freecourses/${index}`}
              style={{ textDecorationStyle: "solid" }}
            >
              Read More
            </Link>
          </div>
        </div>
        </div>
        )
      })
      }

      <FooterAll></FooterAll>
    </>
  );
};

export default FreeCourse;
