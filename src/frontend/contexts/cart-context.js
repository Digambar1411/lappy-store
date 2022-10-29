import { createContext, useContext, useState } from "react";
import { useAuth } from "./auth-context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const {
		authState: { token, isLoggedIn },
	} = useAuth();
	const [cart, setCart] = useState([]);
	const navigate = useNavigate();

	const addToCart = async (product) => {
		if (isLoggedIn) {
			try {
				const response = await axios.post(
					"/api/user/cart",
					{
						product,
					},
					{
						headers: {
							authorization: token,
						},
					}
				);
				setCart(response.data.cart);
			} catch (error) {
				console.error(error);
			}
		} else {
			navigate("/login");
		}
	};

	const removeFromCart = async (productId) => {
		try {
			const response = await axios.delete(`/api/user/cart/${productId}`, {
				headers: {
					authorization: token,
				},
			});
			setCart(response.data.cart);
		} catch (error) {
			console.error(error);
		}
	};

	const incrementQuantity = (product) => {
		setCart(
			cart.map((item) =>
				item._id === product._id
					? { ...item, quantity: item.quantity + 1 }
					: item
			)
		);
	};

	const decrementQuantity = (product) => {
		setCart(
			cart.map((item) =>
				item._id === product._id
					? { ...item, quantity: item.quantity>1 ? item.quantity - 1 : 1 }
					: item
			)
		);
	};

	const moveToWishlist = (id) => {
		const newData1 = cart.filter((item) => item._id !== id);
		setCart(newData1);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				addToCart,
				removeFromCart,
				moveToWishlist,
				incrementQuantity,
				decrementQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export { useCart, CartProvider };
