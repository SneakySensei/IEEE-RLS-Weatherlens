import moment from "moment";
import { useSelector } from "react-redux";
import styled from "styled-components";

import AirQuality from "./AirQuality";
import Header from "./Header";
import Humidity from "./Humidity";
import MinMaxTemp from "./MinMaxTemp";
import SunriseSunset from "./SunriseSunset";
import Visibility from "./Visibility";
import WindStatus from "./WindStatus";

const StatsContainer = styled.section`
	flex: 6.5;
	background-color: #eaeaea;
	padding: 48px 42px 32px 42px;

	.hint {
		margin-top: 2rem;
		font-size: 14pt;
		color: #888;
	}

	h1 {
		margin-top: 48px;
	}

	.stats {
		margin-top: 32px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		row-gap: 24px;
		column-gap: 16px;

		article {
			background-color: white;
			border-radius: 16px;
			min-height: 220px;
			box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
			padding: 1rem;
		}
	}
`;

const Stats = () => {
	const locationState = useSelector((state) => state.location);
	const unit = useSelector((state) => state.config.unit);

	const data = locationState.preferred[locationState.active]?.data;

	return (
		<StatsContainer className="main-content">
			<Header />
			{locationState.preferred.length > 0 ? (
				<h1>Today’s Highlights</h1>
			) : (
				<div className="hint">
					No Location Selected. Start by adding a location.
				</div>
			)}
			{locationState.preferred.length > 0 && (
				<section className="stats">
					<MinMaxTemp
						minTemp={data?.main?.temp_min}
						maxTemp={data?.main?.temp_max}
						unit={unit === "metric" ? "C" : "F"}
					/>
					<WindStatus
						speed={data?.wind?.speed}
						direction={data?.wind?.deg}
						unit={unit === "metric" ? "m/s" : "mph"}
					/>
					<SunriseSunset
						riseTime={moment(data?.sys?.sunrise * 1000).format("h:mm A")}
						setTime={moment(data?.sys?.sunset * 1000).format("h:mm A")}
					/>
					<Humidity humidity={data?.main?.humidity} />
					<Visibility visibility={data?.visibility / 1000} />
					<AirQuality indexValue={data?.air?.list[0].main.aqi} />
				</section>
			)}
		</StatsContainer>
	);
};

export default Stats;
