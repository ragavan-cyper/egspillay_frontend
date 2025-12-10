import React, { useState } from "react";
import "./verify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Verify() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    otp: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onchangeevent = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const handleevent = async (e) => {
    e.preventDefault();

    if (!data.name) {
      setError("name field is required");

      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    if (!data.password) {
      setError("password is field required");

      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    if (!data.otp) {
      setError("please enter your otp");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/verify",
        data,

        {
          withCredentials: true,
        }
      );

      setSuccess(response.data);
      setTimeout(() => {
        setSuccess("");
        navigate("/homepage");
      }, 2000);
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
        setTimeout(() => {
          setError("");
        }, 3000);
      } else {
        setError("Server is not responding");
        setTimeout(() => {
          setError("");
        }, 2000);
      }
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
                  pattern="\d{6}"
                  maxLength="6"
                  autoComplete="one-time-code"
                  placeholder="6-digit code"
                  aria-label="One time code"
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
