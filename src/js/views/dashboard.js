import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Dashboard = () => {
	const { store, actions } = useContext(Context);
	// const [user, setUser] = useState("");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	return (
		//header
		<div>
			<div className="container border-bottom">graph warehouse capacity</div>
			<div className="container">
				{store.users.map((item, index) => {
					return (
						<div key={index} className="row">
							<div className="col-4 px-0">
								<div className="input-group mb-3">
									<div className="input-group-prepend">
										<span className="input-group-text" id="inputGroup-sizing-default">
											UserName
										</span>
									</div>
									<input
										type="text"
										className="form-control"
										aria-label="Default"
										aria-describedby="inputGroup-sizing-default"
										value={item.username}
										onChange={e => actions.updateUserName(item.username, e.target.value)}
									/>
								</div>
							</div>
							<div className="col-4 px-0">
								<div className="input-group mb-3">
									<div className="input-group-prepend">
										<span className="input-group-text" id="inputGroup-sizing-default">
											Password
										</span>
									</div>
									<input
										type="text"
										className="form-control"
										aria-label="Default"
										aria-describedby="inputGroup-sizing-default"
										value={item.password}
									/>
								</div>
							</div>
							<div className="col-4 px-0">
								<div className="input-group mb-3">
									<div className="input-group-prepend">
										<label className="input-group-text" htmlFor="inputGroupSelect01">
											Roles
										</label>
									</div>
									<select
										className="custom-select"
										id="inputGroupSelect01"
										defaultValue={item.role_id}>
										<option value="1">Administrator</option>
										<option value="2">Manager</option>
										<option value="3">Associate</option>
									</select>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<div className="row justify-content-center">
				<button
					type="button"
					className="btn btn-primary rounded"
					//onClick={() => actions.signUp(user, email, password)}
				>
					Update
				</button>
			</div>
		</div>
	);
};
