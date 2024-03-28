// guestRouter.js

import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import LoginForm from "../layout/LoginForm";
import RegisterForm from "../layout/RegisterForm";
import Header from "../layout/Header";
import Product from "../layout/Product";
import Details from "../layout/Details";
import Contact from "../layout/Contact";
import Payment from "../layout/Payment";

const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <Header /> },
      { path: "/register", element: <RegisterForm /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/product", element: <Product /> },
      { path: "/header", element: <Header /> },
      { path: "/details", element: <Details /> },
      { path: "/contact", element: <Contact /> },
      { path: "/payment", element: <Payment /> },
    ],
  },
]);

export default guestRouter;
