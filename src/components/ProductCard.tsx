import styles from "./ProductCard.module.css";
import Link from "next/link";

type ProductCardProps = {
	id: string;
	name: string;
	price: string;
};

export default function ProductCard({
	id,
	name,
	price,
}: ProductCardProps) {
	return (
		<div className={styles.card}>
			<h3>{name}</h3>

			<p>{price}</p>

			<Link href={`/products/${id}`} className={styles.button}>
				View Details
			</Link>
		</div>
	);
}