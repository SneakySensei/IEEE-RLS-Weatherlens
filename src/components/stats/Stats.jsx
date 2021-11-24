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
