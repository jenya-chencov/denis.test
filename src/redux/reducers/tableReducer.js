import {
	CHANGE_VALUE,
	INTERVAL_COUNT_CHANGE,
	IS_FETCHING,
	SET_INTERVAL,
	SET_TABLE_DATA
} from "../../constants/constants";


const initialState = {
	CAC40: [],
	NASDAQ: [],
	isFetching: true,
	intervalId: null,
	intervalCount: 20
};

const tableReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TABLE_DATA:
			let index1 = 0;
			let index2 = 0;
			return {
				...state,
				CAC40: action.data.map(el => {
					index1++;
					return {
						index: el.index,
						value: parseInt(el.stocks["CAC40"].toExponential(3)),
						// timestamp: parseInt(moment(el.timestamp).format('DD'))
						timestamp: index1
					}
				}),
				NASDAQ: action.data.map(el => {
					index2++;
					return {
						index: el.index,
						value: parseInt(el.stocks["NASDAQ"].toExponential(3)),
						// timestamp: parseInt(moment(el.timestamp).format('DD'))
						timestamp: index2
					}
				})
			};
		case CHANGE_VALUE: {
			return {
				...state,
				[action.name]: [
					...state[action.name].map(el => {
						if(el.index === action.index ) {
							return {
								...el,
								value: action.value
							}
						}
						return el;
					})
				]
			}
		}
		case IS_FETCHING: {
			return {
				...state,
				isFetching: action.flag
			}
		}
		case SET_INTERVAL: {
			return {
				...state,
				intervalId: action.intervalId
			}
		}
		case INTERVAL_COUNT_CHANGE: {
			return {
				...state,
				intervalCount: state.intervalCount-1
			}
		}
		default:
			return state;
	}
};

export default tableReducer;