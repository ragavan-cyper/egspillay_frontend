import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logos from "../image/egslogo1.png";
import "./applica.css";
import { useNavigate } from "react-router-dom";
import Application from "../applicationform/application";
function Applica() {
  const navigate = useNavigate();

  






  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mt-2 rounded-4">
      <div className="container-fluid ">
        <a className="navbar-brand fw-bold text-danger" href="#">
          EGS Instituion
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav w-100 justify-content-around ">
            <li className="nav-item hovers ">
              <a className="nav-link text-danger" onClick={()=>navigate("/homepage")}>
                Home
              </a>
            </li>

            <li className="nav-item hovers">
              <a
                className="nav-link text-danger"
                onClick={() => navigate("/admission")}
              >
                Admission
              </a>
            </li>

            <li className="nav-item hovers">
              <a className="nav-link text-danger " onClick={()=>navigate("/login")}>
                Login
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link btn btn-warning text-primary"
               onClick={()=>navigate("/")}
              >
                Signup
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Applica;
