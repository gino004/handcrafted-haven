"use client";

import { useState } from "react";
import styles from "./FeaturedProducts.module.css";
import ProductCard from "./ProductCard";

const products = [
	{
		id: "ceramic-mug",
		name: "Handmade Ceramic Mug",
		price: "$24.99",
		category: "Ceramics",
		reviews: [
			{
				name: "Maria",
				comment: "Beautiful mug and excellent quality!",
			},
			{
				name: "John",
				comment: "I love the handmade design.",
			},
		],
	},
	{
		id: "wooden-bowl",
		name: "Wooden Bowl",
		price: "$39.99",
		category: "Wood",
		reviews: [
			{
				name: "Anna",
				comment: "Very beautiful and well crafted.",
			},
			{
				name: "David",
				comment: "Perfect for my kitchen.",
			},
		],
	},
	{
		id: "woven-basket",
		name: "Woven Basket",
		price: "$19.99",
		category: "Textiles",
		reviews: [
			{
				name: "Sofia",
				comment: "Beautiful and practical basket!",
			},
			{
				name: "Michael",
				comment: "Great quality and fast delivery.",
			},
		],
	},
];

export default function FeaturedProducts() {
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState("All");

	const filteredProducts = products.filter((product) => {
		const matchesSearch = product.name
			.toLowerCase()
			.includes(search.toLowerCase());

		const matchesCategory = category === "All" || product.category === category;

		return matchesSearch && matchesCategory;
	});

	return (
		<section className={styles.products}>
			<h2>Featured Products</h2>

			<input
				type="text"
				placeholder="Search products..."
				value={search}
				onChange={(event) => setSearch(event.target.value)}
				className={styles.search}
			/>

			<select
				value={category}
				onChange={(event) => setCategory(event.target.value)}
				className={styles.filter}
			>
				<option value="All">All Categories</option>
				<option value="Ceramics">Ceramics</option>
				<option value="Wood">Wood</option>
				<option value="Textiles">Textiles</option>
			</select>

			{filteredProducts.length > 0 ? (
				<div className={styles.grid}>
					{filteredProducts.map((product) => (
						<ProductCard
							key={product.id}
							id={product.id}
							name={product.name}
							price={product.price}
						/>
					))}
				</div>
			) : (
				<p className={styles.noResults}>
					No products found.
				</p>
			)}
		</section>
	);
}