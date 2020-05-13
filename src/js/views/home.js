import React, { useState, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Home = props => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="col-sm-8 p-0 justify-content-center">
			<div className="row justify-content-center p-5 bg-light align-items-center">
				<div className="col-sm-6">
					<div className="card-body">
						<h5 className="card-title">Sing in to Sys</h5>
						<form className="needs-validation" noValidate>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="example@something.com"
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Password</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="******"
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => actions.signIn(email, password, props.history)}>
								Sign In
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
Home.propTypes = {
	history: PropTypes.object
};
