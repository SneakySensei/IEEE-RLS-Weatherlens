const initialState = {
	active: null,
	preferred: [],
};

const locationReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOCATION_NEXT":
			console.log("next");
			let nextLoc = state.active + 1;
			if (nextLoc >= state.preferred.length) {
				nextLoc = 0;
			}
			return { ...state, active: nextLoc };

		case "LOCATION_PREV":
			let prevLoc = state.active - 1;
			if (prevLoc < 0) {
				prevLoc = state.preferred.length - 1;
			}
			return {
				...state,
				active: prevLoc,
			};

		case "LOCATION_ADD":
			return {
				...state,
				active: state.preferred.length,
				preferred: [...state.preferred, { name: action.name }],
			};
		case "LOCATION_UPDATE":
			const prefLoc = [...state.preferred];
			// find the index of action.name
			const targetIndex = prefLoc.findIndex(
				(locationData) => locationData.name === action.name
			);
			// append the data prop with action.data
			prefLoc[targetIndex].data = action.data;
			// return new preferred location array
			return { ...state, preferred: prefLoc };

		case "LOCATION_DELETE":
			let preferred = [...state.preferred];
			preferred = preferred.filter((location) => action.id !== location.id);
			return { ...state, preferred };
		default:
			return state;
	}
};

export default locationReducer;
