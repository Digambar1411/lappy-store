import React from "react";
import { useNavigate } from 'react-router';
import "./Navbar.css";

export function Navbar() {
    const navigate = useNavigate();
    return (
      <nav className="nav flex center">
        <div className="sitename"><h2>Lappy Store</h2></div>
        <div className="wrapper">
          <form action="">
            <input className="search-input" type="text" name="" id="" placeholder="What are you looking for?" />
            <button className="solid primary-solid search-btn">Search</button>
          </form>
        </div>

        <div className="flex nav-icon center">
          <button className="solid primary-solid" onClick= {()=>navigate("/login")}>Login</button>
          <span className="material-icons-outlined" onClick= {()=>navigate("/wishlist")}>favorite_border</span>
          <span className="material-icons" onClick= {()=>navigate("/cart")}>shopping_cart</span>
        </div>
      </nav>
    );
}