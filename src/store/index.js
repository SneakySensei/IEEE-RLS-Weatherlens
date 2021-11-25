import { combineReducers, createStore } from "redux";
import configReducer from "./config/reducer";
import locationReducer from "./location/reducer";

const rootReducer = combineReducers({
	config: configReducer,
	location: locationReducer,
});

const reduxStore = createStore(rootReducer);
export default reduxStore;
