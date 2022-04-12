import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import "./cart.css";
 
export function Cart(){
    return(
     <>
        <Navbar />
        <div className="mycart flex center">
            <div>
                <div className="card">
                    <div class="body">
                        <div>
                            <img class="img-size" src="../images/laptop2.webp" alt=""/>
                        </div>
            
                        <div class="body-content div-padding">
                            <h3 class="card-title">HP</h3>
                            <h4 class="card-sub-title">HP 14s-dr2512TU</h4>
                        </div>
            
                        <div class="body-content div-padding">
                            <p class="content">HP 14s-dr2512TU 11th Gen Core i3 Windows 11 Home Laptop (8GB RAM, 256GB SSD, Intel UHD Graphics, MS Office, 35.60 cm, 536B6PA#ACJ, Silver)</p>
                        </div>    
                    </div>
            
                    <div class="flex-row div-padding">
                        <div class="flex-card"> 
                            <div class="flex-card">
                                <span class="bold-large">₹40,990</span>  
                                <span class="text-strike-through">₹65,990</span>
                                <span class="text-lightblue">(34% off)</span>           
                            </div>
                        </div>
                    </div>
            
                    <div class="card-footer div-padding">
                        <div class="flex-col center gap-1rem width-100">                                     
                            <button class="solid secondary-solid width-100">Remove from cart</button>
                            <button class="btn-outline secondary-outline width-100">Move to Wishlist</button>                                
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="price-card flex-col">
                <p className="flex text-bold title">PRICE DETAILS</p>
                <hr/>

                <div className="flex-col gap-1rem">
                    <div className="flex space-btw"> 
                        <p>Price</p>
                        <p>49990</p>
                    </div>
                    <div className="flex space-btw"> 
                        <p>Discount</p>
                        <p>-1599</p>
                    </div>
                    <div className="flex space-btw"> 
                        <p>Delivery Fees</p>
                        <p>499</p>
                    </div>
                </div>
                <hr/>

                <div className="flex space-btw"> 
                    <p className="text-bold">Total</p>
                    <p className="text-bold">47990</p>
                </div>

                <hr/>
                <div>
                    <p>Yours saving 1599 on this order</p>
                </div>

                <button className="solid primary-solid width-100">PLACE ORDER</button>
            </div>
        </div>

     </>
    )
}