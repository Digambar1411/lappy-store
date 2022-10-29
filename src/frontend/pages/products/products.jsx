import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import "./products.css";
import { ProductCard } from "../../components/ecomcards/ProductCard";
import { useFilter } from "../../contexts/filter-context";
import { Sidebar } from "../../components/sidebar/sidebar";
import {
	sortBypriceFunc,
	filterByPriceRangeFunc,
	filterByBrandFunc,
	filterByRatingFunc,
	filterByCategoryFunc,
} from "../../utils/filter-functions";
import axios from "axios";

export function Products() {
	const { state } = useFilter();
	const { sortPrice, priceRange, brands, ratings, category } = state;

	const [products, setProducts] = useState([]);

	const categoryProducts = filterByCategoryFunc(products, category);
	const sortedProducts = sortBypriceFunc(categoryProducts, sortPrice);
	const priceRangeFilteredProducts = filterByPriceRangeFunc(
		sortedProducts,
		priceRange
	);
	const brandFilterProducts = filterByBrandFunc(
		priceRangeFilteredProducts,
		brands
	);
	const finalProducts = filterByRatingFunc(brandFilterProducts, ratings);

	const getProducts = async () => {
		const response = await axios.get("/api/products");
		setProducts(response.data.products);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<>
			{<Navbar />}
			<div className="main-products-page">
				{<Sidebar />}
				<div className="main-bar">
					<p className="main-bar-heading">
						All products ({finalProducts.length})
					</p>
					<div className="product-card-container">
						{finalProducts &&
							finalProducts.map((product) => (
								<ProductCard {...product} key={product.id} />
							))}
					</div>
				</div>
			</div>
			{<Footer />}
		</>
	);
}
