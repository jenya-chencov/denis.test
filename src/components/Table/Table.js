import React, {Component} from 'react';
import styles from "./Table.module.scss";

class Table extends Component {

	state = {
		editMode: false,
		index: null,
		type: null
	};

	activateEditMode = (event, type, index) => {
		this.setState({
			editMode: true,
			index,
			type
		});
		this.props.stopInterval();
	};

	deactivateEditMode = () => {
		this.setState({
			editMode: false,
			index: null,
			type: null
		});
		this.props.useInterval();
	};

	onValueChange = (event) => {
		const {index, type} = this.state;
		let value = event.currentTarget.value;
		this.props.changeTableValue(type, index, value);
	};

	buildRows = () => {
		return Object.keys(this.props.tableData).map((el, index) => {
			return (
				<tr key={index}>
					<td>{el}</td>
					{this.buildCells(el)}
				</tr>
			)
		});
	};

	buildCells = (el) => {
		const {editMode, index, type} = this.state;
		return this.props.tableData[el].map(cell => {
			return (
				<td key={cell.index} onDoubleClick={(event) => this.activateEditMode(event, el, cell.index)}>
					{editMode && index === cell.index && type === el && (
						<input type="text" autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onValueChange}
							   value={cell.value}/>
					)
					}
					{editMode && index === cell.index && type === el ?
						null : (<span>{cell.value}</span>)
					}
				</td>
			)
		})
	};

	render() {
		const items = this.buildRows();
		return (
			<div>
				<div>
					<table className={styles.mainTable}>
						<tbody>
						{items}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Table;