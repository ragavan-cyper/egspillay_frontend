import React, { useState, useEffect } from "react";
import "./verify.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function Verify() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    otp: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // FIX 1: Load data from Signup page (email & name)
  useEffect(() => {
    if (location.state) {
      setData((prev) => ({
        ...prev,
        name: location.state.name,
        email: location.state.email,
      }));
    }
  }, [location.state]);

  const onchangeevent = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleevent = async (e) => {
    e.preventDefault();

    if (!data.name) {
      setError("name field is required");
      setTimeout(() => setError(""), 2000);
      return;
    }
    if (!data.email) {
      setError("email is required");
      setTimeout(() => setError(""), 2000);
      return;
    }
    if (!data.password) {
      setError("password is required");
      setTimeout(() => setError(""), 2000);
      return;
    }
    if (!data.otp) {
      setError("please enter your otp");
      setTimeout(() => setError(""), 2000);
      return;
    }

    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/verify`,
        data,
        { withCredentials: true }
      );

      if (response.data.success === true) {
        setSuccess(response.data.message);
        setTimeout(() => navigate("/homepage"), 2000);
      } else {
        setError(response.data.message);
        setTimeout(() => setError(""), 2000);
      }
    } catch (error) {
      setError("Server error");
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
            {error && <p className="error text-center">{error}</p>}
            {success && <p className="success text-center">{success}</p>}
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
            <div className="box">
              <div className="verify">
                <span>
                  <b>Welcome</b>
                </span>

                <input
                  type="text"
                  name="name"
                  value={data.name}
                  placeholder="Re-Enter Your Name"
                  onChange={onchangeevent}
                />

                <input
                  type="email"
                  name="email"
                  value={data.email}
                  placeholder="Re-Enter Your Email"
                  onChange={onchangeevent}
                />

                <input
                  type="password"
                  name="password"
                  value={data.password}
                  placeholder="Enter Your Password"
                  onChange={onchangeevent}
                />

                <input
                  id="otp"
                  name="otp"
                  value={data.otp}
                  type="text"
                  inputMode="numeric"
                  maxLength="6"
                  placeholder="6-digit code"
                  onChange={onchangeevent}
                />

                <button onClick={handleevent}>create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Verify;
