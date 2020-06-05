import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export const Contact = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="success btn-sm " onClick={handleShow}>
				Contact
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Contact Admin</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="needs-validation" noValidate>
						<div className="form-group">
							<label htmlFor="formGroupExampleInput">Subject</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Subject"
								// onChange={e => setUser(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword2">Password</label>
							<textarea
								className="form-control"
								id="exampleFormControlTextarea1"
								rows="3"
								placeholder="Described your issue"
							/>
						</div>
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => {
								// actions.signUp(user, email, password);
								handleClose;
							}}>
							Send
						</button>
					</Form>
				</Modal.Body>
			</Modal>{" "}
		</>
	);
};
