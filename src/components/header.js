import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      {/* <div class="container-fluid nav-bg mb-5 sticky-top"></div> */}
      <div className="row mx-auto ">
        <div className="col-md-10 mx-auto "></div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="container-fluid py-3 marglr">
            <a className="navbar-brand mx-auto  active" href="/">
              <span className="codewith">CodeWithNikhil</span>
            </a>
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            

            <div
              className="collapse navbar-collapse nav justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-50 mb-2 mb-lg-0 " id="secondProblem">
                <li className="nav-item focus">
                  <Link className="nav-link nhov  menu_active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item focus">
                  <Link className="nav-link nhov" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link nhov" to="/freecourse">
                    Free Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nhov" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
