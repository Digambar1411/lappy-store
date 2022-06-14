import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { 
  FilterProvider, 
  CartProvider, 
  WishlistProvider, 
  ProductProvider,
  CategoryProvider
} from "./frontend/contexts/index.js"



makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <ProductProvider>
          <FilterProvider>
            <CartProvider>
              <WishlistProvider>
                <App/>
              </WishlistProvider>
            </CartProvider>
          </FilterProvider>
        </ProductProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

