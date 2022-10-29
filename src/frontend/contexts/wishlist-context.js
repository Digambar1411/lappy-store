import {createContext, useContext, useState} from "react";
import axios from "axios";
import { useAuth } from "./auth-context";

const WishlistContext = createContext();
const useWishlist = ()=>useContext(WishlistContext);

const WishlistProvider = ({children})=>{

	const [wishlist, setWishlist]= useState([]);
	const { authState:{token}}= useAuth();

	const removeFromWishList = async (productId) => {
		try {
			const response = await axios.delete(`/api/user/wishlist/${productId}`, {
				headers: {
					authorization: token,
				},
			});
			setWishlist(response.data.wishlist);
		} catch (error) {
			console.error(error);
		}
	};

	const addToWishList = async (product) => {
		try {
			const response = await axios.post("/api/user/wishlist",
			{
				product
			},{
				headers: {
					authorization: token,
				},
			});
			setWishlist(response.data.wishlist);
		} catch (error) {
			console.error(error);
		}
	};


    return ( < WishlistContext.Provider value={{wishlist, addToWishList, removeFromWishList, setWishlist}} > 
            {children} 
        </ WishlistContext.Provider >
    )
}
export { useWishlist, WishlistProvider }