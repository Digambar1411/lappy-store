import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import "./products.css";
import { products as data } from '../../../backend/db/products';
import { ProductCard } from "../../components/ecomcards/ProductCard";
import { useFilter } from "../../contexts/filter-context";
import { Sidebar } from "../../components/sidebar/sidebar";
import { sortBypriceFunc,
        filterByPriceRangeFunc,
        filterByBrandFunc,
        filterByRatingFunc 
    } from "../../utils/filter-functions";


export function Products(){

    const {state } = useFilter();

    const {sortPrice, priceRange, brands,ratings} = state;

    const sortedProducts = sortBypriceFunc(data,sortPrice); 
    const priceRangeFilteredProducts = filterByPriceRangeFunc(sortedProducts, priceRange); 
    const brandFilterProducts = filterByBrandFunc(priceRangeFilteredProducts, brands) 
    const finalProducts = filterByRatingFunc(brandFilterProducts, ratings)
        
    return(
        <>
            {<Navbar/>}
            <div className="main-products-page">

               {<Sidebar/>}
               
                <div className="main-bar">
                    <p className ="main-bar-heading">All products ({finalProducts.length})</p>
                                      
                    <div className="product-card-container">
                        {finalProducts && finalProducts.map((product)=>(<ProductCard {...product}  /> ))}
                    </div>
                </div>

            </div>
            {<Footer/>}
        </>
    
    )

}