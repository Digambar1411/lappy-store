import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
	Home,
	Login,
	Signup,
	Cart,
	Wishlist,
	Products,
	PageNotFound,
} from "./frontend/pages";
import { PrivateRoutes } from "./frontend/components/private routes/privateRoutes";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route
					path="/cart"
					element={
						<PrivateRoutes>
							<Cart />
						</PrivateRoutes>
					}
				/>
				<Route
					path="/wishlist"
					element={
						<PrivateRoutes>
							<Wishlist />
						</PrivateRoutes>
					}
				/>
				<Route path="/products" element={<Products />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
