import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./header";
import FooterAll from "./FooterAll";
import axios from "axios";
import { BASE_URI } from "./Secret";
import LoadingSpinner from './LoadingSpinner';

const CoursePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const index = params.id;//2
  const [courses, setCourses] = useState([]);//[]
  const courseData = courses[index];//courses[2]
  console.log(index);
  const fetchData = async () => {
    setIsLoading(true);
    const response = await axios.get(`${BASE_URI}/api/products`);
    setCourses(response.data.myData);
    console.log(response.data.myData);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {isLoading ? <LoadingSpinner /> : 
      <div className="container pt-3 mb-5 py-3">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "700",
                lineHeight: "40px",
                paddingBottom: "5px;",
              }}
            >
            
              {courseData?.title}
            </h1>
            <p
              style={{
                color: "rgb(75, 85, 99)",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
              }}
            >
              {courseData?.createdAt}
            </p>
            <div className="mt-4">
              <p className="mt-2 text-justify textalign1">
                {courseData?.description}
              </p>
            </div>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "36px",
                marginTop: "35px",
                paddingBottom: "3px",
              }}
            >
              {courseData?.about}
            </h1>
            <p className="mt-2 text-justify textalign1">{courseData?.content}</p>
          </div>
        </div>
      </div>}
      <FooterAll />
    </>
  );
};

export default CoursePost;
