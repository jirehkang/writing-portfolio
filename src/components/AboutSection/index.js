import React from "react";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
	return (
		<div className={styles.background}>
			<section className={styles.introText}>
				<div className={styles.introTextContainer}>
					<p className={styles.myName}>Jireh</p>
					<p className={styles.myName}>Kang</p>
				</div>
				<div className={styles.introTextContainer}>
					<p className={styles.jobTitle}>Technical</p>
					<p className={styles.jobTitle}>Writer</p>
				</div>
			</section>
		</div>
	);
}
