import React, { Component } from "react";

export const Footer = () => {
	return (
		<footer className="py-3 bg-dark text-light">
			<div className="flex-grid">
				<div className="col">
					<h5>Swap</h5>
					<p>Made using React, Bootstrap, Flask, Python, SQL and Love</p>
				</div>
				<div className="col">
					<h5>Team Members</h5>
					<p>Francisco Silverio &#38; Nelson Parra</p>
				</div>
			</div>
			<div className="copyright">
				<i className="fa fa-heart text-danger" /> by{" "}
				<a className="text-light" href="http://www.4geeksacademy.com">
					{" "}
					4geeksacademy{" "}
				</a>
			</div>
		</footer>
	);
};
