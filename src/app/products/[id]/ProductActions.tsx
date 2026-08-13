"use client";

import styles from "./product.module.css";

type ProductActionsProps = {
	name: string;
	price: string;
};

export default function ProductActions({
	name,
	price,
}: ProductActionsProps) {
	const handleAddToCart = () => {
		const product = {
			name,
			price,
		};

		const existingCart = localStorage.getItem("cart");

		const cart = existingCart ? JSON.parse(existingCart) : [];

		cart.push(product);

		localStorage.setItem("cart", JSON.stringify(cart));

		console.log("Product added to cart:", product);
	};

	return (
		<button
			className={styles.cartButton}
			type="button"
			onClick={handleAddToCart}
		>
			Add to Cart
		</button>
	);
}