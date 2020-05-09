import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ManagerStation = () => {
	const { store, actions } = useContext(Context);
	// const [user, setUser] = useState("");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	return (
		//header
		<div>
			<div className="container border-bottom">Manager name</div>
			<div className="container">list of packages unassigned</div>
			<div className="container">
				<table className="table table-hover table-dark">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Tracking</th>
							<th scope="col">Length</th>
							<th scope="col">Height</th>
							<th scope="col">Width</th>
							<th scope="col">Weight</th>
						</tr>
					</thead>
					<tbody>
						{store.inventory.map((item, index) => {
							return (
								// <li key={index} className="list-group-item d-flex justify-content-between">
								// 	<Link to={"/package/" + index}>
								// 		<span>Link to: {item.tracking}</span>
								// 	</Link>
								// </li>
								<tr key={index}>
									<th scope="row">{index}</th>
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
				</table>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</div>
	);
};
