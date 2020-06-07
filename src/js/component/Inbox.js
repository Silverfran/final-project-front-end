import React, { useContext } from "react";
import { Banner } from "./../component/Banner";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Inbox = () => {
	const { store } = useContext(Context);
	const message = e => {
		window.location.href = "/message/" + e.target.cellIndex;
	};

	return (
		<>
			<div className="container  d-flex flex-column pl-4 mt-5">
				<h2>Inbox</h2>
				<Table className="row-clickable table-responsive-md" striped bordered hover size="sm">
					<thead className="thead-dark">
						<tr>
							<th>#</th>
							<th>User</th>
							<th>Subject</th>
						</tr>
					</thead>
					<tbody>
						{store.message.map((item, index) => {
							return (
								<tr key={index} onClick={message}>
									<td>{index}</td>
									<td>{item.user}</td>
									<td>{item.subject}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
		</>
	);
};
