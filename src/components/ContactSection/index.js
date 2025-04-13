import React from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
	return (
		<div className={styles.contactContainer}>
			<section>
				<h2>Get in touch</h2>
				<p>
					Curious about my work, got a project in mind, or just want to say hi?
				</p>
				<p>I'd love to hear from you!</p>
				<p>
					Learn more <a href="/writing-portfolio/about">about me</a>, or reach
					me via <a href="mailto:jireh.k.kang@gmail.com">email</a> or{" "}
					<a href="https://www.linkedin.com/in/jirehkang/">LinkedIn.</a>
				</p>
			</section>
		</div>
	);
}
