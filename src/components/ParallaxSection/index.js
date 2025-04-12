import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./ParallaxSection.module.css";
import ScrollIcon from "../ScrollIcon";

export default function ParallaxSection() {
	const alignCenter = { display: "flex", alignItems: "center" };
	return (
		<div className={styles.background}>
			<Parallax pages={3}>
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

				<ParallaxLayer offset={1} speed={0.5}>
					<div className={styles.workContainer}>
						<section className={styles.workLayerTitle}>
							<p>Work</p>
						</section>
						<section className={styles.cardContainer}>
							<a href="/writing-portfolio/projects/api-reference">
								<div className={styles.card}>
									<p className={styles.cardTitle}>API reference</p>
								</div>
							</a>
							<a href="/writing-portfolio/projects/sdk-documentation">
								<div className={styles.card}>
									<p className={styles.cardTitle}>SDK documentation</p>
								</div>
							</a>
							<a href="/writing-portfolio/projects/user-guide">
								<div className={styles.card}>
									<p className={styles.cardTitle}>User guide</p>
								</div>
							</a>
							<a href="/writing-portfolio/projects/concept-explainer">
								<div className={styles.card}>
									<p className={styles.cardTitle}>Concept explainer</p>
								</div>
							</a>
							<a href="/writing-portfolio/projects/method-terminology">
								<div className={styles.card}>
									<p className={styles.cardTitle}>Method terminology</p>
								</div>
							</a>
							<a href="/writing-portfolio//projects/ux-writing">
								<div className={styles.card}>
									<p className={styles.cardTitle}>UX writing</p>
								</div>
							</a>
						</section>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={0.5}
					style={{ ...alignCenter, justifyContent: "center" }}
				>
					<section className={styles.sectionTitle}>
						<p>About me</p>
					</section>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}
