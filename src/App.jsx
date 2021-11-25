import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

import Sidebar from "./components/sidebar/Sidebar";
import Stats from "./components/stats/Stats";

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		font-family: "Nunito", sans-serif;
	}
`;

const PageContainer = styled.main`
	display: flex;
	background-color: #fff;
	width: 100%;
	min-height: 100vh;
`;

const App = () => {
	const [weatherData, setWeatherData] = useState({});

	const unitState = useSelector((state) => state.config.unit);

	useEffect(() => {
		const getWeatherData = async () => {
			try {
				const weatherRes = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=${unitState}`
				);
				const airRes = await axios.get(
					`http://api.openweathermap.org/data/2.5/air_pollution?lat=${weatherRes.data.coord.lat}&lon=${weatherRes.data.coord.lon}&appid=${process.env.REACT_APP_OPENWEATHER_API}`
				);

				const weather = weatherRes.data;
				weather.air = airRes.data;
				setWeatherData(weather);
			} catch (err) {
				console.log(err);
			}
		};

		getWeatherData();
	}, [unitState]);

	console.log(weatherData);

	return (
		<>
			<GlobalStyles />
			<PageContainer>
				<Sidebar data={weatherData} />
				<Stats data={weatherData} />
			</PageContainer>
		</>
	);
};

export default App;
