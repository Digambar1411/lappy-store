import React from "react";
import { useNavigate } from 'react-router';
import { useCart } from "../../contexts/cart-context"
import "./Navbar.css";

export function Navbar() {
  const {cart } = useCart();
    const navigate = useNavigate();
    return (
      <nav className="nav flex center">
        <div className="sitename" onClick= {()=>navigate("/")}><h2>Lappy Store</h2></div>
        <div className="wrapper">
          <form action="">
            <input className="search-input" type="text" name="" id="" placeholder="What are you looking for?" />
            <button className="solid primary-solid search-btn">Search</button>
          </form>
        </div>

        <div className="flex nav-icon center">
          <button className="solid primary-solid" onClick= {()=>navigate("/login")}>Login</button>
         
          <div class="icon-w-badge">        
          <span className="material-icons-outlined md-36" onClick= {()=>navigate("/wishlist")}>favorite_border</span>
            {/* {wishlist.length>0 && <span class="badge small-badge badge-on-icon">{wishlist.length}</span> } */}
          </div>
          <div class="icon-w-badge">        
            <span className="material-icons md-36" onClick= {()=>navigate("/cart")}>shopping_cart</span>
            {cart.length>0 && <span class="badge small-badge badge-on-icon">{cart.length}</span> }
          </div>
        </div>
      </nav>
    );
}