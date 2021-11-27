export const nextLocation = () => {
	return { type: "LOCATION_NEXT" };
};

export const prevLocation = () => {
	return { type: "LOCATION_PREV" };
};

export const addPreferredLocation = (name) => {
	return { type: "LOCATION_ADD", name };
};

export const updateWeatherData = (name, data) => {
	return { type: "LOCATION_UPDATE", name, data };
};

export const deleteLocationById = (id) => {
	return { type: "LOCATION_DELETE", id };
};
