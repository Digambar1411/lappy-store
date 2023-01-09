import React from "react";
import "./productCard.css";
import { useCart } from "../../contexts/cart-context";
import { useNavigate } from "react-router";

export function ProductCard(product) {
	const { cart, addToCart } = useCart();
	const navigate = useNavigate();

	return (
		<div  className="card">
			<div className="body">
				<div className="img-div">
					<img className="card-Image" src={product.image} alt="laptop" />
				</div>

				<div className="body-content div-padding">
					<h3 className="card-title">{product.brand}</h3>
					<div>
						<span className="card-sub-title">{product.name}</span>
						<span className="rating-span">{"⭐".repeat(`${product.rating}`)}</span>
					</div>
				</div>

			</div>

			<div className="flex-row div-padding">
				<div className="flex-card">
					<div className="flex-card">
						<span className="bold-large">₹{product.price}</span>
						<span className="text-strike-through">
							₹{product.originalPrice}
						</span>
						<span className="text-lightblue">({product.offer}% off)</span>
					</div>
				</div>
				
			</div>

			
			
			{cart.find((item) => item._id === product._id) ? (
				<div className="card-footer flex center div-padding">
					<div className="btn-with-icon">
						<button
							className="solid primary-solid"
							onClick={() => navigate("/cart")}
						>
							Go to cart
						</button>
					</div>
				</div>
			) : (
				<div className="card-footer flex center div-padding">
					{/* <div className="btn-with-icon"> */}
						<button
							className="solid primary-solid ecom-btn"
							onClick={() => addToCart(product)}
						>
							Add to cart
						</button>
					{/* </div> */}
				</div>
			)}
		</div>
	);
}
