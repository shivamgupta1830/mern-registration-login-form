import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Error from "./Error";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="bg-slate-300 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <Login /> },
      { path: "/dashboard", element: <Dashboard /> },
      // { path: "/logout", element: <Home /> },
    ],
    errorElement: <Error />,
  },
]);
export { appRouter, App };
