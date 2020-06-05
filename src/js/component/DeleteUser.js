import React, { useState, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const DeleteUser = props => {
	const { store, actions } = useContext(Context);

	// const [user, setUser] = useState("");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="light" onClick={handleShow}>
				<i className="fas fa-trash-alt" />
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Delete User </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="needs-validation" noValidate>
						<div className="modal-body">Are you sure you want to delete ?</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => {
									actions.deleteUser(user, email, password);
									handleClose;
								}}>
								Yes
							</button>
							<button
								type="button"
								className="btn btn-primary float-right"
								onClick={() => {
									handleClose;
								}}>
								No
							</button>
						</div>
					</Form>
				</Modal.Body>
			</Modal>{" "}
		</>
	);
};
