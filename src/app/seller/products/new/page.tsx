import Link from "next/link";

export default function CreateProductPage() {
	return (
		<main>
			<h1>Create Product Listing</h1>

			<form>
				<div>
					<label htmlFor="name">Product Name</label>
					<input
						type="text"
						id="name"
						name="name"
					/>
				</div>

				<div>
					<label htmlFor="price">Price</label>
					<input
						type="text"
						id="price"
						name="price"
					/>
				</div>

				<div>
					<label htmlFor="description">
						Description
					</label>

					<textarea
						id="description"
						name="description"
					/>
				</div>

				<div>
					<label htmlFor="category">
						Category
					</label>

					<select
						id="category"
						name="category"
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

				<button type="submit">
					Create Product
				</button>
			</form>

			<Link href="/seller">
				Back to Seller Profile
			</Link>
		</main>
	);
}