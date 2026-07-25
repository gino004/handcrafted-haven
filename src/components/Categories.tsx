import styles from "./Categories.module.css";

export default function Categories() {
	const categories = [
		{ icon: "🏺", title: "Ceramics", description: "Handcrafted pottery and decorative ceramics." },
		{ icon: "💍", title: "Jewelry", description: "Unique handmade rings, necklaces, and bracelets."  },
		{ icon: "🪵", title: "Wood", description: "Beautiful wooden furniture and decorations." },
		{ icon: "🧵", title: "Textiles", description: "Handwoven fabrics, clothing, and accessories." },
	];

	return (
		<section className={styles.categories}>
			<h2>Featured Categories</h2>

			<div className={styles.grid}>
				{categories.map((category) => (
					<div className={styles.card} key={category.title}>
						<span>{category.icon}</span>
						<h3>{category.title}</h3>
						<p>{category.description}</p>
					</div>
				))}
			</div>

		</section>
	);
}