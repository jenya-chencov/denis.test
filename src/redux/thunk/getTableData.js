import {tableAPI} from "../../apiService/apiService";
import {setTableData} from "../actions/setTableData";
import {isFetchingData} from "../actions/isFetchingData";

export const getTableData = (count) => {
	return (dispatch) => {
		tableAPI.getData(count)
			.then(response => {
				dispatch(setTableData(response));
				dispatch(isFetchingData(false));
			})
	}
};