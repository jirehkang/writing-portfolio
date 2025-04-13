import React from "react";
import Layout from "@theme/Layout";
import styles from "./about.module.css";

export default function MyReactPage() {
	return (
		<Layout>
			<div className={styles.aboutContainer}>
				<img src="img/basket.png" alt="basket" className={styles.image}></img>
				<div className={styles.textContainer}>
					<h1>About</h1>
					<p></p>
					<p>
						Hi, I’m a technical writer and content strategist based in the San
						Francisco Bay Area.
					</p>
					<p>
						I specialize in creating clear, developer-friendly content—from
						API/SDK docs to UX writing and user manuals—and love working in
						cross-functional teams where structure, empathy, and usability
						matter.
					</p>
					<p>
						I enjoy using HTML, CSS, and JavaScript to improve docs UX, and
						built and styled this site as a fun side project.
					</p>
					<p>
						Outside of work, I love sketching on my iPad (like the basket of my
						favorite things you'll find here!), trying out new baking and
						cooking recipes, and keeping up a 3+ year Duolingo streak.
					</p>
					<p>
						Connect with me via{" "}
						<a href="mailto:jireh.k.kang@gmail.com">email</a> or{" "}
						<a href="https://www.linkedin.com/in/jirehkang/">LinkedIn</a>!
					</p>
				</div>
			</div>
		</Layout>
	);
}
