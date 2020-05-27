import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { Banner } from "./../component/Banner";

export const Package = props => {
	const { store, actions } = useContext(Context);
	const item = store.inventory[props.match.params.id];
	console.log(store.users.role_id);
	let route = "/dashboard";
	if (store.users.role_id == 1) {
		let route = "/admindashboard";
	}

	return (
		<>
			<Banner />
			<div className="card mb-3">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src={item.url} className="card-img" alt="..." width="400" height="400" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">
								<span className="blackbox">Package:</span>
								{item.tracking} cm
							</h5>
							<p className="card-text">
								{" "}
								<span className="blackbox">Length:</span> {item.length} cm
							</p>
							<p className="card-text">
								{" "}
								<span className="blackbox">Width:</span> {item.width} cm
							</p>
							<p className="card-text">
								{" "}
								<span className="blackbox">Height:</span> {item.height} cm
							</p>
							<p className="card-text">
								{" "}
								<span className="blackbox">Weight:</span> {item.weight} cm
							</p>
							<p className="card-text">
								{" "}
								<span className="blackbox">Text from image:</span> {item.ocr}
							</p>
							<p className="card-text">
								{" "}
								<span className="blackbox">Package received:</span> {item.created_date}
							</p>

							<Link to={route}>
								<span className="btn btn-primary btn-lg" href="#" role="button">
									Back
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>

		// 		<Link to="/managerStation">
		// 			<span className="btn btn-primary btn-lg" href="#" role="button">
		// 				Back
		// 			</span>
		// 		</Link>
		// 	</div>
		// </div>
	);
};

Package.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
