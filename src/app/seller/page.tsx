import Link from "next/link";
import styles from "./seller.module.css";

const products = [
	{
		id: "ceramic-mug",
		name: "Handmade Ceramic Mug",
		price: "$24.99",
	},
	{
		id: "wooden-bowl",
		name: "Wooden Bowl",
		price: "$39.99",
	},
	{
		id: "woven-basket",
		name: "Woven Basket",
		price: "$19.99",
	},
];

export default function SellerPage() {
	return (
		<main className={styles.container}>
			<h1 className={styles.title}>Seller Profile</h1>

			<div className={styles.profile}>
				<h2>Gino's Handmade Store</h2>

				<p className={styles.description}>
					Welcome to my store! Here you can manage your handmade products
					and keep your listings up to date.
				</p>

				<div className={styles.details}>
					<p>
						<strong>Seller:</strong> Gino
					</p>

					<p>
						<strong>Email:</strong> gino@example.com
					</p>
				</div>

				<section className={styles.products}>
					<h2>My Products</h2>

					<div className={styles.productList}>
						{products.map((product) => (
							<div className={styles.product} key={product.id}>
								<div>
									<h3>{product.name}</h3>
									<p>{product.price}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				
				<Link href="/" className={styles.backLink}>
					Back to Home
				</Link>
			</div>
		</main>
	);
}