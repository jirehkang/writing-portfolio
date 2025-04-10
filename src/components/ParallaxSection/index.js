import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./ParallaxSection.module.css";
import ScrollIcon from "../ScrollIcon";

export default function ParallaxSection() {
	const alignCenter = { display: "flex", alignItems: "center" };
	return (
		<div className={styles.background}>
			<Parallax pages={4}>
				<ParallaxLayer
					offset={0}
					speed={0.5}
					style={{ ...alignCenter, justifyContent: "center" }}
				>
					<div className={styles.introText}>
						<div className={styles.introTextContainer}>
							<p className={styles.myName}>Jireh</p>
							<p className={styles.myName}>Kang</p>
						</div>
						<div className={styles.introTextContainer}>
							<p className={styles.jobTitle}>Technical</p>
							<p className={styles.jobTitle}>Writer</p>
						</div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={0.35}
					speed={0.5}
					style={{ ...alignCenter, justifyContent: "center" }}
				>
					<ScrollIcon></ScrollIcon>
				</ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={0.5}
					style={{ ...alignCenter, justifyContent: "center" }}
				>
					<div className={styles.sectionTitle}>
						<p>Work</p>
					</div>
					<section className={styles.cardContainer}>
						<div className={`${styles.card} ${styles.purple}`}>
							<p>I'm not</p>
						</div>
						<div className={`${styles.card} ${styles.purple}`}>
							<p>I'm not</p>
						</div>
						<div className={`${styles.card} ${styles.purple}`}>
							<p>I'm not</p>
						</div>
						<div className={`${styles.card} ${styles.purple}`}>
							<p>I'm not</p>
						</div>
						<div className={`${styles.card} ${styles.purple}`}>
							<p>I'm not</p>
						</div>
						<div className={`${styles.card} ${styles.purple}`}>
							<p>I'm not</p>
						</div>
					</section>
				</ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={0.5}
					style={{ ...alignCenter, justifyContent: "center" }}
				>
					<div className={styles.sectionTitle}>
						<p>About me</p>
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}
