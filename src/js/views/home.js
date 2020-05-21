import React from "react";
import "../../styles/home.scss";
import { Hero } from "./../component/Hero";
import { Register } from "./../component/Register";
import { Navbar } from "./../component/navbar";
import PropTypes from "prop-types";

export const Home = props => {
	return (
		<>
			<Navbar props={props} />
			<Hero props={props} />
		</>
	);
};
