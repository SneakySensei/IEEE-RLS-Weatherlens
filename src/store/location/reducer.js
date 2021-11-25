const initialState = {
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
			return { ...state, active: state.preferred[nextLoc] };

		case "LOCATION_PREV":
			let prevLoc = state.active - 1;
			if (prevLoc < 0) {
				prevLoc = state.preferred.length - 1;
			}
			return {
				...state,
				active: state.preferred[prevLoc],
			};

		case "LOCATION_ADD":
			return {
				...state,
				preferred: [
					...state.preferred,
					{ name: action.name, id: action.id, data: action.data },
				],
			};
		case "LOCATION_DELETE":
			let preferred = [...state.preferred];
			preferred = preferred.filter((location) => action.id !== location.id);
			return { ...state, preferred };
		default:
			return state;
	}
};

export default locationReducer;
