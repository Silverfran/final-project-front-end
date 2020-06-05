import React from "react";
import { Banner } from "./../component/Banner";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Inbox = () => {
	// let history = useHistory();

	const message = e => {
		console.log("yolo", e.target.cellIndex);
		// let id = e.target.cellIndex;
		window.location.href = "/message/" + e.target.cellIndex;
	};

	return (
		<>
			<div className="container  pl-4 mt-5">
				<h2>Inbox</h2>
				<Table className="row-clickable" striped bordered hover size="sm">
					<thead>
						<tr>
							<th>#</th>
							<th>User</th>
							<th>Subject</th>
						</tr>
					</thead>
					<tbody>
						<tr onClick={message}>
							<td>1</td>
							<td>James Walters</td>
							<td>The sensors are reporting wrong calculations</td>
						</tr>

						<tr>
							<td>2</td>
							<td>Joao Henrique</td>
							<td>shipment cost more than it should!</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Bridget Schraeder</td>
							<td>Can you make me an admin please!</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</>
	);
};
