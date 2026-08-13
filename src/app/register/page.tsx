"use client";

import { useState } from "react";
import styles from "./register.module.css";

export default function RegisterPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (name.trim() === "") {
			setMessage("Please enter your name.");
			return;
		}

		if (email.trim() === "") {
			setMessage("Please enter your email.");
			return;
		}

		if (!email.includes("@")) {
			setMessage("Please enter a valid email.");
			return;
		}

		if (password.trim() === "") {
			setMessage("Please enter your password.");
			return;
		}

		if (password.length < 6) {
			setMessage("Password must be at least 6 characters.");
			return;
		}

		setMessage("Account created successfully!");
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Handcrafted Haven</h1>
				<h2>Create Account</h2>

				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.inputGroup}>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
					</div>

					<div className={styles.inputGroup}>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
					</div>

					<div className={styles.inputGroup}>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
					</div>
					<button type="submit">Create Account</button>
					{message && (<p className={styles.message}>{message}</p>)}
				</form>

				<p className={styles.footer}>
					Already have an account? <a href="/login">Sign In</a>
				</p>
			</div>
		</div>
	);
}