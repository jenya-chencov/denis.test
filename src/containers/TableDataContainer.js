import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {getTableData} from "../redux/thunk/getTableData";
import Table from "../components/Table";
import Chart from "../components/Chart";
import {changeTableValue} from "../redux/actions/changeTableValue";
import {setIntervalId} from "../redux/actions/setIntervalId";
import {intervalCountChange} from "../redux/actions/intervalCountChange";

class TableDataContainer extends Component {

	componentDidMount() {
		this.useInterval();
	}

	useInterval = () => {
		let intervalId = setInterval(this.timer, 1000);
		this.props.setIntervalId(intervalId);
	};

	timer = () => {
		this.props.getTableData(20);
		this.props.intervalCountChange();
	};

	stopInterval = () => {
		clearInterval(this.props.intervalId);
	};

	render() {
		const {isFetching} = this.props;
		return (
			<div>
				{
					isFetching ? 'Loading...' : (
						<div>
							<Table tableData={this.props.tableData} useInterval={this.useInterval} stopInterval={this.stopInterval} changeTableValue={this.props.changeTableValue}/>
							<Chart tableData={this.props.tableData}/>
						</div>
					)
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		tableData: {CAC40: state.tableReducer.CAC40, NASDAQ:state.tableReducer.NASDAQ},
		isFetching: state.tableReducer.isFetching,
		intervalId: state.tableReducer.intervalId
	}
};

export default compose(connect(mapStateToProps, {getTableData, changeTableValue, setIntervalId, intervalCountChange}))(TableDataContainer);
