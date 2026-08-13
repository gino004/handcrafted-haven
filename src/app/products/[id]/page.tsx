import Link from "next/link";
import styles from "./product.module.css";
import ProductActions from "./ProductActions";
import ProductReviews from "../../../components/ProductReviews";


type Review = {
	name: string;
	comment: string;
};

type Product = {
	name: string;
	price: string;
	description: string;
	category: string;
	reviews: Review[];
};

const products: Record<string, Product> = {
	"ceramic-mug": {
		name: "Handmade Ceramic Mug",
		price: "$24.99",
		description:
			"A unique handmade ceramic mug crafted with care by talented artisans.",
		category: "Ceramics",
		reviews: [
			{
				name: "John Doe",
				comment: "Beautiful craftsmanship!",
			},
			{
				name: "Jane Smith",
				comment: "I love this mug.",
			},
		],
	},

	"wooden-bowl": {
		name: "Wooden Bowl",
		price: "$39.99",
		description:
			"A beautiful handmade wooden bowl, perfect for your home and everyday use.",
		category: "Wood",
		reviews: [
			{
				name: "Alice Johnson",
				comment: "Very beautiful and well crafted.",
			},
			{
				name: "Bob Williams",
				comment: "Perfect for my kitchen.",
			},
		],
	},

	"woven-basket": {
		name: "Woven Basket",
		price: "$19.99",
		description:
			"A handcrafted woven basket made with traditional techniques and quality materials.",
		category: "Textiles",
		reviews: [
			{
				name: "Charlie Brown",
				comment: "Beautiful and practical basket!",
			},
			{
				name: "Diana Miller",
				comment: "Great quality and fast delivery.",
			},
		],
	},
};

export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const product = products[id];

	if (!product) {
		return (
			<main className={styles.container}>
				<div className={styles.card}>
					<h1>Product Not Found</h1>
					<p>The product you are looking for does not exist.</p>
					<Link href="/">Back to Home</Link>
				</div>
			</main>
		);
	}

	return (
		<main className={styles.container}>
			<div className={styles.card}>
				<div className={styles.info}>
					<p className={styles.category}>{product.category}</p>

					<h1>{product.name}</h1>

					<p className={styles.price}>{product.price}</p>

					<p className={styles.description}>{product.description}</p>

					<ProductReviews initialReviews={product.reviews} />

					<ProductActions name={product.name} price={product.price}/>

					<Link href="/" className={styles.backLink}>
						Back to Home
					</Link>
				</div>
			</div>
		</main>
	);
}