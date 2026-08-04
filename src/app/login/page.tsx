"use client";

import { useState } from "react";
import styles from "./login.module.css";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (email.trim() === "") {
			setIsSuccess(false);
			setMessage("Please enter your email.");
			return;
		}

		if (!email.includes("@")) {
			setIsSuccess(false);
			setMessage("Please enter a valid email.");
			return;
		}

		if (password.trim() === "") {
			setIsSuccess(false);
			setMessage("Please enter your password.");
			return;
		}

		if (password.length < 6) {
			setIsSuccess(false);
			setMessage("Password must be at least 6 characters.");
			return;
		}
		setIsSuccess(true);
		setMessage("Login successful!");
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Handcrafted Haven</h1>
				<h2>Welcome Back</h2>

				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.inputGroup}>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
					</div>

					<div className={styles.inputGroup}>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
					</div>

					<button type="submit">Sign In</button>
					{message && (
						<p className={isSuccess ? styles.success : styles.error}>
							{message}
						</p>
					)}
				</form>

				<p className={styles.footer}>
					Don't have an account? <a href="#">Create Account</a>
				</p>
			</div>
		</div>
	);
}