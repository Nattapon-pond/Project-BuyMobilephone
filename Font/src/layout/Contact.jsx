import React from "react";
import { NavLink, Link } from "react-router-dom";
import Header from "../layout/Header";

function GuestHeader() {
  return (  
    <div className="navbar-container">
      <div className="navbar bg-base-100 bg-white-400 h-40" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}>
        <div className="flex-1">
          <NavLink to="/" className="mx-16" activeClassName="text-red-600">
            <div className="logoG" />
          </NavLink>
          <div className="navbermanu">
            <NavLink exact to="/header" className="mx-1 font-semibold" 
            style={{ color: "#dc2626" }}>
              หน้าหลัก
            </NavLink>
            <NavLink to="/product" className="mx-1 font-semibold">
              สินค้าทั้งหมด
            </NavLink>
            <NavLink
              to="/details"
              className="mx-1 font-semibold"
            >
              หน้ารายละเอียดสินค้า
            </NavLink>
            <NavLink to="/contact" className="mx-1 font-semibold">
              ติดต่อเรา
            </NavLink>
          </div>

          <div className="searchBox">
            <input type="text" placeholder="Search..." />
            <button className="searchButton">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <NavLink to="/login" className="btn btn-primary mx-3 text-sm btn-sm">
                เข้าสู่ระบบ
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="btn btn-primary mx-5 text-sm btn-sm">
                สร้างบัญชี
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="background-containerG relative flex flex-col justify-center h-screen" scroll>
       
        <br />
        
      </div>

      <div>
          <div style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", marginTop: "-90px" }}>
            <p style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", color: "#333" }}>
              ผลิตภัณฑ์ของเรา
            </p>
          </div>
        </div>


      {/* ส่วนของการแสดงผลสินค้า */}
      <div className="flex flex-wrap justify-center">
        <div className="max-w-xs bg-base-100 shadow-xl rounded-xl mr-4 mt-4">
          <figure className="px-3 py-3">
            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/af53d53d-561f-450a-a483-70a7ceee380f/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-dunk-low-r8QXCd.png" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="px-3 py-2 text-center">
            <h2 className="text-lg font-semibold">Nike Dunk Low</h2>
            <p className="text-sm">4 สี</p>
            <p className="text-sm">฿3,700</p>
            <Link to="/details">
              <div className="mt-2">
                <a href="details" className="btn btn-primary">
                  สั่งซื้อ
                </a>
              </div>
            </Link>
          </div>
        </div>

        <div className="max-w-xs bg-base-100 shadow-xl rounded-xl mr-4 mt-4">
          <figure className="px-3 py-3">
            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-force-1-07-WrLlWX.png" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="px-3 py-2 text-center">
            <h2 className="text-lg font-semibold">Nike Air Force 1 '07</h2>
            <p className="text-sm">2 สี</p>
            <p className="text-sm">฿3,700</p>
            <Link to="/details">
              <div className="mt-2">
                <a href="details" className="btn btn-primary">
                  สั่งซื้อ
                </a>
              </div>
            </Link>
          </div>
        </div>

        <div className="max-w-xs bg-base-100 shadow-xl rounded-xl mr-4 mt-4">
          <figure className="px-3 py-3 w-50 h-50 mt-1">
            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d01ef37b-c14a-4edd-8787-534f5732294c/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-dunk-low-retro-66RGqF.png" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="px-3 py-2 text-center">
            <h2 className="text-lg font-semibold">Nike Dunk Low Retro</h2>
            <p className="text-sm">4 สี</p>
            <p className="text-sm">฿3,700</p>
            <Link to="/details">
              <div className="mt-2">
                <a href="details" className="btn btn-primary">
                  สั่งซื้อ
                </a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestHeader;
