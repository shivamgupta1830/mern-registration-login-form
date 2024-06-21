import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center p-2">
      <h1 className="p-4 font-bold text-3xl">Welcome to the Home Page 🏠</h1>
      <br />
      <button className="bg-green-700 text-white p-2 mr-2">
        <Link to="/dashboard"> Go to Dashboard</Link>
      </button>
      <button className="bg-green-700 text-white p-2 ml-2">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};

export default Home;
