"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./create-product.module.css";


export default function CreateProductPage() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("Ceramics");
	const [image, setImage] = useState("");
	const [editingIndex, setEditingIndex] = useState<number | null>(null);

	const [products, setProducts] = useState<
		{
			name: string;
			price: string;
			description: string;
			category: string;
			image: string
		}[]
	>([]);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		if (!name || !price || !description || !image) {
			alert("Please fill in all fields.");
			return;
		}

		const numericPrice = Number(price);

		if (isNaN(numericPrice) || numericPrice <= 0) {
			alert("Please enter a valid number for the price.");
			return;
		}

		const newProduct = {
			name,
			price,
			description,
			category,
			image,
		};

		if (editingIndex !== null) {
			const updatedProducts = [...products];

			updatedProducts[editingIndex] = newProduct;

			setProducts(updatedProducts);

			setEditingIndex(null);
		} else {
			setProducts([...products, newProduct]);
		}

		setName("");
		setPrice("");
		setDescription("");
		setCategory("Ceramics");
		setImage("");

	};

	const handleDelete = (indexToDelete: number) => {
		const confirmDelete = window.confirm(
			"Are you sure you want to delete this product?"
		);

		if (confirmDelete) {
			setProducts(
				products.filter((_, index) => index !== indexToDelete)
			);
		}
	};

	const handleEdit = (indexToEdit: number) => {
		const product = products[indexToEdit];

		setName(product.name);
		setPrice(product.price);
		setDescription(product.description);
		setCategory(product.category);
		setImage(product.image);

		setEditingIndex(indexToEdit);
	};

	return (
		<main className={styles.container}>
			<h1 className={styles.title}>Create Product Listing</h1>
			<div className={styles.card}>

			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.field}>
					<label htmlFor="name">Product Name</label>

					<input
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>

				<div className={styles.field}>
					<label htmlFor="price">Price</label>

					<input
						type="number"
						id="price"
						name="price"
						min="0.01"
						step="0.01"
						value={price}
						onChange={(event) => setPrice(event.target.value)}
					/>
				</div>

				<div className={styles.field}>
					<label htmlFor="description">
						Description
					</label>

					<textarea
						id="description"
						name="description"
						value={description}
						onChange={(event) => setDescription(event.target.value)}
					/>
				</div>

				<div className={styles.field}>
					<label htmlFor="category">
						Category
					</label>

					<select
						id="category"
						name="category"
						value={category}
						onChange={(event) => setCategory(event.target.value)}
					>
						<option value="Ceramics">
							Ceramics
						</option>

						<option value="Wood">
							Wood
						</option>

						<option value="Textiles">
							Textiles
						</option>
					</select>
				</div>

					<div className={styles.field}>
						<label htmlFor="image">Image URL</label>

						<input
							type="text"
							id="image"
							name="image"
							value={image}
							onChange={(event) => setImage(event.target.value)}
						/>
					</div>

					<button type="submit" className={styles.button}>
						{editingIndex !== null ? "Update Product" : "Create Product"}
					</button>
			</form>

			{products.length > 0 && (
				<section className={styles.productsSection}>
					<h2>Created Products</h2>

					<div className={styles.productsList}>
						{products.map((product, index) => (

							<div key={index} className={styles.productCard}>

								<h3>{product.name}</h3>
								<p className={styles.productPrice}>
									<strong>Price: </strong>
									${Number(product.price).toFixed(2)}
								</p>
								<p>
									<strong>Description:</strong> {product.description}
								</p>
								<p>
									<strong>Category:</strong> {product.category}
								</p>

								{product.image && (
									<img
										src={product.image}
										alt={product.name}
										className={styles.productImage}
									/>
								)}

								<button
									type="button"
									onClick={() => handleEdit(index)}
									className={styles.editButton}
								>
									Edit Product
								</button>

								<button
									type="button"
									onClick={() => handleDelete(index)}
									className={styles.deleteButton}
								>
									Delete Product
								</button>
							</div>
						))}
					</div>
				</section>
			)}

				<Link
					href="/seller"
					className={styles.backLink}
				>
					← Back to Seller Profile
				</Link>
			</div>
		</main>
	);
}