import React from "react";
import { Pie } from "react-chartjs-2";

export const PieChart = () => {
	const state = {
		labels: ["January: $1,200", "February: $900", "March: $1,090", "April: $700", "May: $989"],
		datasets: [
			{
				label: "Rainfall",
				backgroundColor: ["#e5a8ff", "#aea8ff", "#a8f9ff", "#a8ffb7", "#ffa8a8"],
				hoverBackgroundColor: ["#501800", "#4B5000", "#175000", "#003350", "#35014F"],
				data: [1200, 900, 1090, 700, 989]
			}
		]
	};

	return (
		<Pie
			data={state}
			options={{
				title: {
					display: true,
					text: "Revenue",
					fontSize: 20
				},
				legend: {
					display: true,
					position: "right"
				}
			}}
		/>
	);
};
