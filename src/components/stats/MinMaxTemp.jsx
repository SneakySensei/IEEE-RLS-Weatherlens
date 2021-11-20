import React from "react";

const MinMaxTemp = ({ minTemp, maxTemp, unit }) => {
	return (
		<article className="min-max-temp">
			<h2>Min/Max Temperature</h2>
			<div>
				{maxTemp}°{unit} <span>Max</span>
			</div>
			<div className="separator">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6 3L2 7M6 3V21V3ZM6 3L10 7L6 3Z"
						stroke="black"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M18 21L14 17M18 21V3V21ZM18 21L22 17L18 21Z"
						stroke="black"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<hr />
			</div>
			<div>
				{minTemp}°{unit} <span>Min</span>
			</div>
		</article>
	);
};

export default MinMaxTemp;
