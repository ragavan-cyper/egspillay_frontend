import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../carousel/carousel.css";
import img1 from "../image/egs1.png";
import img2 from "../image/egs2.png";
import img3 from "../image/egs3.png";
import img4 from "../image/egs4.jpg";
import img5 from "../image/egs5.png";

function Carousel() {
  const slides = [img1, img2, img3, img4, img5];
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
      data-bs-pause="false"
    >
      <div className="carousel-inner">
        {slides.map((src, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img src={src} className="d-block w-100" alt="banner" />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default Carousel;
