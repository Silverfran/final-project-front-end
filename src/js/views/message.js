import React, { useContext } from "react";
import { Banner } from "./../component/Banner";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Contact } from "./../component/Contact";

export const message = props => {
	const { store } = useContext(Context);
	const email = store.message[props.match.params.id];

	const goBack = () => {
		// let id = e.target.cellIndex;
		window.location.href = "/admindashboard";
	};

	return (
		<>
			<Banner />
			<div className="container pt-3 d-flex justify-content-center">
				<div className="card">
					<div className="card-body">
						<div className="card-header">
							<p>
								<strong>From: </strong>
								{email.user}
							</p>
							<p>
								{" "}
								<strong>Subject: </strong>
								{email.subject}
							</p>
						</div>
						<p className="card-text p-2" style={{ height: "200px", width: "100%" }}>
							{email.message}
						</p>
						<div className="float-right">
							<button type="button" onClick={goBack} className="btn btn-primary mr-3">
								Go back
							</button>
							<button type="button" className="btn btn-primary pr-3 pl-2">
								Reply
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
message.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
