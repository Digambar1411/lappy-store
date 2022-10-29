import React, { useEffect } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { useWishlist } from "../../contexts/wishlist-context";
import { WishlistCard } from "../../components/wishlistCard/wishlistCard";
import "./wishlist.css";
import { useAuth } from "../../contexts/auth-context";
import axios from "axios";

export function Wishlist() {
	const { wishlist, setWishlist } = useWishlist();
	const {
		authState: { token },
	} = useAuth();

	const getProductsFromWishlist = async () => {
		try {
			const response = await axios.get("/api/user/wishlist", {
				headers: {
					authorization: token,
				},
			});
			setWishlist(response.data.wishlist);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getProductsFromWishlist();
	}, []);

	return (
		<>
			<Navbar />
			<h2 className="my-cart-title">My Wishlist({wishlist.length})</h2>
			{wishlist.length === 0 && (
				<p className="empty-title">Your wishlist is empty, Add items</p>
			)}
			<div className="my-wishlist">
				{wishlist &&
					wishlist.map((product) => (
						<WishlistCard {...product} key={product.id} />
					))}
			</div>
		</>
	);
}
