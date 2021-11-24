import React from "react";
import styled from "styled-components";

const AirQualityCard = styled.article`
	background-color: white;
	border-radius: 16px;
	min-height: 220px;
	box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
	padding: 1rem;
	display: flex;
	flex-direction: column;

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
	footer {
		margin-top: auto;
	}
`;

const statusStrings = {
	1: "Good",
	2: "Fair",
	3: "Moderate",
	4: "Poor",
	5: "Very Poor",
};

const AirQuality = ({ indexValue }) => {
	return (
		<AirQualityCard>
			<h2>Air Quality</h2>
			<div>{indexValue}</div>
			<footer>{statusStrings[indexValue]}</footer>
		</AirQualityCard>
	);
};

export default AirQuality;
