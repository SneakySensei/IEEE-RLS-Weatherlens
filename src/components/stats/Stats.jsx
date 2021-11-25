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
	padding: 48px 42px 32px 42px;

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

const Stats = ({ data }) => {
	return (
		<StatsContainer className="main-content">
			<Header />
			<h1>Today’s Highlights</h1>
			<section className="stats">
				<MinMaxTemp minTemp={20} maxTemp={25} unit="F" />
				<WindStatus speed={7.7} direction={135} />
				<SunriseSunset riseTime={"6:35AM"} setTime={"5:42PM"} />
				<Humidity humidity={12} />
				<Visibility visibility={2.0} />
				<AirQuality indexValue={data?.air?.list[0].main.aqi} />
			</section>
		</StatsContainer>
	);
};

export default Stats;
