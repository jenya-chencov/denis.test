import {SET_TABLE_DATA} from "../../constants/constants";

export const setTableData = (data) => (
	{
		type: SET_TABLE_DATA,
		data
	}
);