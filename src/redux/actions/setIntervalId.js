import {SET_INTERVAL} from "../../constants/constants";

export const setIntervalId = (intervalId) => {
	return {
		type: SET_INTERVAL,
		intervalId
	}
};