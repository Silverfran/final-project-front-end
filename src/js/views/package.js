import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

export const Package = props => {
	const { store, actions } = useContext(Context);
	const item = store.inventory[props.match.params.id];
	return (
		<div className="card w-50">
			<div className="card-body">
				<img src={item.url} className="img-thumbnail" width="400" height="400" />
				<h5 className="card-title">This will show the package: {item.tracking}</h5>
				<p className="card-text">Length: {item.length}</p>
				<p className="card-text">Width: {item.width}</p>
				<p className="card-text">Height: {item.height}</p>
				<p className="card-text">Weight: {item.weight}</p>
				<p className="card-text">Text from image: {item.ocr}</p>
				<p className="card-text">Package recieve: {item.created_date}</p>
				<Link to="/managerStation">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back
					</span>
				</Link>
			</div>
		</div>
	);
};

Package.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
