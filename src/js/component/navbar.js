import React from "react";
import { Link } from "react-router-dom";
import { Register } from "./Register";
import { SignIn } from "./SignIn";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark  ">
			<Link to="/">
				<span className="navbar-brand h1">
					SWAP <small>Smart Warehouse Automation Procedures</small>
				</span>
			</Link>
			<div className="ml-auto">
				<SignIn />
			</div>
		</nav>
	);
};
