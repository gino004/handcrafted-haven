import styles from "./Categories.module.css";

export default function Categories() {
	const categories = [
		{icon: "🏺", title: "Ceramics"},
		{icon: "💍", title: "Jewelry"},
		{icon: "🪵", title: "Wood"},
		{icon: "🧵", title: "Textiles"},
	];

	return (
		<section className={styles.categories}>
			<h2>Featured Categories</h2>

			<div className={styles.grid}>
				{categories.map((category) => (
					<div className={styles.card} key={category.title}>
						<span>{category.icon}</span>
						<h3>{category.title}</h3>
					</div>
				))}
			</div>
			
		</section>
	);
}