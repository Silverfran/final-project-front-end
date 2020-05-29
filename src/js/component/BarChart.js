import React from "react";
import { Bar } from "react-chartjs-2";

export const BarChart = () => {
	const state = {
		labels: ["January", "February", "March", "April", "May"],
		datasets: [
			{
				label: "Packages",
				backgroundColor: ["#e5a8ff", "#aea8ff", "#a8f9ff", "#a8ffb7", "#ffa8a8"],
				borderColor: "rgba(0,0,0,1)",
				borderWidth: 2,
				data: [230, 130, 240, 124, 140]
			}
		]
	};

	return (
		<Bar
			data={state}
			options={{
				title: {
					display: true,
					text: "Average Packages Received per month",
					fontSize: 20,
					maintainAspectRatio: false
				},
				legend: {
					display: true,
					position: "right"
				}
			}}
		/>
	);
};
