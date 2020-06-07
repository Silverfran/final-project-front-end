import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Table } from "react-bootstrap";

export const PackageDashboard = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="container mt-5">
				<h2>Packages</h2>
				<Table className="overflow-auto" bordered hover>
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Picture</th>
							<th scope="col">Tracking</th>
							<th scope="col">Length(in)</th>
							<th scope="col">Height(in)</th>
							<th scope="col">Width(in)</th>
							<th scope="col">Weight(lb)</th>
						</tr>
					</thead>
					<tbody>
						{store.inventory.map((item, index) => {
							return (
								<tr key={index}>
									<th scope="row">{index}</th>
									<td>
										<Link to={"/package/" + index}>
											<img
												src={item.url}
												className="img-thumbnail border border-white"
												width="100"
												height="100"
											/>
										</Link>
									</td>
									<td>
										<Link to={"/package/" + index}>{item.tracking}</Link>
									</td>
									<td>{item.length}</td>
									<td>{item.height}</td>
									<td>{item.width}</td>
									<td>{item.weight}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
				<br />
			</div>
		</div>
	);
};
