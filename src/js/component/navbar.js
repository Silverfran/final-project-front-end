import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Register } from "./Register";
import { SignIn } from "./SignIn";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Navbar = props => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-dark  ">
			<Link to="/">
				<span className="navbar-brand h1">
					SWAP <small>Smart Warehouse Automation Procedures</small>
				</span>
			</Link>
			<div className="ml-auto">
				<SignIn props={props} />
			</div>
		</nav>
	);
};
