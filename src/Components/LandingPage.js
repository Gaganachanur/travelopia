import React, { useState, useRef, useEffect } from "react";
import { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [name, setFirstName] = useState("");
  const [not, setNot] = useState(null);
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState(null);
  const [desti, setDestination] = useState("");

  const formref = useRef();

  const formData = async (e) => {
    //e.preventDefault();
    await axios
      .post("http://localhost:8000/add", {
        name,
        not,
        email,
        budget,
        desti,
      })
      .then((response) => {
        console.log(response.data);
        // Handle data
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const options = [
  
    { label: null, value: null},

    { label: "India", value: "India" },

    { label: "Africa", value: "Africa" },

    { label: "Europe", value: "Europe" },
  ];

  return (
    <Fragment>
      <div className="beach">
        <div className="flex justify-center items-center h-screen ">
          <div className="  border-2 p-5 bg-slate-200 shadow-2xl rounded-2xl m-5">
            <div className="flex flex-wrap justify-evenly p-5">
              <h1 className="text-5xl font-semibold font-Kalam bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-500">
                Travelopia
              </h1>
              <Link to="/clientinfo">
                <button
                  className="border-2 bg-black text-slate-50 p-2 px-10 rounded-md 
          shadow-2xl transition-all transform hover:scale-105
          hover:bg-sky-400 hover:text-slate-900 m-2
          "
                >
                  Client details
                </button>
              </Link>
            </div>

            <form ref={formref} onSubmit={formData}>
              <div className="flex flex-wrap p-4 ">
                <div className="m-3">
                  <label className=" p-1">Name</label>
                  <input
                    className=" border-2 rounded-lg "
                    value={name}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="m-3">
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
              </div>
              <div className="p-4">
                <label className=" p-1">Where do you want to go?</label>
                <select value={desti} onChange={(e) => setDestination(e.target.value)}>
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className="p-4">
                <label className=" p-1">No. of travellers</label>
                <input
                  className=" border-4 rounded-lg "
                  value={not}
                  onChange={(e) => setNot(e.target.value)}
                  placeholder="number"
                  type="number"
                  name="not"
                  required
                />
              </div>

              <div className="flex flex-wrap p-4">
                <label className=" p-1">Budget Per Person</label>
                <input
                  className=" border-4 rounded-lg "
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="number"
                  type="number"
                  name="budget"
                  required
                />
                <p>$</p>
              </div>

              <div className=" flex justify-center mt-5 ">
                <button
                  type="submit"
                  className="border-2 bg-black text-slate-50 p-2 rounded-md 
                  shadow-2xl transition-all transform hover:scale-105
                  hover:bg-sky-400 hover:text-slate-900 w-1/2
                  "
                >
                  Submit
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
