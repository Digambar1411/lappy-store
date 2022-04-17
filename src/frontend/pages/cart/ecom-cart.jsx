import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { useCart } from "../../contexts/cart-context";
import "./ecom-cart.css";
import { HorizontalCard } from "../../components/horizontalCard/horizontal-card";
 
export function Cart(){
    const { cart } = useCart();

  

    const deliveryCharge = 0;
    const TotalPrice =  cart.reduce((acc,cur)=>acc + Number(cur.originalPrice) * cur.quantity, 0);
    const TotalDiscount = cart.reduce((acc,cur)=>acc+ cur.originalPrice * (Number(cur.offer)/100),0);
    const FinalAmount = TotalPrice+ deliveryCharge-TotalDiscount;
    
    return(
     <>
        <Navbar />
        <h2 className="my-cart-title">My Cart ({cart.length})</h2>
        {cart.length===0 && (<p className="empty-title">Your cart is empty, Add items in cart</p>)}
        <div className="my-cart flex">
           
           
            <div className="cart-product-section">
    
                    {cart && cart.map(product=>(<HorizontalCard {...product}/> ))}
            </div>
            
            { cart.length >0 && ( <div className="price-card flex-col">
                <p className="flex text-bold title">PRICE DETAILS</p>
                <hr/>

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
                <hr/>

                <div className="flex space-btw"> 
                    <p className="bold-larger">Total</p>
                    <p className="bold-larger">₹{FinalAmount}</p>
                </div>

                <hr/>
                <div>
                    <p>Yours saving ₹{TotalDiscount} on this order</p>
                </div>

                <button className="solid primary-solid width-100">PLACE ORDER</button>
            </div>) }
        </div>

     </>
    )
}

