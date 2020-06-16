import {IS_FETCHING,} from "../../constants/constants";

export const isFetchingData = (flag) => {
	return {
		type: IS_FETCHING,
		flag
	}
};