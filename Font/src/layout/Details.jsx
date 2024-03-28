import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Header from "../layout/Header";

export default function Details() {
  const [quantity, setQuantity] = useState(1);
  const [additionalPrice, setAdditionalPrice] = useState(0);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleClear = () => {
    setQuantity(1);
    setAdditionalPrice(0);
  };

  const handlePriceChange = (event) => {
    const price = parseFloat(event.target.value);
    setAdditionalPrice(price);
  };

  const totalPrice = (3700 + additionalPrice) * quantity;

  return (
    <div className="navbar-container">
      <div className="navbar bg-base-100 bg-green-100 h-40 flex justify-between items-center px-6 fixed top-0 left-0 right-0 z-50">
        <div className="flex-1">
          <NavLink to="/" className="mx-16" activeClassName="text-red-600">
            <div className="logoG" />
          </NavLink>
          <div className="navbermanu">
            <NavLink exact to="/header" className="mx-1 font-semibold">
              หน้าหลัก
            </NavLink>
            <NavLink to="/product" className="mx-1 font-semibold">
              สินค้าทั้งหมด
            </NavLink>
            <NavLink
              to="/details"
              className="mx-1 font-semibold"
              style={{ color: "#dc2626" }}
            >
              หน้ารายละเอียดสินค้า
            </NavLink>
            {/* <NavLink to="/contact" className="mx-1 font-semibold">
              ติดต่อเรา
            </NavLink> */}
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
              
            </li>
            <li>
              <NavLink
                to="/header"
                className="btn btn-primary mx-5 text-sm btn-sm"
              >
                ออกจากระบบ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* ส่วนของการแสดงผลสินค้า */}

      <div className="container mx-auto mt-50" style={{ marginTop: "150px" }}>
        <div className="sm:flex shadow-md my-10">
          <div className="w-full sm:w-3/4 bg-white px-10 py-10">
            <div className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div style={{ width: "550%", alignSelf: "flex-start" }}>
                <div className="flex items-center mr-10">
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://dlcdnwebimgs.asus.com/gain/1F082CCC-7F01-4057-B250-4B81B1651877/w500"
                    alt=""
                  />
                </div>
              </div>
              <div
                style={{
                  width: "180%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://media-cdn.bnn.in.th/370135/Asus-ROG-Phone-8-Pro-6-square_medium.jpg"
                  alt=""
                />
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://media-cdn.bnn.in.th/370134/Asus-ROG-Phone-8-Pro-5-square_medium.jpg"
                  alt=""
                />
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://media-cdn.bnn.in.th/370133/Asus-ROG-Phone-8-Pro-4-square_medium.jpg"
                  alt=""
                />
              </div>

              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center"></div>
            </div>

            <a
              href="#"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              กลับไปหน้าสินค้า
            </a>
          </div>
          <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
              ROG Phone 8 Pro
              </span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                1 สี
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-wrap">
                  <div className="flex flex-wrap">
                    <div className="md:w-4/12 2xl:w-1/4 w-full mb-2 md:mb-0">
                      <button
                        className="color-button mr-2 bg-success-content rounded-full w-6 h-6 focus:outline-none"
                        title="Black"
                      ></button>
                      <button
                        className="color-button bg-secondary-content rounded-full w-6 h-6 focus:outline-none"
                        title="Storm gray"
                      ></button>
                    </div>
                    <div className="md:w-4/12 2xl:w-1/4 w-full mb-2 md:mb-0">
                      <button
                        className="color-button mr-2 bg-base-300-content rounded-full w-6 h-6 focus:outline-none"
                        title="Black"
                      ></button>
                      <button
                        className="color-button bg-secondary-content rounded-full w-6 h-6 focus:outline-none"
                        title="
                Storm gray"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10">
              <p className="text-orange-500 font-bold">฿37,990</p>
              <br />
              {/* <div className="flex items-center">
                <p className="text-black font-semibold mr-6">เลือกไซส์</p>
                <select
                  aria-label="Select quantity"
                  className="py-2 px-1 border border-gray-200 focus:outline-none"
                >
                  <option>US 6</option>
                  <option>US 6.5</option>
                  <option>US 7</option>
                  <option>US 7.5</option>
                  <option>US 8</option>
                  <option>US 8.5</option>
                  <option>US 9</option>
                </select>
              // </div> */}
              <div className="counter">
                <p className="text-black font-semibold mr-6">จำนวน</p>
                <div className="flex items-center">
                  <button
                    className="btn btn-inc bg-blue-500 text-white px-4 py-2 rounded-l"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                  <h3 className="number text-2xl mx-4">{quantity}</h3>
                  <button
                    className="btn btn-dec bg-red-500 text-white px-4 py-2 rounded-r"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-clr bg-gray-300 text-gray-700 px-4 py-2 ml-4"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
           
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>ราคารวม</span>
                <span>$37,990</span>
              </div>
              <Link to="/payment">
                <div className="mt-2">
                  <a
                    href="payment"
                    className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 px-6 text-sm text-white uppercase inline-block w-full text-center"
                  >
                    สั่งซื้อสินค้า
                  </a>
                </div>
              </Link>
            </div>
          </div>
          
        </div>
        
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside>
              <p>ณัฐพล น้อยทะรงค์ © 2024 - มหาวิทยาลัยราชภัฏมหาสารคาม</p>
            </aside>
          </footer>
    </div>
  );
}
