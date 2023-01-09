import React, { useEffect } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { useCart } from "../../contexts/cart-context";
import "./ecom-cart.css";
import { HorizontalCard } from "../../components/horizontalCard/horizontal-card";
import { useAuth } from "../../contexts/auth-context";
import axios from "axios";

export function Cart() {
	const { cart, setCart } = useCart();
	const {
		authState: { token },
	} = useAuth();
	const deliveryCharge = 0;
	const TotalPrice = cart.reduce(
		(acc, cur) => acc + Number(cur.originalPrice) * cur.quantity,
		0
	);
	const TotalDiscount = cart.reduce(
		(acc, cur) => acc + cur.originalPrice * (Number(cur.offer) / 100) * cur.quantity,
		0
	);
	const FinalAmount = TotalPrice + deliveryCharge - TotalDiscount;

	const getproductsFromCart = async () => {
		try {
			const response = await axios.get("/api/user/cart", {
				headers: {
					authorization: token,
				},
			});
			setCart(response.data.cart);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getproductsFromCart();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Navbar />
			<h2 className="my-cart-title">My Cart ({cart.length})</h2>
			{cart.length === 0 && (
				<p className="empty-title">Your cart is empty, Add items in cart</p>
			)}
			<div className="my-cart flex">
				<div className="cart-product-section">
					{cart &&
						cart.map((product) => (
							<HorizontalCard {...product} key={product.id} />
						))}
				</div>

				{cart.length > 0 && (
					<div className="price-card flex-col">
						<p className="flex text-bold title">PRICE DETAILS</p>
						<hr />

						<div className="flex-col gap-1rem">
							<div className="flex space-btw">
								<p>₹Price</p>
								<p className="bold">₹{TotalPrice}</p>
							</div>
							<div className="flex space-btw">
								<p>Discount</p>
								<p className="bold">-₹{TotalDiscount}</p>
							</div>
							<div className="flex space-btw">
								<p>Delivery Fees</p>
								<p className="bold">₹{deliveryCharge}</p>
							</div>
						</div>
						<hr />

						<div className="flex space-btw">
							<p className="bold-larger">Total</p>
							<p className="bold-larger">₹{FinalAmount}</p>
						</div>

						<hr />
						<div>
							<p>Yours saving ₹{TotalDiscount} on this order</p>
						</div>

						<button className="solid primary-solid width-100">
							PLACE ORDER
						</button>
					</div>
				)}
			</div>
		</>
	);
}
