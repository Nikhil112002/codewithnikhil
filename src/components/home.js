import React from "react";
import blogs from "../blogs.json";
import { Link } from "react-router-dom";

const Home = () => {
  document.title = "Home | CodeWithNikhil";
  return (
    <>
      <div className="container">
        <div className="float-container fld">
          <div className="float-child fld1">
            <div className="text-center wlcm">
              Welcome to <span style={{ color: "blue" }}>BlogWithNikhil</span>
            </div>
            <p className="txtcls">
            Hi Folks, This is a blog website created using Reactjs which contains almost each and every functionality which a standard blog website should contain. The data inserted initially is the dummy data. Have a look on each and every functionality of this website. Happy Coding :) 
            
            </p>
            <div className="text-center">
              <Link
                className="btn btn-primary gap btncls"
                role="button"
                to="/freecourse"
              >
                Free Courses
              </Link>
              <Link
                className="btn btn-danger gap btncls"
                role="button"
                to="/blog"
              >
                &nbsp;Blog&nbsp;
              </Link>
            </div>
          </div>

          <div className="d-float-child homeimg">
            <div className="text-center ">
              <img
                className="homeimg1"
                src="assets/images/home1.jpg"
                alt="images"
                style={{ borderRadius: "10px" }}
                height="350px"
                width="560px"
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* Blogs */}
      <div className="container body">
        <div className="d-row justify-content-md-center">
          <div className="flex items-center text-center lg:text-left px-8 md:px-12">
            <h1
              className="recommended mt-2 mb-4"
              style={{ fontWeight: "600", fontSize: "28px" }}
            >
              <div>Recommended Posts</div>
            </h1>
          </div>
        </div>
        <div className="row col-md-12 col-12  mx-auto">
          {blogs.map((curr, index) => {
            return (
              curr.istrue && (
                <div className="col-md-4 mx-auto rad">
                  <div
                    className="card shadow p-0 ms-2 mb-5 bg-body rounded"
                    style={{ maxWidth: "30rem", minHeight: "34rem" }}
                    key={index}
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
                        style={{ fontSize: "24px", fontWeight: "520" }}
                      >
                        {curr.title}
                      </h5>
                      <p className="card-text mx-2 pb-4">
                        Author Name: {curr.authorName}
                      </p>
                      <p
                        className="card-text mx-2 pb-4 aname"
                        style={{
                          color: "rgb(55, 65, 81)",
                          fontSize: "16px",
                          lineHeight: "22px",
                          fontWeight: "400",
                        }}
                      >
                        {curr.description.slice(0, 200)}...
                      </p>

                      <Link
                        className="btn btn readMore my-auto mx-2 mb-2 mybtn"
                        to={`/post/${index}`}
                      >
                        Read More ▶️
                      </Link>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
