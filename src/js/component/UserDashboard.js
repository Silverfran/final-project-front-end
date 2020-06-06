import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Table } from "react-bootstrap";
import { EditUser } from "./../component/EditUser";
import { DeleteUser } from "./../component/DeleteUser";

export const UserDashboard = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container mt-5 d-flex flex-column">
			<h2>Users</h2>
			<Table className="overflow-auto table-responsive" bordered hover>
				<thead className="thead-dark">
					<tr className="d-flex">
						<th className="col-1 text-center">#</th>
						<th className="col">Username</th>
						<th className="col">Password</th>
						<th className="col">Access Level</th>
						<th className="col-1 text-center">Edit</th>
						<th className="col-1 text-center">Delete</th>
					</tr>
				</thead>
				<tbody>
					{store.users.map((item, index) => {
						return (
							<tr key={index} className="d-flex">
								<td className="col-1 text-center">{item.id}</td>
								<td className="col">{item.username}</td>
								<td className="col">{item.password}</td>
								<td className="col">{item.role_id}</td>
								<td className="col-1 text-center">
									{/* <Link to={"/edit/" + e.id + "/" + index}> */}
									<EditUser />
									{/* </Link> */}
								</td>
								<td className="col-1 text-center">
									<DeleteUser />
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
