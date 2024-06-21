import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/login", { email, password })
      .then((response) => {
        if (response.data.status) navigate("/dashboard");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="text-center p-4">
      <form className=" w-[40%] m-auto flex flex-col items-center justify-between p-10 gap-4 border border-slate-800 font-medium">
        <h2 className="font-semibold text-2xl">Log In</h2>
        <div className="flex flex-col justify-start items-start gap-1 w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            placeholder="Email"
            className="p-2 w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-1 w-full">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            placeholder="*********"
            className="p-2 w-full"
            minLength="8"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <h6>Not Registered? </h6>
          <Link
            to="/signup"
            className="text-red-800 hover:text-red-700 cursor-pointer hover:underline"
          >
            Sign Up
          </Link>
        </div>

        <button
          type="submit"
          className="bg-slate-800 p-2 text-white hover:bg-slate-700"
          onClick={handleSubmit}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
