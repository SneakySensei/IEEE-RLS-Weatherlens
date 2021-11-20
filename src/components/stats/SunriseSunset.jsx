import React from "react";
import styled from "styled-components";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const SuntimesCard = styled.article`
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

	.time-container {
		display: flex;
		align-items: center;
		gap: 1rem;

		&:last-child {
			margin-top: 1.25rem;
		}

		div:first-child {
			padding: 0.75rem;
			background-image: radial-gradient(#ffde31, #ffc564);
			border-radius: 50%;
			height: 48px;

			svg {
				color: white;
			}
		}

		div:last-child {
			font-size: 16pt;
			font-weight: 600;
		}
	}
`;

const SunriseSunset = ({ riseTime, setTime }) => {
	return (
		<SuntimesCard>
			<h2>Sunrise & Sunset</h2>
			<div className="time-container">
				<div>
					<FiArrowUp size={24} />
				</div>
				<div>{riseTime}</div>
			</div>
			<div className="time-container">
				<div>
					<FiArrowDown size={24} />
				</div>
				<div>{setTime}</div>
			</div>
		</SuntimesCard>
	);
};

export default SunriseSunset;
