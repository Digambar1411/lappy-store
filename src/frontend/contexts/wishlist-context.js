import {createContext, useContext, useState} from "react";

const WishlistContext = createContext();

const useWishlist = ()=>useContext(WishlistContext);

const WishlistProvider = ({children})=>{

    const [wishlist, setWishlist]= useState([]);

    const addToWishList = (product) =>{
        setWishlist((prevProd)=>[...prevProd,product]);
        
    }
    const removeFromWishList = (id)=>{
        const newData=wishlist.filter(item=>item._id !== id)
        setWishlist(newData);

    }

    
    return ( < WishlistContext.Provider value={{wishlist, addToWishList, removeFromWishList}} > 
            {children} 
        </ WishlistContext.Provider >
    )

}

export { useWishlist, WishlistProvider }