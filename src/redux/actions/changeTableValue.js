import {CHANGE_VALUE} from "../../constants/constants";

export const changeTableValue = (name, index, value) => {
	return {
		type: CHANGE_VALUE,
		name,
		index,
		value
	}
};