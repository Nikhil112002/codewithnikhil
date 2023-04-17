import React from "react";
import Header from "./header";
import FooterAll from "./FooterAll";
import courses from "../courses.json";
import { Link } from "react-router-dom";


const FreeCourse = () => {
  document.title="Free Course | CodeWithNikhil"
  return (
    <>
      <Header></Header>
      {courses.map((cur, index) => {
        return(
          <div className="center mt-4">
        <div className=" card col-md-8 shadow ps-4 p-3 mb-4 bg-body roundedd mx-5" key={index}>
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
      })}

      <FooterAll></FooterAll>
    </>
  );
};

export default FreeCourse;
