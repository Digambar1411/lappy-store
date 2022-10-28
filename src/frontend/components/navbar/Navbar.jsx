import React from "react";
import { useNavigate } from "react-router";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { useAuth } from "../../contexts/auth-context";
import "./Navbar.css";
import { useFilter } from "../../contexts/filter-context";

export function Navbar() {
	const { cart } = useCart();
	const { wishlist } = useWishlist();
	const {authState: {isLoggedIn  },logoutHandler} = useAuth();
	const navigate = useNavigate();
	const {dispatch} = useFilter();

	return (
		<nav className="nav flex center">
			<div className="sitename" onClick={() => navigate("/")}>
				<h2>Lappy Store</h2>
			</div>
			<div className="wrapper">
					<input
						className="search-input"
						type="text"
						name=""
						id=""
						placeholder="What are you looking for?"
						onChange={(e)=>

							console.log(e.target.value)
							// dispatch({
							// 	type:"SEARCH_FILTER", 
							// 	payload:e.target.value
							// })
						}
					/>
					{/* <button className="solid primary-solid search-btn">Search</button> */}
			</div>

			<div className="flex nav-icon center">
				{isLoggedIn ? (
					<>
						<button
							className="solid primary-solid"
							onClick={() => logoutHandler()}
						>
							Logout
						</button>

						<div className="icon-w-badge">
							<span
								className="material-icons-outlined md-36"
								onClick={() => navigate("/wishlist")}
							>
								favorite_border
							</span>
							{wishlist.length > 0 && (
								<span className="badge small-badge badge-on-icon">
									{wishlist.length}
								</span>
							)}
						</div>

						<div className="icon-w-badge">
							<span
								className="material-icons md-36"
								onClick={() => navigate("/cart")}
							>
								shopping_cart
							</span>
							{cart.length > 0 && (
								<span className="badge small-badge badge-on-icon">
									{cart.length}
								</span>
							)}
						</div>
					</>
				) : (
					<button
						className="solid primary-solid"
						onClick={() => navigate("/login")}
					>
						Login
					</button>
				)}
			</div>
		</nav>
	);
}
