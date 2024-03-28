import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function YourComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8008/product");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
      <div>
          {products.length > 0 ? (
            products.map(product => (
              <div key={product.id}>
                <h1>{product.name}</h1>
                <p>Brand: {product.brand}</p>
                <p>Price: {product.price}</p>
                <p>Color: {product.color}</p>
                <p>Description: {product.description}</p>
                <p>Stock Quantity: {product.stockQuantity}</p>
                <p>Order ID: {product.orderId}</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
    </div>
  );
}
