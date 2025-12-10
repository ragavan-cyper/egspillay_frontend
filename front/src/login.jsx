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

    if (!data.name || !data.email || !data.password) {
      setError("All fields are required");
      setTimeout(() => setError(""), 2000);
      return;
    }

    try {
      const response = await axios.post(
        `${REACT_APP_BACKEND}/api/user/login`,
        data,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        setSuccess("Successfully Logged In");
        setTimeout(() => {
          navigate("/homepage");
        }, 1000);
      }
    } catch (error) {
      setError("Wrong credentials");
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">

            {error && <p className="error text-center">{error}</p>}
            {success && <p className="success text-center">{success}</p>}

            <div className="box">
              <div className="login">
                <span><b>LOGIN</b></span>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={data.name}
                  onChange={onchangeevent}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={data.email}
                  onChange={onchangeevent}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
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
