import React, { Component } from "react";

export const Footer = () => {
	return (
		<footer className="footer py-3 text-center bg-dark text-light fixed-bottom">
			<div className="row">
				<div className="col-6">
					<h5 className="text-uppercase">SWAP</h5>
					<p>Made using React, Bootstrap,Flask, Python, SQL and Love</p>
				</div>
				<div className="col-3 ">
					<h5 className="text-uppercase">Team Members</h5>
					Kenia Valdes Vallejo, Francisco Silverio, Nelson Parra
				</div>
			</div>
			<div className="footer-copyright text-center">
				<i className="fa fa-heart text-danger" /> by{" "}
				<a className="text-light" href="http://www.4geeksacademy.com">
					4geeksacademy{" "}
				</a>
			</div>
		</footer>
	);
};
