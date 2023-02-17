import React, { useEffect, useState } from "react";
import axios from "axios";
import { Fragment } from "react";

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
      <div className="flex justify-center ">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className=" p-3">Name</th>
              <th className=" p-3">Email</th>
              <th className=" p-3">Destination</th>
              <th className=" p-3"> No. of travellers</th>
              <th className=" p-3">Budget Per Person</th>

              <th>total Budget</th>
            </tr>
          </thead>
          <tbody>
            {data.length &&
              data.map((e, index) => {
                return (
                  <tr key={index}>
                    <td className=" p-3">{e.name}</td>
                    <td className=" p-3">{e.email}</td>
                    <td className=" p-3">{e.desti}</td>
                    <td className=" p-3">{e.not}</td>
                    <td className=" p-3">{e.budget}</td>
                    <td className=" p-3">{e.tot_budget}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ClientInfo;
