import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

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
      setError("Name Field Empty");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    if (!data.email) {
      setError("Email Field Empty");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    if (!data.password) {
      setError("Password Field Empty");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    try {
      const response = await axios.post("https://egs-college-api.vercel.app/api/user/login", data,
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        setSuccess("Successfully Logged In");

        setTimeout(() => {
          setSuccess("");
          navigate("/homepage");
        }, 3000);
      }

      console.log(response.data.success, "success");
    } catch (error) {
      setError("Wrong password");
      setTimeout(() => {
        setError("");
      }, 2000);
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
              <div className="login">
                <span>
                  <b>LOGIN</b>
                </span>

                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={data.name}
                  onChange={onchangeevent}
                />

                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={data.email}
                  onChange={onchangeevent}
                />

                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  value={data.password}
                  onChange={onchangeevent}
                />

                <button onClick={handleevent}>LOGIN</button>

                <Link to="/" className="link text-center">
                  <p>Create Account ?</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
