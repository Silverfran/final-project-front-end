import React, { useContext } from "react";

export const Banner = () => {
	// const { store, actions } = useContext(Context);
	let date = new Date();
	let fullDate = date.toLocaleDateString();
	let time = date.toLocaleTimeString();

	return (
		<nav className="navbar navbar-dark bg-dark text-white">
			<div>SWAP - Smart Warehouse Automation Procedures</div>
			<div>
				<span>{fullDate}</span>
				<span>{time}</span>
			</div>
		</nav>
	);
};
