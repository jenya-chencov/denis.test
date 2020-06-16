import React, {Component} from "react";
import {ResponsiveLine} from '@nivo/line';
import styles from './Chart.module.scss';


class Chart extends Component {
	transformData = () => {
		const {tableData} = this.props;
		return Object.keys(tableData).map(el => {
			return {
				id: el,
				data: tableData[el].map(item => {
					return {
						x: item.timestamp,
						y: item.value
					}
				})
			}
		});
	};
	render() {
		const data = this.transformData();
		return (
			<div className={styles.chartWrapper}>
				<ResponsiveLine
					data={data}
					margin={{top: 50, right: 110, bottom: 50, left: 60}}
					xScale={{type: 'point'}}
					yScale={{type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false}}
					curve="basis"
					axisTop={null}
					axisRight={null}
					axisBottom={{
						orient: 'bottom',
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: 'Days',
						legendOffset: 36,
						legendPosition: 'middle'
					}}
					axisLeft={{
						orient: 'left',
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: 'Values',
						legendOffset: -40,
						legendPosition: 'middle'
					}}
					colors={["#eb7d3c","#5e9cd3"]}
					lineWidth={4}
					enableGridX={false}
					enablePoints={false}
					pointSize={10}
					pointColor={{theme: 'background'}}
					pointBorderWidth={2}
					pointBorderColor={{from: 'serieColor'}}
					pointLabel="y"
					enableSlices="x"
					pointLabelYOffset={-12}
					useMesh={true}
					legends={[
						{
							anchor: 'bottom-right',
							direction: 'column',
							justify: false,
							translateX: 100,
							translateY: 0,
							itemsSpacing: 0,
							itemDirection: 'left-to-right',
							itemWidth: 80,
							itemHeight: 20,
							itemOpacity: 0.75,
							symbolSize: 12,
							symbolShape: 'circle',
							symbolBorderColor: 'rgba(0, 0, 0, .5)',
							effects: [
								{
									on: 'hover',
									style: {
										itemBackground: 'rgba(0, 0, 0, .03)',
										itemOpacity: 1
									}
								}
							]
						}
					]}
				/>
			</div>
		)
	}
}

export default Chart;