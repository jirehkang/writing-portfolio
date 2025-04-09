import React from "react";
import styles from "./ViewProjectBtn.module.css";

export default function ViewProjectBtn({ url, children }) {
	return (
		<a
			className={styles.viewProjectBtn}
			href={url}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
}
