import React, { useState, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditUser = props => {
	const { store, actions } = useContext(Context);

	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="light" onClick={handleShow}>
				<i className="fas fa-pencil-alt" />
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit User </Modal.Title>
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
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => {
								actions.updateUserName(user, email, password);
								handleClose;
							}}>
							Update
						</button>
					</Form>
				</Modal.Body>
			</Modal>{" "}
		</>
	);
};

EditUser.propTypes = {
	history: PropTypes.object
};
