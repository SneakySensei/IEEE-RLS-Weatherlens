const initialState = {
	unit: "metric",
};

const configReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CONFIG_TOGGLE_UNIT":
			return {
				...state,
				unit: state.unit === "metric" ? "imperial" : "metric",
			};
		default:
			return state;
	}
};

export default configReducer;
