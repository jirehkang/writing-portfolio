import React from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
	return (
		<div className={styles.contactContainer}>
			<section>
				<h2>Get in touch</h2>
				<p>
					Have a question about my work, want to chat about a project, or just
					want to say hi?
				</p>
				<p>I'd love to hear from you!</p>
				<p>
					You can reach me via <a href="mailto:jireh.k.kang@gmail.com">email</a>{" "}
					or
					<a href="https://www.linkedin.com/in/jirehkang/">LinkedIn.</a>
				</p>
			</section>
		</div>
	);
}
