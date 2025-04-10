import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./ParallaxSection.module.css";

export default function ParallaxSection() {
	const alignCenter = { display: "flex", alignItems: "center" };
	return (
		<div>
			<div className={styles.background} />
			<Parallax pages={5}>
				<ParallaxLayer
					offset={0}
					speed={0.5}
					style={{ ...alignCenter, justifyContent: "center" }}
				>
					<div className={styles.introText}>
						<p className={styles.myName}>Jireh Kang</p>
						<p className={styles.jobTitle}>Technical Writer</p>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					sticky={{ start: 1, end: 3 }}
					style={{ ...alignCenter, justifyContent: "flex-start" }}
				>
					<div className={`${styles.card} ${styles.sticky}`}>
						<p>I'm a sticky layer</p>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={1.5}
					speed={1.5}
					style={{ ...alignCenter, justifyContent: "flex-end" }}
				>
					<div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
						<p>I'm not</p>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={2.5}
					speed={1.5}
					style={{ ...alignCenter, justifyContent: "flex-end" }}
				>
					<div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
						<p>Neither am I</p>
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}
