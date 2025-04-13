import React from "react";
import styles from "./IntroSection.module.css";
import ScrollIcon from "../ScrollIcon";

export default function IntroSection() {
	return (
		<div className={styles.introContainer}>
			<section className={styles.introSection}>
				<div className={styles.introTextContainer}>
					<p className={styles.myName}>Jireh</p>
					<p className={styles.myName}>Kang</p>
				</div>
				<div className={styles.introTextContainer}>
					<p className={styles.jobTitle}>Technical</p>
					<p className={styles.jobTitle}>Writer</p>
				</div>
				<div className={styles.scrollIcon}>
					<ScrollIcon />
				</div>
			</section>
		</div>
	);
}
