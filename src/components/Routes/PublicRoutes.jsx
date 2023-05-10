import React from "react";
import ReactDOM from "react-dom/client";
import {
  Form,
  createBrowserRouter
} from "react-router-dom";
import Home from "../Home";
import Users from "../Users";
import UpdateUser from "../UpdateUser";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/users",
      element: <Users></Users>,
      loader: () => fetch('http://localhost:5000/users')
    },
    {
      path: "/users/:id",
      element: <UpdateUser></UpdateUser>,
      loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
    }
  ]);