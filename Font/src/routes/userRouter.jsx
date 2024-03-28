import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginForm from "../layout/LoginForm";
import RegisterForm from "../layout/RegisterForm";
import useAuth from "../hooks/useAuth";
import Header from "../layout/Header";
import Product from "../layout/Product";
import Details from "../layout/Details";
import Contact from "../layout/Contact";
import UserHeader from "../user/UserHeader";
import Payment from "../layout/Payment";
import GuestHeader from "../Guest/GuestHeader";

// import AdminDashboard from "../layout/AdminDashboard";


const userRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <GuestHeader /> },
      { path: "/register", element: <RegisterForm /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/header", element: <Header /> },
      { path: "/product", element: <Product /> },
      { path: "/details", element: <Details /> },
      { path: "/contact", element: <Contact /> },
      { path: "/payment", element: <Payment /> },
    ],
  },
]);


export default userRouter;