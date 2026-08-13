"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./checkout.module.css";

type CartProduct = {
	name: string;
	price: string;
};

export default function CheckoutPage() {
	const [cart, setCart] = useState<CartProduct[]>([]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => {
		const savedCart = localStorage.getItem("cart");

		if (savedCart) {
			setCart(JSON.parse(savedCart));
		}
	}, []);

	const total = cart.reduce((sum, product) => {
		const price = Number(product.price.replace("$", ""));
		return sum + price;
	}, 0);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (name.trim() === "") {
			setMessage("Please enter your name.");
			return;
		}

		if (email.trim() === "") {
			setMessage("Please enter your email.");
			return;
		}

		if (!email.includes("@")) {
			setMessage("Please enter a valid email.");
			return;
		}

		setMessage("Order placed successfully!");
		localStorage.removeItem("cart");
		setCart([]);
	};

	if (cart.length === 0 && message === "") {
		return (
			<main>
				<h1>Your cart is empty</h1>

				<p>Add some products before checking out.</p>

				<Link href="/">Continue Shopping</Link>
			</main>
		);
	}

	return (
		<main className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Checkout</h1>

				<div className={styles.checkoutGrid}>
					<section className={styles.summary}>
						<h2>Order Summary</h2>

						<div className={styles.products}>
							{cart.map((product, index) => (
								<div
									className={styles.product}
									key={`${product.name}-${index}`}
								>
									<span>{product.name}</span>
									<span>{product.price}</span>
								</div>
							))}
						</div>

						<div className={styles.total}>
							<h3>Total: ${total.toFixed(2)}</h3>
						</div>
					</section>

					<form
						className={styles.form}
						onSubmit={handleSubmit}
					>
						<h2>Your Information</h2>

						<div className={styles.field}>
							<label htmlFor="name">Name</label>

							<input
								type="text"
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className={styles.field}>
							<label htmlFor="email">Email</label>

							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<button
							className={styles.submitButton}
							type="submit"
						>
							Place Order
						</button>

						{message && (
							<p className={styles.message}>{message}</p>
						)}
					</form>
				</div>
			</div>
		</main>
	);
}