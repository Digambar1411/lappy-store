import React, { useState ,useCallback} from "react";
import { useNavigate } from "react-router";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { useAuth } from "../../contexts/auth-context";
import "./Navbar.css";

export function Navbar() {
	const { cart } = useCart();
	const { wishlist } = useWishlist();
	const {
		authState: { isLoggedIn },
		logoutHandler,
	} = useAuth();
	const navigate = useNavigate();
	const [mobileMenus, setMobileMenus] = useState(false);

	const toggleMobileMenus = useCallback(() => {
		setMobileMenus(() => !mobileMenus);
	},[mobileMenus]);

	return (
		<>
			<nav className="nav flex center">
				<div className="sitename" onClick={() => navigate("/")}>
					LappyStore
				</div>

				<div className="wrapper">
					<input
						className="search-input"
						type="text"
						name=""
						id=""
						placeholder="What are you looking for?"
						onChange={
							(e) => console.log(e.target.value)
							
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
							className="solid primary-solid nav-btn"
							onClick={() => navigate("/login")}
						>
							Login
						</button>
					)}
				</div>
			</nav>

			<nav className="mobile-nav">
				<div className="sitename" onClick={() => navigate("/")}>
					LappyStore
				</div>

				<div onClick={toggleMobileMenus}>
					{ mobileMenus  ? <span className="material-icons-outlined fs-32 ml-8 open-menu">menu</span>
					: <span className="material-icons-outlined fs-32 ml-8 open-menu">close</span> }
				</div>

			</nav>

			<div className= {`${ mobileMenus ? "mobile-menus-hidden" : "mobile-menus-active" }`}>
				{isLoggedIn ? (
					<>
						<button
							className="solid primary-solid"
							onClick={() => logoutHandler()}
						>
							Logout
						</button>

						<div className="menu-div" onClick={() => navigate("/wishlist")}>
							<span
								className="material-icons-outlined fs-32 menu-icon"
							>
								favorite_border
							</span>
							My Wishlist
							{wishlist.length > 0 && (
								<span className="badge small-badge badge-on-icon">
									{wishlist.length}
								</span>
							)}
						</div>

						<div className="menu-div" onClick={() => navigate("/cart")}>
							<span
								className="material-icons fs-32 menu-icon"
							>
								shopping_cart
							</span>
							My Cart
							{cart.length > 0 && (
								<span className="badge small-badge badge-on-icon">
									{cart.length}
								</span>
							)}
						</div>
					</>
				) : (
					<button
						className="solid primary-solid nav-btn"
						onClick={() => navigate("/login")}
					>
						Login
					</button>
				)}
				</div>

			
		</>
	);
}
