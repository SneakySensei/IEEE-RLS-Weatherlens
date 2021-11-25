export const nextLocation = () => {
	return { type: "LOCATION_NEXT" };
};

export const prevLocation = () => {
	return { type: "LOCATION_PREV" };
};

export const addPreferredLocation = (name, id, data) => {
	return { type: "LOCATION_ADD", name, id, data };
};

export const deleteLocationById = (id) => {
	return { type: "LOCATION_DELETE", id };
};
