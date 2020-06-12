import React, { useState, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Register = props => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { actions } = useContext(Context);
	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			<Button variant="warning" onClick={handleShow}>
				Create New Account
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Register</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="needs-validation" noValidate>
						<div className="form-group">
							<label htmlFor="formGroupExampleInput">Name</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Jhon Doe"
								required
								onChange={e => setUser(e.target.value)}
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
								required
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
								required
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<Link
							to="/"
							type="button"
							className="btn btn-primary"
							onClick={() => {
								actions.signUp(user, email, password);
								setShow(false);
							}}>
							Sign Up
						</Link>
					</Form>
				</Modal.Body>
			</Modal>{" "}
		</>
	);
};
