import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Package = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron">
			<h3 className="display-4">
				This will show the package: {store.inventory[props.match.params.id].tracking}{" "}
			</h3>

			<Link to="/managerStation">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back
				</span>
			</Link>
		</div>
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
