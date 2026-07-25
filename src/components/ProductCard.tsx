import styles from "./ProductCard.module.css";

type ProductCardProps = {
	name: string;
	price: string;
};

export default function ProductCard({
	name,
	price,
}: ProductCardProps) {
	return (
		<div className={styles.card}>
			<h3>{name}</h3>

			<p>{price}</p>

			<button>View Details</button>
		</div>
	);
}