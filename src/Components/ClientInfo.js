import React, { useEffect, useState } from "react";
import axios from "axios";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const ClientInfo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  async function fetchdata() {
    try {
      const response = await axios.get("http://localhost:8000/fetch");

      const details = JSON.parse(JSON.stringify(response.data));

      setData(details);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Fragment>
      <div className="flex justify-center items-center h-screen  ">
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th className=" p-3">Name</th>
                <th className=" p-3">Email</th>
                <th className=" p-3">Destination</th>
                <th className=" p-3"> No. of travellers</th>
                <th className=" p-3">Budget Per Person</th>
              </tr>
            </thead>
            <tbody>
              {data.length &&
                data.map((e, index) => {
                  return (
                    <tr
                      className=" hover:shadow-2xl transform transition-all hover:scale-105  hover:bg-sky-400 "
                      key={index}
                    >
                      <td className=" p-3 ">{e.name}</td>
                      <td className=" p-3">{e.email}</td>
                      <td className=" p-3">{e.desti}</td>
                      <td className=" p-3">{e.not}</td>
                      <td className=" p-3">{e.budget}$</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="flex justify-center ">
            <Link to="/">
              <button
                className="border-2 bg-black text-slate-50 p-3 px-20 rounded-md 
          shadow-2xl transition-all transform hover:scale-105
          hover:bg-sky-400 hover:text-slate-900 m-2
          "
              >
                Back
              </button>
            </Link>

            <button
                className="border-2 bg-black text-slate-50 p-3 px-20 rounded-md 
          shadow-2xl transition-all transform hover:scale-105
          hover:bg-sky-400 hover:text-slate-900 m-2
          "
          onClick={()=>fetchdata()}
              >
                Refresh
              </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ClientInfo;
