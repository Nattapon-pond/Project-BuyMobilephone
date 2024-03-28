import React from "react";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "../layout/styles.css";
import ShoesImage from "../Photos/1.webp";
import UserHeader from "../user/UserHeader";
import GuestHeader from "../Guest/GuestHeader";
import AdminHeader from "../admin/AdminHeader";

function Header() {
  const { user, logout } = useAuth();

  const handleLogoutClick = () => {
    logout(); 
  };

  if (user?.role === 'ADMIN') {
    return <AdminHeader user={user} handleLogoutClick={handleLogoutClick} />;
  }

  return user?.id ? (
    <>
      <UserHeader user={user} handleLogoutClick={handleLogoutClick} />,
    
    </>
  ) : (
    <GuestHeader />
  );
}

export default Header;