import React from "react";
import styled from "styled-components";

const VisibilityCard = styled.article`
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

const Visibility = ({ visibility = 0 }) => {
	return (
		<VisibilityCard>
			<h2>Visibility</h2>
			<div>
				{visibility.toPrecision(3)}
				<span> km</span>
			</div>
		</VisibilityCard>
	);
};

export default Visibility;
