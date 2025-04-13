import React from "react";
import styles from "./IntroSection.module.css";
import ScrollIcon from "../ScrollIcon";

export default function IntroSection() {
	return (
		<div className={styles.introContainer}>
			<section className={styles.introSection}>
				<div className={styles.introTextContainer}>
					<p className={styles.jobTitle}>Technical Writer</p>
				</div>
				<div className={styles.introTextContainer}>
					<h1 className={styles.myName}>Jireh Kang</h1>
				</div>
				<div className={styles.descriptionContainer}>
					<p>I craft user-friendly content,</p>
					<p>enhance docs UX,</p>
					<p>and optimize writing workflows.</p>
				</div>
				<div className={styles.scrollIcon}>
					<ScrollIcon />
				</div>
			</section>
		</div>
	);
}
