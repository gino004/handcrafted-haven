import styles from "./FeaturedProducts.module.css";
import ProductCard from "./ProductCard";

const products = [
	{ name: "Handmade Ceramic Mug", price: "$24.99" },
	{ name: "Wooden Bowl", price: "$39.99" },
	{ name: "Woven Basket", price: "$19.99" },
];

export default function FeaturedProducts() {
	return (
		<section className={styles.products}>
			<h2>Featured Products</h2>

			<div className={styles.grid}>
				{products.map((product) => (
					<ProductCard
						key={product.name}
						name={product.name}
						price={product.price}
					/>
				))}
			</div>
		</section>
	);
}