import React from "react";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
	return (
		<div className={styles.workContainer}>
			<section className={styles.workLayerTitle}>
				<p>Work</p>
			</section>
			<section className={styles.cardContainer}>
				<a
					className={styles.card}
					href="/writing-portfolio/projects/api-reference"
				>
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>API reference</h2>
						<p>Sendbird </p>
					</div>
				</a>
				<a
					className={styles.card}
					href="/writing-portfolio/projects/sdk-documentation"
				>
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>SDK documentation</h2>
						<p>Sendbird </p>
					</div>
				</a>
				<a
					className={styles.card}
					href="/writing-portfolio/projects/user-guide"
				>
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>User guide</h2>
						<p>Sendbird </p>
					</div>
				</a>
				<a
					className={styles.card}
					href="/writing-portfolio/projects/concept-explainer"
				>
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>Concept explainer</h2>
						<p>Codecademy </p>
					</div>
				</a>
				<a
					className={styles.card}
					href="/writing-portfolio/projects/method-terminology"
				>
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>Method terminology</h2>
						<p>Codecademy </p>
					</div>
				</a>
				<a
					className={styles.card}
					href="/writing-portfolio//projects/ux-writing"
				>
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>UX writing</h2>
						<p>Kim & Chang </p>
					</div>
				</a>
			</section>
		</div>
	);
}
