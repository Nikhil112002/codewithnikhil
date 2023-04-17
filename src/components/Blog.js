import React from 'react'
import Header from './header'
import blogs from "../blogs.json";
import FooterAll from './FooterAll';
import { Link } from 'react-router-dom';

const Blog = () => {
  document.title="Blog | CodeWithNikhil"
  return (
    <>

        <Header/>
        <div className='container'>
        <div className="row col-md-12 col-12  mx-auto">
          {
            blogs.map((curr,index) => {
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
            })
          }

          
          
        </div>
        </div>
        <FooterAll></FooterAll>
    </>
  )
}

export default Blog