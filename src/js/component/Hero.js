import React from "react";
import { Register } from "./Register";
import { Jumbotron } from "react-bootstrap";

export const Hero = () => {
	return (
		<Jumbotron fluid>
			<div className="container fluid">
				<h1>Welcome to SWAP</h1>
				<h3>An automated system that quickly receives packages at a click of a button</h3>
				<p>
					Now you dont have to worry about manual mistakes while receiving incoming packages - the
					appplication now leans out the receiving system helping you service your customer faster than ever
					before — all while removing user error!
				</p>
				<p>
					<Register />
				</p>
			</div>
		</Jumbotron>
	);
};
