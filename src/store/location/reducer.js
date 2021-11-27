const initialState = localStorage.getItem("preferredLocations")
	? JSON.parse(localStorage.getItem("preferredLocations"))
	: {
			active: null,
			preferred: [],
	  };

const locationReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOCATION_NEXT":
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
			const newAddLocation = {
				...state,
				active: state.preferred.length,
				preferred: [...state.preferred, { name: action.name }],
			};

			localStorage.setItem(
				"preferredLocations",
				JSON.stringify(newAddLocation)
			);

			return newAddLocation;
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
			const newDeleteLocation = { ...state, preferred };

			localStorage.setItem(
				"preferredLocations",
				JSON.stringify(newDeleteLocation)
			);

			return newDeleteLocation;

		default:
			return state;
	}
};

export default locationReducer;
