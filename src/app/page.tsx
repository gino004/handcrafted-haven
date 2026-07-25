import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			
			 <Header />
			 <main className={styles.main}>
				<Hero />
				<Categories />

			</main>
		</div>
	);
}