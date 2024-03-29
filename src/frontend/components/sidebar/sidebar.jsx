import { useFilter } from "../../contexts/filter-context";
import "../../pages/products/products.css";

const Sidebar = () => {
	const { state, dispatch } = useFilter();

	const { priceRange, ratings, brands } = state;

	const brandArray = ["lenovo", "dell", "hp", "asus", "acer", "samsung"];

	const ratingsArray = [4, 3, 2, 1];

	return (
		<div className="aside">
			<div className="aside-heading">
				<div className="flex flex-space-btwn center">
					<p className="filter-heading">FILTERS</p>
					<p
						className="filterClear text-underline"
						onClick={() => dispatch({ type: "CLEAR" })}
					>
						CLEAR
					</p>
				</div>
				<hr className="divider flex"></hr>
			</div>

			<div className="flex-col">
				<div className="flex price-range-div">
					<label htmlFor="myRange" className="filter-title">
						Price Range
					</label>
					<p className="priceRange">₹{priceRange || 150000}</p>
				</div>
				<input
					type="range"
					min="1"
					max="150000"
					className="slider"
					value={priceRange || 150000}
					onChange={(e) =>
						dispatch({
							type: "FILTER_BY_PRICE_RANGE",
							payload: e.target.value,
						})
					}
				/>
			</div>

			<div className="flex-col gap-1rem">
				<p className="filter-title">Price</p>
				<div className="inputDiv">
					<input
						className="radio-input"
						type="radio"
						name="sortBy"
						onChange={(e) => {
							dispatch({
								type: "SORT_BY_PRICE",
								payload: "LOW_TO_HIGH",
							});
						}}
					/>
					<label htmlFor="low">Price Low-to-High</label>
				</div>
				<div className="inputDiv">
					<input
						className="radio-input"
						type="radio"
						name="sortBy"
						onChange={() =>
							dispatch({
								type: "SORT_BY_PRICE",
								payload: "HIGH_TO_LOW",
							})
						}
					/>
					<label htmlFor="high">Price High-to-Low</label>
				</div>
			</div>

			<div className="flex-col gap-1rem">
				<p className="filter-title">Brand</p>
				{brandArray.map((brand) => (
					<div className="inputDiv" key={brand}>
						<input
							className="checkbox-input"
							type="checkbox"
							checked={brands && brands.includes(brand)}
							value={brand}
							onChange={() => {
								dispatch({
									type: "FILTER_BY_BRAND",
									payload: brand,
								});
							}}
						/>
						<label htmlFor={brand}>{brand}</label>
					</div>
				))}
			</div>

			<div className="flex-col gap-1rem">
				<p className="filter-title">Rating</p>
				{ratingsArray.map((rateValue) => (
					<div className="inputDiv" key={rateValue}>
						<input
							type="radio"
							className="radio-input"
							name="ratings"
							checked={ratings === rateValue}
							onChange={() =>
								dispatch({
									type: "FILTER_BY_RATING",
									payload: rateValue,
								})
							}
						/>
						<label htmlFor={rateValue}>{rateValue}⭐ and above</label>
					</div>
				))}
			</div>
		</div>
	);
};

export { Sidebar };
