import React, { useEffect, useState } from "react";
import axios from "axios";
import "../applicationform/application.css";
import Course from "../courses/course";

function Application() {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    college: "",
    course: "",
    location: "",
  });
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");

  const formdata = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const submitform = async (e) => {
    e.preventDefault();

    try {
      

      const response = await axios.post("https://email-verification-signup-login-pag-theta.vercel.app/api/user/signup", data,
        {
          withCredentials: true,
        }
      );

      if (response.data?.status === "success") {
        setMsg(response.data.message);
        setMsgType("success");

        setData({
          name: "",
          email: "",
          number: "",
          college: "",
          course: "",
          location: "",
        });

        setTimeout(() => {
          setMsg("");
          setMsgType("");
        }, 2000);
      } else {
        setMsg(response.data.message);
        setMsgType("failed");

        setTimeout(() => {
          setMsg("");
          setMsgType("");
        }, 2000);
      }
    } catch (error) {
      setMsg(error.response?.data?.message || "Server Error");
      setMsgType("failed");

      setTimeout(() => {
        setMsg("");
        setMsgType("");
      }, 2000);
    }
  };

  return (
    <>
      {msg && (
        <p
          style={{
            backgroundColor: msgType === "success" ? "green" : "red",
            color: "white",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "6px",
            width: "300px",
            margin: "10px auto",
            textAlign: "center",
          }}
        >
          {msg}
        </p>
      )}

      <form className="container formcontain " onSubmit={submitform}>
        <div className="text-center centers">Admission</div>
        {/* Name */}
        <div className="mb-3 mt-5">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={data.name}
            className="form-control"
            id="name"
            placeholder="Enter Your Name"
            required
            onChange={formdata}
          />
        </div>

        {/* WhatsApp */}
        <input
          type="text"
          name="number"
          value={data.number}
          className="form-control"
          id="whatsapp"
          placeholder="Enter WhatsApp Number"
          required
          maxLength={10}
          onChange={(e) => {
            const x = e.target.value;

            if (/^\d*$/.test(x)) {
              setData({
                ...data,
                number: x,
              });
            }
          }}
        />

        {/* Email */}
        <div className="mb-3 mt-5">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={data.email}
            placeholder="name@example.com"
            required
            onChange={formdata}
          />
        </div>

        {/* Location */}
        <input
          id="autocomplete"
          type="text"
          name="location"
          value={data.location}
          className="form-control"
          placeholder="Search location"
          required
          onChange={formdata}
        />

        {/* College */}
        <label className="mt-2">College</label>
        <select
          className="form-select mt-2"
          required
          name="college"
          value={data.college}
          onChange={formdata}
        >
          <option value="" disabled>
            Select College
          </option>
          <option value="E.G.S PILLAY ENGINEERING">
            E.G.S PILLAY ENGINEERING
          </option>
          <option value="E.G.S PILLAY ARTS & SCIENCE">
            E.G.S PILLAY ARTS & SCIENCE
          </option>
          <option value="E.G.S PILLAY PHARMACY">E.G.S PILLAY PHARMACY</option>
          <option value="E.G.S PILLAY COLLEGE AND SCHOOL OF NURSING">
            E.G.S PILLAY COLLEGE AND SCHOOL OF NURSING
          </option>
          <option value="E.G.S POLYTECHNIC">E.G.S POLYTECHNIC</option>
        </select>

        {/* Course */}
        <label className="mt-2">Course</label>
        <select
          className="form-select mt-2"
          required
          onChange={formdata}
          name="course"
          value={data.course}
        >
          <option value="" disabled>
            Select Course
          </option>
          <option value="AIDS">AIDS</option>
          <option value="IT">IT</option>
          <option value="CSE">CSE</option>
          <option value="BME">BME</option>
          <option value="CSBS">CSBS</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="MECH">MECH</option>
          <option value="CIVIL">CIVIL</option>
        </select>

        {/* Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-success ml-2 mt-3">
            Submit Application
          </button>
        </div>
      </form>
    </>
  );
}

export default Application;
