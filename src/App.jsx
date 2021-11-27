import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import Sidebar from "./components/sidebar/Sidebar";
import Stats from "./components/stats/Stats";
import { updateWeatherData } from "./store/location/actions";

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
	const unitState = useSelector((state) => state.config.unit);
	const locationState = useSelector((state) => state.location);

	const dispatch = useDispatch();

	useEffect(() => {
		const getWeatherData = async () => {
			try {
				const locationName = locationState.preferred[locationState.active].name;

				const weatherRes = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=${unitState}`
				);
				const airRes = await axios.get(
					`https://api.openweathermap.org/data/2.5/air_pollution?lat=${weatherRes.data.coord.lat}&lon=${weatherRes.data.coord.lon}&appid=${process.env.REACT_APP_OPENWEATHER_API}`
				);

				const weather = weatherRes.data;
				weather.air = airRes.data;

				dispatch(updateWeatherData(locationName, weather));
			} catch (err) {
				console.log(err);
			}
		};

		if (locationState.active !== null) {
			getWeatherData();
		}
	}, [unitState, locationState.active]);

	return (
		<>
			<GlobalStyles />
			<PageContainer>
				<Sidebar />
				<Stats />
			</PageContainer>
		</>
	);
};

export default App;
