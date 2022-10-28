import React from "react";
import { laptopImage } from "../../pages/home/home";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import "./wishlistCard.css";

export function WishlistCard(product) {
	const { addToCart } = useCart();
	const { removeFromWishList } = useWishlist();

	return (
		<div key={product.id} className="card">
			<div className="body">
				<div className="img-div">
					<img className="card-Image" src={laptopImage} alt="laptop" />
				</div>

				<div className="body-content div-padding">
					<h3 className="card-title">{product.brand}</h3>
					<h4 className="card-sub-title">{product.name}</h4>
				</div>

				<div className="body-content div-padding">
					<p className="content">{product.details}</p>
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
					<span className="rating-span">{product.rating}⭐</span>
				</div>
			</div>
			<div className="div-padding wishlist-card-btn-div">
				<button
					className="solid primary-solid"
					onClick={() => addToCart(product)}
				>
					{" "}
					Add to cart
				</button>

				<div>
					<button className="floating-btn delete">
						<span
							class="material-icons"
							onClick={() => removeFromWishList(product._id)}
						>
							delete
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
