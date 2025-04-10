import React from "react";
import style from "./InteractiveButton.module.css";

export default function ViewProjectBtn({ url, children }) {
	return (
		<a href={url} target="_blank" rel="noopener noreferrer">
			<button className={style.interactiveButton} role="button">
				{children}
			</button>
		</a>
	);
}
