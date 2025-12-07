import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../image/courses.png";
import "../courses/course.css";

function Course() {
  return (
    <>
      <div className="container-fluid p-0 coursecontainer">
        <img src={img1} alt="courses" className="img-fluid w-100 courseimg" />
      </div>
    </>
  );
}
export default Course;
