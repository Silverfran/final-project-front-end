import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Table } from "react-bootstrap";
import { EditUser } from "./../component/EditUser";
import { DeleteUser } from "./../component/DeleteUser";
import PropTypes from "prop-types";

export const UserDashboard = props => {
	const { store, actions } = useContext(Context);
	useEffect(
		() => {
			actions.getUsersProtected();
		},
		[store.users]
	);
	return (
		<div className="container mt-5 ">
			<h2>Users</h2>
			<Table className="overflow-auto table-responsive-md" bordered hover>
				<thead className="thead-dark">
					<tr className="d-flex">
						<th className="col-1 text-center">#</th>
						<th className="col">Username</th>
						<th className="col">Email</th>
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
								<td className="col">{item.email}</td>
								<td className="col">{item.password}</td>
								<td className="col">{item.role_id}</td>
								<td className="col-1 text-center">
									<EditUser
										props={props}
										id={item.id}
										email={item.email}
										username={item.username}
										password={item.password}
										role_id={item.role_id}
									/>
								</td>
								<td className="col-1 text-center">
									<DeleteUser props={props} id={item.id} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
