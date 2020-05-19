import React, { useState, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const SignIn = props => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			<Button variant="warning" onClick={handleShow}>
				Sign In
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Sign in </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="needs-validation" noValidate>
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
					</Form>
				</Modal.Body>
			</Modal>{" "}
		</>
	);
};

SignIn.propTypes = {
	history: PropTypes.object
};
