import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./frontend/contexts/filter-context";
import { CartProvider } from "./frontend/contexts/cart-context";
import { WishlistProvider } from "./frontend/contexts/wishlist-context";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <CartProvider>
          <WishlistProvider>
            <App/>
          </WishlistProvider>
        </CartProvider>
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

