import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function ScrollIcon() {
	return (
		<Player
			autoplay
			loop
			src="https://lottie.host/0862e45d-6327-4f4b-8727-f76ea373c042/7SMUYNo8Zj.json"
			style={{
				height: "clamp(3.5rem, 3vw, 5rem)",
				width: "clamp(3.5rem, 3vw, 5rem)",
			}}
		>
			<Controls
				visible={false}
				buttons={["play", "repeat", "frame", "debug"]}
			/>
		</Player>
	);
}
