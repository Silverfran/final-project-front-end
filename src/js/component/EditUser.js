import React, { useState, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditUser = props => {
	const { store, actions } = useContext(Context);

	const [id, setId] = useState(props.id);
	const [user, setUser] = useState(props.username);
	const [email, setEmail] = useState(props.email);
	const [password, setPassword] = useState(props.password);
	const [roleid, setRoleid] = useState(props.role_id);

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
								defaultValue={user}
								onChange={e => setUser(e.target.value)}
							/>
							<div className="invalid-feedback">Please choose a username.</div>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputEmail2">Email address</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputEmail2"
								aria-describedby="emailHelp"
								defaultValue={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword2">Password</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputPassword2"
								defaultValue={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputRoleid">Access Level</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputRoleid"
								defaultValue={roleid}
								onChange={e => setRoleid(e.target.value)}
							/>
						</div>
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => {
								actions.updateUser(id, user, email, password, roleid);
								setShow(false);
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
