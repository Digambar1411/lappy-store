import React from "react";
import { laptopImage } from "../../pages/home/home";
import "./productCard.css"
import { Link } from "react-router-dom";

export function ProductCard({id,name,brand,rating,details,price,discount,offer}){
    return (
        <div key={id} className="card">
            <div className="body">
                <div className ="img-div">
                    <img className="card-Image" src={ laptopImage } alt="laptop"/>
                </div>

                <div className="body-content div-padding">
                    <h3 className="card-title">{ brand }</h3>
                    <h4 className="card-sub-title">{ name }</h4>
                </div>

                <div className="body-content div-padding">
                    <p className="content">{ details }</p>
                </div>    
            </div>

            <div className="flex-row div-padding">
                <div className="flex-card"> 
                    <div class="flex-card">
                        <span className="bold-large">₹{price}</span>  
                        <span className="text-strike-through">₹{discount}</span>
                        <span className="text-lightblue">({offer}% off)</span>  
                                
                    </div>
                    <span className="rating-span">{rating}⭐</span> 
                </div>
            </div>

            <div className="card-footer flex center div-padding">
                <div class="btn-with-icon">
                    <span class="material-icons">shopping_cart</span>
                    <Link  class="btn-w-icon"  to="#"> Add to cart</Link> 
                </div>  
            </div>
        </div>   
    )

}