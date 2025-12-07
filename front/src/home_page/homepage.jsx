import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar_sec.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../image/logoegs.png";
import logo1 from "../image/egslogo1.png";
import Applica from "../applica/applica.jsx";
import Carousel from "../carousel/carousel.jsx";
import Course from "../courses/course.jsx";
import Banner from "../banner/banner.jsx";

function Homepage() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="logo d-flex  flex-wrap gap-1">
              <img src={logo} className="img-fluid" />
              <img src={logo1} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <Applica />
      <Carousel />
      <Course />
      <Banner />
    </>
  );
}

export default Homepage;
