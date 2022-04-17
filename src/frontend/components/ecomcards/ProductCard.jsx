import React from "react";
import { laptopImage } from "../../pages/home/home";
import "./productCard.css"
import { useCart } from "../../contexts/cart-context";
import { useNavigate } from 'react-router';

export function ProductCard(product){
    const { cart, addToCart } = useCart();
    const navigate = useNavigate();

    return (
        <div key={product.id} className="card">
            <div className="body">
                <div className ="img-div">
                    <img className="card-Image" src={ laptopImage } alt="laptop"/>
            
                </div>

                <div className="body-content div-padding">
                    <h3 className="card-title">{ product.brand }</h3>
                    <h4 className="card-sub-title">{ product.name }</h4>
                </div>

                <div className="body-content div-padding">
                    <p className="content">{ product.details }</p>

                </div>    
            </div>

            <div className="flex-row div-padding">
                <div className="flex-card"> 
                    <div className="flex-card">
                        <span className="bold-large">₹{product.price}</span>  
                        <span className="text-strike-through">₹{product.originalPrice}</span>
                        <span className="text-lightblue">({product.offer}% off)</span>  
                                
                    </div>
                    <span className="rating-span">{product.rating}⭐</span> 
                </div>
            </div>
            { 
            cart.find(item=>item._id === product._id) ?

                (<div className="card-footer flex center div-padding">
                    <div className="btn-with-icon">
                    <button  className="solid primary-solid" onClick= {()=>navigate("/cart")} > 
                     Go to cart</button> 
                </div>
                </div>) :

                (<div className="card-footer flex center div-padding">
                    <div className="btn-with-icon">
                        <button  className="solid primary-solid" onClick={()=>addToCart(product) } > 
                        Add to cart</button> 
                    </div>
                </div>) 

            }
        </div>   
    )
}