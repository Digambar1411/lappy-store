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
	AuthProvider,
} from "./frontend/contexts/index.js";

makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<FilterProvider>
					<CartProvider>
						<WishlistProvider>
							<App />
						</WishlistProvider>
					</CartProvider>
				</FilterProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
