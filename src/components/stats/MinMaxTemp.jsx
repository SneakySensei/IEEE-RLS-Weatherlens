import React from "react";
import styled from "styled-components";

const MinMaxCard = styled.article`
	background-color: white;
	border-radius: 16px;
	min-height: 220px;
	box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
	padding: 1rem;

	h2 {
		font-size: 14pt;
		font-weight: normal;
		color: #888;
		margin-bottom: 2rem;
	}

	div {
		font-size: 24pt;
		margin-left: 40px;
		font-weight: 700;

		span {
			font-size: 12pt;
		}
	}

	.separator {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-left: 0;

		hr {
			width: 96px;
			border: 1px solid black;
		}
	}
`;

const MinMaxTemp = ({ minTemp = 0, maxTemp = 0, unit }) => {
	return (
		<MinMaxCard>
			<h2>Min/Max Temperature</h2>
			<div>
				{maxTemp.toPrecision(2)}°{unit} <span>Max</span>
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
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M18 21L14 17M18 21V3V21ZM18 21L22 17L18 21Z"
						stroke="black"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<hr />
			</div>
			<div>
				{minTemp.toPrecision(2)}°{unit} <span>Min</span>
			</div>
		</MinMaxCard>
	);
};

export default MinMaxTemp;
