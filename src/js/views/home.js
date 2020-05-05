import React, { useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<div className="row justify-content-center bg-dark align-items-center">
				<div className="col-sm-8 p-0">
					<div className="row justify-content-center p-5 bg-light align-items-center">
						<div className="col-sm-6">
							<div className="card border-0">
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
											onClick={() => actions.signIn(email, password)}>
											Sign In
										</button>
									</form>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="card border-0">
								<div className="card-body">
									<h5 className="card-title">Create new account</h5>
									<form className="needs-validation" noValidate>
										<div className="form-group">
											<label htmlFor="formGroupExampleInput">Name</label>
											<input
												type="text"
												className="form-control"
												id="formGroupExampleInput"
												placeholder="Jhon Doe"
												onChange={e => setUser(e.target.value)}
												required
											/>
											<div className="invalid-feedback">Please choose a username.</div>
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputEmail2">Email address</label>
											<input
												type="email"
												className="form-control"
												id="exampleInputEmail2"
												aria-describedby="emailHelp"
												placeholder="example@something.com"
												onChange={e => setEmail(e.target.value)}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputPassword2">Password</label>
											<input
												type="password"
												className="form-control"
												id="exampleInputPassword2"
												placeholder="******"
												onChange={e => setPassword(e.target.value)}
											/>
										</div>
										<button
											type="button"
											className="btn btn-primary"
											onClick={() => actions.signUp(user, email, password)}>
											Sign Up
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};
