import styles from "./Hero.module.css";

export default function Hero() {
	return (
		<section className={styles.hero}>
			<h1>Handcrafted Haven</h1>

			<p>
				Discover unique handmade creations crafted with passion by talented
				artisans.
			</p>

			<div className={styles.buttons}>
				<button>Explore Products</button>
				<button>Become a Seller</button>
			</div>
		</section>
	);
}