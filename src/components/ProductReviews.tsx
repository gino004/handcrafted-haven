"use client";

import { useState } from "react";
import styles from "./ProductReviews.module.css";

type Review = {
	name: string;
	comment: string;
};

type ProductReviewsProps = {
	initialReviews: Review[];
};

export default function ProductReviews({
	initialReviews,
}: ProductReviewsProps) {
	const [reviews, setReviews] = useState(initialReviews);
	const [name, setName] = useState("");
	const [comment, setComment] = useState("");

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		if (name.trim() === "" || comment.trim() === "") {
			return;
		}

		const newReview = {
			name,
			comment,
		};

		setReviews([...reviews, newReview]);

		setName("");
		setComment("");
	};

	return (
		<div className={styles.reviews}>
			<h2 className={styles.title}>Customer Reviews</h2>

			{reviews.map((review, index) => (
				<div
					className={styles.review}
					key={`${review.name}-${index}`}
				>
					<h3 className={styles.reviewName}>
						{review.name}
					</h3>

					<p className={styles.reviewComment}>
						{review.comment}
					</p>
				</div>
			))}

			<form
				className={styles.form}
				onSubmit={handleSubmit}
			>
				<h2 className={styles.formTitle}>
					Write a Review
				</h2>

				<div className={styles.field}>
					<label htmlFor="reviewName">Your Name</label>

					<input
						type="text"
						id="reviewName"
						value={name}
						onChange={(event) =>
							setName(event.target.value)
						}
					/>
				</div>

				<div className={styles.field}>
					<label htmlFor="reviewComment">
						Your Review
					</label>

					<textarea
						id="reviewComment"
						value={comment}
						onChange={(event) =>
							setComment(event.target.value)
						}
					/>
				</div>

				<button
					className={styles.submitButton}
					type="submit"
				>
					Submit Review
				</button>
			</form>
		</div>
	);
}