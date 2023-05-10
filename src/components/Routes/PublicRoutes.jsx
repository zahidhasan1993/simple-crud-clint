import React from "react";
import ReactDOM from "react-dom/client";
import {
  Form,
  createBrowserRouter
} from "react-router-dom";
import Home from "../Home";
import Users from "../Users";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/users",
      element: <Users></Users>,
      loader: () => fetch('http://localhost:5000/users')
    }
  ]);