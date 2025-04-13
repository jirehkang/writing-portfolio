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
						Hi, I'm a technical writer and content strategist based in the San
						Francisco Bay Area.
					</p>
					<p>
						I craft user-friendly content, enhance documentation experiences,
						and streamline writing workflows, whether it's for developer docs,
						user guides, or in-product UX writing.
					</p>
					<p>
						I love exploring HTML, CSS, and JavaScript to better understand and
						improve website UX. This site is a personal project I built and
						styled, serving as both a learning experience and a creative outlet.
					</p>
					<p>
						Outside of work, you'll find me sketching on my iPad (including the
						basket of favorite things featured here), trying out new recipes in
						the kitchen, or obsessively keeping up a 3+ year Duolingo streak.
					</p>
					<p>
						Take a look at my{" "}
						<a
							href="files/jireh-kang-resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							resume
						</a>{" "}
						or reach out via <a href="mailto:jireh.k.kang@gmail.com">email</a>{" "}
						or <a href="https://www.linkedin.com/in/jirehkang/">LinkedIn</a>!
					</p>
				</div>
			</div>
		</Layout>
	);
}
