import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const updateevent = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const submitevent = async (e) => {
  e.preventDefault();

  if (!data.name) {
    setError("Name field is empty");
    setTimeout(() => setError(""), 2000);
    return;
  }

  if (!data.email) {
    setError("Email is empty");
    setTimeout(() => setError(""), 2000);
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
  if (!emailRegex.test(data.email.toLowerCase())) {
    setError("Only .com Emails are allowed");
    setTimeout(() => setError(""), 2000);
    return;
  }

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/user/signup`,
      data,
      { withCredentials: true }
    );

    if (response.status === 200) {
      setSuccess("OTP sent successfully");

      setTimeout(() => {
        navigate("/verify", { state: { email: data.email, name: data.name } });
      }, 1500);
    }

  } catch (error) {
    if (error.response) {
      setError(error.response.data);
    } else {
      setError("Server error");
    }
  }
};


  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <div className="box">
              <div className="signup">
                <span>
                  <b>SIGN-UP</b>
                </span>

                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={data.name}
                  onChange={updateevent}
                />

                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={data.email}
                  onChange={updateevent}
                />

                <button onClick={submitevent}> verify </button>

                <Link to="/login" className="link">
                  <p>Do you Have Already Account?</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
