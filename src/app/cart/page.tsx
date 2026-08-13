"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./cart.module.css";

type CartProduct = {
	name: string;
	price: string;
};

export default function CartPage() {
	const [cart, setCart] = useState<CartProduct[]>([]);

	useEffect(() => {
		const savedCart = localStorage.getItem("cart");

		if (savedCart) {
			setCart(JSON.parse(savedCart));
		}
	}, []);

	const removeFromCart = (indexToRemove: number) => {
		const updatedCart = cart.filter(
			(_, index) => index !== indexToRemove
		);

		setCart(updatedCart);

		localStorage.setItem("cart", JSON.stringify(updatedCart));
	};

	const clearCart = () => {
		setCart([]);
		localStorage.removeItem("cart");
	};

	const total = cart.reduce((sum, product) => {
		const price = Number(product.price.replace("$", ""));
		return sum + price;
	}, 0);

	return (
		<main className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Your Cart</h1>

				{cart.length === 0 ? (
					<div className={styles.empty}>
						<p>Your cart is empty.</p>

						<Link href="/" className={styles.link}>
							Continue Shopping
						</Link>
					</div>
				) : (
						<>
							<div className={styles.items}>
								{cart.map((product, index) => (
									<div
										className={styles.item}
										key={`${product.name}-${index}`}
									>
										<div>
											<h2>{product.name}</h2>
											<p>{product.price}</p>
										</div>

										<button
											className={styles.removeButton}
											onClick={() => removeFromCart(index)}
										>
											Remove
										</button>

									</div>
								))}
							</div>

							<div className={styles.cartActions}>
								<div className={styles.total}>
									<h2>Total: ${total.toFixed(2)}</h2>
								</div>

								<Link
									href="/checkout"
									className={styles.checkoutButton}
								>
									Checkout
								</Link>

								<button
									className={styles.clearButton}
									onClick={clearCart}
								>
									Clear Cart
								</button>
							</div>
						</>
				)}
			</div>
		</main>
	);
}