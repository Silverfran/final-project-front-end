import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Table } from "react-bootstrap";

export const Package = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container mt-5">
			<h2>Current Packages </h2>
			<Table className="overflow-auto" striped bordered hover>
				<thead>
					<tr>
						<th>ID</th>
						<th>Photo</th>
						<th>Lenght</th>
						<th>Width</th>
						<th>Height</th>
						<th>Weight</th>
					</tr>
				</thead>
				<tbody>
					{store.inventory.map((item, index) => {
						return (
							<tr key={index}>
								<td>{item.id}</td>
								<td>{item.first}</td>
								<td>{item.last}</td>
								<td>{item.password}</td>
								<td>{item.username}</td>
								<td>{item.role}</td>
								{/* <Link to={"/edit/" + e.id + "/" + index}> */}
								<button className="btn">
									<i className="fas fa-pencil-alt mr-3" />
								</button>
								{/* </Link> */}
								<button className="btn">
									{/* // onClick={() => { */}
									{/* // actions.deleteContact(e.id); */}
									{/* // }}> */}
									<i className="fas fa-trash-alt" />
								</button>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>

		// <div className="jumbotron">
		// 	<h3 className="display-4">
		// 		This will show the package: {store.inventory[props.match.params.id].tracking}{" "}
		// 	</h3>

		// 	<Link to="/managerStation">
		// 		<span className="btn btn-primary btn-lg" href="#" role="button">
		// 			Back
		// 		</span>
		// 	</Link>
		// </div>
		// {store.demo[props.match.params.theid].title}

		// 	<hr className="my-4" />

		// 	<Link to="/">
		// 		<span className="btn btn-primary btn-lg" href="#" role="button">
		// 			Back home
		// 		</span>
		// 	</Link>
		// </div>
	);
};

Package.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
