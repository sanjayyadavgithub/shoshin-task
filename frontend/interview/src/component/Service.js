import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";

export default function Service() {
  const [serviceData, setServiceData] = useState();
  useEffect(() => {
    console.log("usee");
    const getService = async () => {
      const serviceRes = await axios.get("http://localhost:4000/api/services");
      console.log("res", serviceRes);
      setServiceData(serviceRes);
    };
    getService();
  });
  return (
    <div>
      <Link to={'booking'}><button>Booking</button></Link>
      <table>
        <thead>
          <tr>
            <th>Service ID</th>
            <th>Service Name</th>
            <th>Service Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {serviceData &&
            serviceData.map((service,ind) => {
              return (
                <tr key={ind}>
                  <td>{ind+1}</td>
                  <td>{service.name}</td>
                  <td>{service.type}</td>
                  <Link to={`service/${service._id}`}>
                    <td>
                      <button>Details</button>
                    </td>
                  </Link>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
