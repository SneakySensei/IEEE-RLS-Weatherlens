import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { nextLocation, prevLocation } from "../../store/location/actions";

const LocationSelectorContainer = styled.div`
	margin-top: auto;
	display: flex;
	align-items: center;

	button {
		all: unset;
		cursor: pointer;
		transition: background-color 200ms ease;
		background-color: transparent;
		height: 24px;
		width: 24px;
		border-radius: 20px;
		padding: 4px;
	}

	button:hover {
		background-color: #aaa;
	}

	div {
		flex: 1;
		text-align: center;
		font-size: 18pt;
	}

	div span {
		color: #888;
	}
`;

const LocationSelector = () => {
	const locationState = useSelector((state) => state.location);
	const dispatch = useDispatch();

	const handleLeft = () => {
		dispatch(prevLocation());
	};

	const handleRight = () => {
		dispatch(nextLocation());
	};

	return (
		<LocationSelectorContainer className="location-container">
			<button onClick={handleLeft}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M16.9688 5.11642V3.3047C16.9688 3.14767 16.7883 3.06095 16.6664 3.15704L6.10081 11.4094C6.01105 11.4792 5.93841 11.5686 5.88844 11.6707C5.83847 11.7729 5.8125 11.8851 5.8125 11.9988C5.8125 12.1126 5.83847 12.2248 5.88844 12.3269C5.93841 12.4291 6.01105 12.5185 6.10081 12.5883L16.6664 20.8406C16.7907 20.9367 16.9688 20.85 16.9688 20.693V18.8813C16.9688 18.7664 16.9149 18.6563 16.8258 18.586L8.38832 12L16.8258 5.41173C16.9149 5.34142 16.9688 5.23126 16.9688 5.11642Z"
						fill="black"
					/>
				</svg>
			</button>
			<div>{locationState.preferred[locationState.active].name}</div>
			<button onClick={handleRight}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6.423 18.273V20.0848C6.423 20.2418 6.60347 20.3285 6.72534 20.2324L17.291 11.9801C17.3807 11.9103 17.4534 11.8209 17.5033 11.7187C17.5533 11.6166 17.5793 11.5043 17.5793 11.3906C17.5793 11.2769 17.5533 11.1647 17.5033 11.0625C17.4534 10.9604 17.3807 10.871 17.291 10.8012L6.72534 2.54883C6.60113 2.45273 6.423 2.53945 6.423 2.69648V4.5082C6.423 4.62305 6.47691 4.7332 6.56597 4.80351L15.0035 11.3895L6.56597 17.9777C6.47691 18.048 6.423 18.1582 6.423 18.273V18.273Z"
						fill="black"
					/>
				</svg>
			</button>
		</LocationSelectorContainer>
	);
};

export default LocationSelector;
