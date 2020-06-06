import React from "react";
import { Card, CardDeck, ProgressBar } from "react-bootstrap";
import { BarChart } from "./../component/BarChart";
import { PieChart } from "./../component/PieChart";

export const Welcome = () => {
	return (
		<>
			<div className="container">
				<CardDeck className="pt-1 ">
					<Card className="pt-0 bg-light" border="success" body>
						<div>
							Package Received: 234
							<i className="fas fa-cubes pr-2 float-right" />
						</div>
						<ProgressBar variant="success" animated now={45} />
						<Card.Text className="pt-1 pb-0">Total Packages: 467</Card.Text>
					</Card>
					<Card border="success" body>
						<div>
							Daily Revenue: $1,208
							<i className="far fa-money-bill-alt pr-2 float-right" />
						</div>
						<ProgressBar animated now={70} />
						<Card.Text className="pt-1 pb-0">Total Revenue: $23,093</Card.Text>
					</Card>
					<Card border="success" body>
						<div className="users">
							<i className="fas fa-users" />
							<h2 className="users-number">3</h2>
						</div>
					</Card>
					<Card border="success" body>
						<div>
							<h5> Average Cost : $12.00</h5>
							<i className="fas fa-chart-line pr-2 float-right" />
						</div>
						<Card.Text className="pt-1 ">Total Items Shipped: 143</Card.Text>
					</Card>
				</CardDeck>

				{/* <div className="container pt-3"> */}
				<div className="row">
					<div className="col-md">
						<BarChart />
					</div>
					<div className="col-md">
						<PieChart />
					</div>
				</div>
			</div>
			{/* </div> */}
		</>
	);
};
