import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import thunk from "redux-thunk";
import tableReducer from "./reducers/tableReducer";

const reducers = {
	tableReducer
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers(reducers), /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));

export default store;