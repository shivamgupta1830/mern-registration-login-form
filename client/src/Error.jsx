import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

const Error = () => {
  return (
    <div className="text-center ">
      <Navbar />
      <p className="p-4">Something wrong</p>
      <Link to="/login" className="bg-red-700 p-2 text-white">
        Login
      </Link>
    </div>
  );
};

export default Error;
