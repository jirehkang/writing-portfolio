import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import ParallaxSection from "@site/src/components/ParallaxSection";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				{/* <div className={styles.buttons}>  
                	<Link>
                   		className="button button--secondary button--lg"
                   		to="/docs/intro">
                   		Docusaurus Tutorial - 5min ⏱️
                	</Link>
              	</div>
        	*/}
			</div>
		</header>
	);
}

export default function Home() {
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
