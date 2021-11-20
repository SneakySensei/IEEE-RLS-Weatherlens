import React from "react";
import styled from "styled-components";

const HumidityCard = styled.article`
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
		font-size: 40pt;

		span {
			font-size: 18pt;
		}
	}
`;

const Humidity = ({ humidity }) => {
	return (
		<HumidityCard>
			<h2>Humidity</h2>
			<div>
				{humidity}
				<span> %</span>
			</div>
		</HumidityCard>
	);
};

export default Humidity;
