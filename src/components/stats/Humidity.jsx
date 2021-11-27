import React from "react";
import styled from "styled-components";

const HumidityCard = styled.article`
	background-color: white;
	border-radius: 16px;
	min-height: 220px;
	box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
	padding: 1rem;
	position: relative;

	h2 {
		font-size: 14pt;
		font-weight: normal;
		color: #888;
		margin-bottom: 2rem;
	}

	div {
		font-size: 40pt;

		span {
			font-size: 18pt;
		}
	}

	.level {
		position: absolute;
		right: 1.5rem;
		bottom: 1rem;
		width: 1rem;
		height: 5rem;
		border: 1px solid black;
		border-radius: 0.5rem;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;

		div {
			background-color: #4050d2;
			height: ${(props) => props.level}%;
		}
	}
`;

const Humidity = ({ humidity }) => {
	return (
		<HumidityCard level={humidity}>
			<h2>Humidity</h2>
			<div>
				{humidity}
				<span> %</span>
			</div>

			<div className="level">
				<div></div>
			</div>
		</HumidityCard>
	);
};

export default Humidity;
