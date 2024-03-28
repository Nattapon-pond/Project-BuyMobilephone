import React from "react";
import { NavLink, Link } from "react-router-dom";
import Header from "../layout/Header";
import AdminHeader from "../admin/AdminHeader";



//หน้าเเรกของเว็ป
function GuestHeader() {
  return (
    <div className="navbar-container">
      <div
        className="navbar bg-base-100 bg-green-100 h-40"
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}
      >
        <div className="flex-1">
          <NavLink to="/" className="mx-16" activeClassName="text-red-600">
            <div className="logoG" />
          </NavLink>

          <div className="navbermanu">
            <NavLink
              exact
              to="/header"
              className="mx-1 font-semibold"
              style={{ color: "#dc2626" }}
            >
              หน้าหลัก
            </NavLink>
            <NavLink to="/product" className="mx-1 font-semibold">
              สินค้าทั้งหมด
            </NavLink>
            <NavLink to="/details" className="mx-1 font-semibold">
              หน้ารายละเอียดสินค้า
            </NavLink>
            <NavLink to="/contact" className="mx-1 font-semibold">
              ติดต่อเรา
            </NavLink>
          </div>

          <div className="searchBox">
            <input type="text" placeholder="Search..." />
            <button className="searchButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <NavLink
                to="/login"
                className="btn btn-primary mx-3 text-sm btn-sm"
              >
                เข้าสู่ระบบ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className="btn btn-primary mx-5 text-sm btn-sm"
              >
                สร้างบัญชี
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="background-containerG relative flex flex-col justify-center h-screen"
        scroll
      ></div>

      <body className="mt1000">
        <div>
          <div
            style={{
              backgroundColor: "#f0f0f0",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              marginTop: "-10vh",
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              สินค้าเเนะนำของเรา
            </p>
          </div>
        </div>
      </body>

      {/* ส่วนของการแสดงผลสินค้า */}

      {/* itemproduct 1 */}
      <div className="flex flex-wrap justify-center space-x-16 space-y-16">
        <div className="carditrmproduct ">
          <figure className="figure">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6gmpOdE07cqXesYWFeSTL0D15ZekRTLA6ExpBnScvA&s"
              alt="iPhone 15 Pro Max"
              className="card-properties"
            />
          </figure>

          <div className="px-3 py-2 text-center">
            <h2 className="text-lg font-semibold mt-8">iPhone 15 Pro Max</h2>

            <div
              className="flex justify-center mt-1"
              style={{ marginTop: "10px" }}
            >
              <button
                className="color-button mr-2 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"
                title="Blue"
              ></button>
              <button
                className="color-button mr-2 bg-base-300 rounded-full w-6 h-6 focus:outline-none"
                title="White Titanium"
              ></button>
              <button
                className="color-button bg-success-content rounded-full w-6 h-6 focus:outline-none"
                title="balck"
              ></button>
            </div>
            <p className="text-sm mt-5">฿46,500</p>
            <Link to="/details">
              <div className="mt-2">
                <a href="details" className="btn btn-primary">
                  สั่งซื้อ
                </a>
              </div>
            </Link>
          </div>
        </div>

        {/* itemproduct 2 */}
        <div className="carditrmproduct  ">
          <figure className="figure">
            <img
              src="https://dlcdnwebimgs.asus.com/gain/69B472FB-4AA3-4CB1-981E-F1B9E831B8A3/w250"
              alt="ROG Phone 8"
              className="card-properties"
            />
          </figure>

          <div className="px-3 py-2 text-center">
            <h2 className="text-lg font-semibold mt-8">ROG Phone 8</h2>

            <div
              className="flex justify-center mt-1"
              style={{ marginTop: "10px" }}
            >
              <button
                className="color-button mr-2 bg-success-content rounded-full w-6 h-6 focus:outline-none"
                title="Black"
              ></button>
              <button
                className="color-button bg-secondary-content rounded-full w-6 h-6 focus:outline-none"
                title="
                Storm gray"
              ></button>
            </div>
            <p className="text-sm mt-5">฿29,990</p>
            <Link to="/details">
              <div className="mt-2">
                <a href="details" className="btn btn-primary">
                  สั่งซื้อ
                </a>
              </div>
            </Link>
          </div>
        </div>

        {/* itemproduct 3 */}
        <div className="carditrmproduct ">
          <figure className="figure">
            <img
              src="https://dlcdnwebimgs.asus.com/gain/1F082CCC-7F01-4057-B250-4B81B1651877/w250"
              alt="ROG Phone 8 Pro"
              className="card-properties"
            />
          </figure>

          <div className="px-3 py-2 text-center">
            <h2 className="text-lg font-semibold mt-8">ROG Phone 8 Pro</h2>
            {/* <p className="text-sm mt-2">4 สี</p> */}
            <div
              className="flex justify-center mt-1"
              style={{ marginTop: "10px" }}
            >
              <button
                className="color-button bg-success-content rounded-full w-6 h-6 focus:outline-none"
                title="black"
              ></button>
            </div>
            <p className="text-sm mt-5">฿37,990</p>
            <Link to="/details">
              <div className="mt-2">
                <a href="details" className="btn btn-primary">
                  สั่งซื้อ
                </a>
              </div>
            </Link>
          </div>
        </div>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>ณัฐพล น้อยทะรงค์ © 2024 - มหาวิทยาลัยราชภัฏมหาสารคาม</p>
          </aside>
        </footer>
      </div>
    </div>
  );
}

export default GuestHeader;
