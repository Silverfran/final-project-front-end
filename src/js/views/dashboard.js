import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Dashboard = () => {
	// const { store, actions } = useContext(Context);
	// const [user, setUser] = useState("");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	return (
		//header
		<div>
			<div className="container border-bottom">graph warehouse capacity</div>

			<div className="container">list of user with checkbox roles</div>
			<div className="row justify-content-center">
				<button
					type="button"
					className="btn btn-primary rounded"
					//onClick={() => actions.signUp(user, email, password)}
				>
					Update Role
				</button>
			</div>
		</div>
	);
};
