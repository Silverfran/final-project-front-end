import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Package = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: store.demo[props.match.params.theid].title</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Package.propTypes = {
	history: PropTypes.object
};
