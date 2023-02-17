import React, { useState, useRef } from "react";
import { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [firstName, setFirstName] = useState("");
  const [not, setNot] = useState("");
  const [email, setEmail] = useState("");
  const [total, setTotal] = useState("");
  const [budget, setBudget] = useState("");
  const [distination, setDestination] = useState("");

  const formref = useRef();
  const formData = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://localhost:8000/add",
      {
        firstName,
        email,
        distination,
        budget,
        total,
        not,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  return (
    <Fragment>
      <div className="flex justify-center">
        <h1 className="text-5xl ">Travelopia</h1>
        <button className="border-2 ml-3">
          <Link to="/clientinfo"> client details </Link>{" "}
        </button>
      </div>

      <div className="flex justify-center items-center h-screen ">
        <div className="  border-2 p-5 bg-slate-200 shadow-2xl rounded-2xl m-3">
          <form ref={formref}>
            <div className="p-4 ">
              <label className=" p-1">Name</label>
              <input
                className=" border-2 rounded-lg "
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                type="text"
                name="firstName"
                required
              />
              <label className=" p-1">Email</label>
              <input
                className=" border-4 rounded-lg "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="p-4">
              <label className=" p-1">Where do you want to go?</label>
              <input
                className=" border-4 rounded-lg "
                value={distination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="place"
                type="text"
                name="password"
                required
              />
            </div>

            <div className="p-4">
              <label className=" p-1">No. of travellers</label>
              <input
                className=" border-4 rounded-lg "
                value={not}
                onChange={(e) => setNot(e.target.value)}
                placeholder="number"
                type="number"
                name="password"
                required
              />
            </div>

            <div className="p-4">
              <label className=" p-1">Budget Per Person</label>
              <input
                className=" border-4 rounded-lg"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="number"
                type="number"
                name="password"
                required
              />
            </div>

            <div className="p-4">
              <label className=" p-1">Total Budget</label>
              <input
                className=" border-4 rounded-lg "
                value={not * budget}
                onChange={(e) => setTotal(e.target.value)}
              />
            </div>

            <div className=" flex justify-center ">
              <button
                type="submit"
                className="border-2 p-1 rounded-md border-white bg-black text-white  "
                onClick={formData}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
