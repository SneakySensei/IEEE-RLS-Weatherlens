import styled from "styled-components";
import moment from "moment";

import Searchbar from "./Searchbar";
import LocationSelector from "./LocationSelector";
import { useSelector } from "react-redux";

const SidebarContainer = styled.aside`
	height: 100vh;
	flex: 3.5;
	min-width: 360px;
	padding: 48px 42px 32px 42px;
	display: flex;
	flex-direction: column;

	.weather-icon {
		margin: 0 auto;
		display: block;
		margin-top: 40px;
	}

	.temperature {
		font-size: 44pt;
	}

	.feels {
		font-size: 12pt;
	}

	.separator {
		width: 96px;
		border: 1px solid black;
		margin: 16px 0;
	}

	.date {
		font-size: 18pt;
	}

	.date span {
		color: #888;
	}

	.description {
		text-transform: capitalize;
		font-size: 16pt;
		margin-top: 16px;
	}
`;

const Sidebar = () => {
	const unitState = useSelector((state) => state.config.unit);
	const locationState = useSelector((state) => state.location);

	const data = locationState.preferred[locationState.active]?.data;

	return (
		<SidebarContainer>
			<Searchbar />
			{locationState.preferred.length > 0 && (
				<>
					<svg
						className="weather-icon"
						width="240"
						height="240"
						viewBox="0 0 320 320"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M160 276C224.065 276 276 224.065 276 160C276 95.935 224.065 44 160 44C95.935 44 44 95.935 44 160C44 224.065 95.935 276 160 276ZM280 160C280 226.274 226.274 280 160 280C93.7258 280 40 226.274 40 160C40 93.7258 93.7258 40 160 40C226.274 40 280 93.7258 280 160Z"
							fill="#FFC169"
							fillOpacity="0.4"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M159.333 260C214.93 260 260 214.93 260 159.333C260 103.737 214.93 58.6667 159.333 58.6667C103.737 58.6667 58.6666 103.737 58.6666 159.333C58.6666 214.93 103.737 260 159.333 260ZM265.333 159.333C265.333 217.876 217.876 265.333 159.333 265.333C100.791 265.333 53.3333 217.876 53.3333 159.333C53.3333 100.791 100.791 53.3333 159.333 53.3333C217.876 53.3333 265.333 100.791 265.333 159.333Z"
							fill="#FFCB66"
							fillOpacity="0.6"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M159.333 249.333C209.039 249.333 249.333 209.039 249.333 159.333C249.333 109.628 209.039 69.3333 159.333 69.3333C109.628 69.3333 69.3333 109.628 69.3333 159.333C69.3333 209.039 109.628 249.333 159.333 249.333Z"
							fill="#FEE25C"
						/>
						<path
							d="M278.859 121.804C278.879 121.205 278.889 120.604 278.889 120C278.889 90.5448 254.961 66.6667 225.445 66.6667C202.03 66.6667 182.132 81.6926 174.906 102.609C169.716 99.9063 163.815 98.3784 157.556 98.3784C136.814 98.3784 120 115.158 120 135.856C120 156.554 136.814 173.333 157.556 173.333L225.516 173.333H265.889C281.046 173.333 293.333 161.072 293.333 145.946C293.333 135.502 287.475 126.423 278.859 121.804Z"
							fill="white"
							stroke="#888888"
						/>
						<path
							d="M124.426 216.799C124.438 216.429 124.445 216.056 124.445 215.683C124.445 197.448 109.72 182.667 91.5556 182.667C77.1466 182.667 64.9018 191.968 60.4549 204.917C57.2612 203.244 53.6296 202.298 49.7778 202.298C37.0139 202.298 26.6667 212.685 26.6667 225.498C26.6667 238.311 37.0139 248.698 49.7778 248.698L91.5999 248.698H116.444C125.772 248.698 133.333 241.108 133.333 231.744C133.333 225.279 129.728 219.659 124.426 216.799Z"
							fill="white"
							stroke="#888888"
						/>
					</svg>
					<article className="temperature">
						{data?.main?.temp}°{unitState === "metric" ? "C" : "F"}
					</article>
					<article className="feels">
						Feels like {data?.main?.feels_like}°
						{unitState === "metric" ? "C" : "F"}
					</article>
					<hr className="separator" />
					<div className="date">
						{moment(data?.dt * 1000).format("dddd")},{" "}
						<span>{moment(data?.dt * 1000).format("hh:mmA")}</span>
					</div>
					<div className="description">
						{Array.isArray(data?.weather) && data?.weather[0].description}
					</div>
					<LocationSelector data={data} />
				</>
			)}
		</SidebarContainer>
	);
};

export default Sidebar;
