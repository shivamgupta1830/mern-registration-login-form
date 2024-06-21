import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  axios
    .get("http://localhost:3000/auth/dashboard")
    .then((response) => {
      if (response.data.status) {
        console.log(response);
      } else {
        navigate("/");
      }
    })
    .catch((error) => console.log(error));

  const handleLogout = () => {
    axios
      .get("http://localhost:3000/auth/logout")
      .then((response) => {
        if (response.data.status) {
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="text-center p-2">
      <h1 className="p-4 font-bold text-3xl">DashBoard</h1>
      <br />
      <button className="bg-green-700 text-white p-2 mr-2">
        <Link to="/"> Go to Home</Link>
      </button>
      <button className="bg-green-700 text-white p-2" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
