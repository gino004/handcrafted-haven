import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.content}>
				<h1>Handcrafted Haven</h1>

				<p>
					Discover unique handmade creations crafted with passion by talented
					artisans.
				</p>

				<div className={styles.buttons}>
					<button>Explore Products</button>
					<button className={styles.secondary}>Become a Seller</button>
				</div>
			</div>

			<div className={styles.imageContainer}>
				<Image
					src="/images/hero.png"
					alt="Handcrafted products"
					width={600}
					height={400}
				/>
			</div>
		</section>
	);
}