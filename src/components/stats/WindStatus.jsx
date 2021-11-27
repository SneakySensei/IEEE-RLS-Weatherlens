import React from "react";
import styled from "styled-components";
import { RiCompassDiscoverLine } from "react-icons/ri";

const WindCard = styled.article`
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

	h3 {
		font-size: 40pt;
		font-weight: 600;

		span {
			font-size: 18pt;
			font-weight: 400;
		}
	}

	footer {
		margin-top: auto;
		display: flex;
		align-items: center;
		gap: 0.5rem;

		svg {
			transform: rotate(45deg) rotate(-${(props) => props.direction}deg);
		}
	}
`;

const directionNames = ["E", "NE", "N", "NW", "W", "SW", "S", "SE"];

const WindStatus = ({ speed = 0, direction = 0, unit }) => {
	let dir = 0;
	if ((direction > 0) & (direction < 90)) {
		dir = 1;
	} else if (direction === 90) {
		dir = 2;
	} else if ((direction > 90) & (direction < 180)) {
		dir = 3;
	} else if (direction === 180) {
		dir = 4;
	} else if ((direction > 180) & (direction < 270)) {
		dir = 5;
	} else if (direction === 270) {
		dir = 6;
	} else if ((direction > 270) & (direction < 360)) {
		dir = 7;
	} else {
		dir = 0;
	}

	return (
		<WindCard direction={direction}>
			<h2>Wind Status</h2>
			<h3>
				{speed.toPrecision(3)}
				<span> {unit}</span>
			</h3>
			<footer>
				<RiCompassDiscoverLine size={28} />
				<div>{directionNames[dir]}</div>
			</footer>
		</WindCard>
	);
};

export default WindStatus;
