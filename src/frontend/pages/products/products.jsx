import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import {Link } from "react-router-dom";
import "./products.css";
import { products as data } from '../../../backend/db/products';
import { ProductCard } from "../../components/ecomcards/ProductCard";

export function Products(){

    
    return(
        <>
            {<Navbar/>}
            <div className="main-products-page">
                <div className="aside">
                    <div className="flex flex-space-btwn">
                        <p className="filter-heading">FILTERS</p>
                        <Link className="filterClear" to="/">CLEAR All</Link>
                    </div>
                    <hr className="divider flex"></hr>

                    <div className="flex-col">
                        <label htmlFor="myRange" className="filter-title">Price Range</label>
                        <input type="range" min="1" max="1000"  class="slider" id="myRange"/>
                    </div>

                    <div className="flex-col gap-1rem">
                        <p className="filter-title">Brand</p>
                        <div className="inputDiv">
                            <input type="checkbox" name="brand1" id="dell"/>
                            <label for="dell">Dell</label>
                        </div>

                        <div className="inputDiv">
                            <input type="checkbox" name="brand2" id="hp"/>
                            <label for="dell">HP</label>
                        </div>
               
                        <div className="inputDiv">
                            <input type="checkbox" name="brand3" id="asus"/>
                            <label for="dell">Asus</label>
                        </div>

                        <div className="inputDiv">
                            <input type="checkbox" name="brand4" id="lenove"/>
                            <label for="dell">Lenovo</label>
                        </div>

                        <div className="inputDiv">
                            <input type="checkbox" name="brand5" id="acer"/>
                            <label for="dell">Samsung</label>
                        </div>
                    </div>

                    <div className="flex-col gap-1rem">
                        <p className="filter-title">Rating</p>
                        <div className="inputDiv">
                            <input type="radio" name="rating" id="four"/>
                            <label for="four">4 ⭐ and above</label>
                        </div>

                        <div className="inputDiv">
                            <input type="radio" name="rating" id="three"/>
                            <label for="four">3 ⭐ and above</label>
                        </div>

                        <div className="inputDiv">
                            <input type="radio" name="rating" id="two"/>
                            <label for="four">2 ⭐ and above</label>
                        </div>

                        <div className="inputDiv">
                            <input type="radio" name="rating" id="one"/>
                            <label for="four">1 ⭐ and above</label>
                        </div>
                    </div>

                    <div className="flex-col gap-1rem">
                        <p className="filter-title">Price</p>
                        <div className="inputDiv">
                            <input type="radio" name="price" id="low"/>
                            <label for="low">Price Low-to-High</label>
                        </div>
                        <div className="inputDiv">
                            <input type="radio" name="price" id="high"/>
                            <label for="high">Price High-to-Low</label>
                        </div>
                    </div>
        
                </div>

                <div className="main-bar">
                    <p className ="main-bar-heading">Showing all the products</p>
                    <h1>Total Products {data.length}</h1>
                    
                    <div className="product-card-container">
                        
                        {data.map((product)=>(<ProductCard {...product} /> ))}

                    </div>
                </div>

            </div>
            {<Footer/>}
        </>
    
    )

}