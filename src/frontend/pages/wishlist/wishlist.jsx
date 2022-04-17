import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { useWishlist } from "../../contexts/wishlist-context";
import { WishlistCard } from "../../components/wishlistCard/wishlistCard"
import "./wishlist.css";

export function Wishlist(){
    const { wishlist } = useWishlist();

    return(
        <>
            <Navbar />
            <h2 className="my-cart-title">My Wishlist({wishlist.length})</h2>
            {wishlist.length===0 && (<p className="empty-title">Your wishlist is empty, Add items</p>)}
            <div className="my-wishlist">
            
                {wishlist && wishlist.map(product=>(<WishlistCard {...product}/> ))}
               
            </div>
        </>
        
    );
}