import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const ScanStation = () => {
	const { store, actions } = useContext(Context);
	// const [user, setUser] = useState("");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	return (
		//header
		<div>
			<div className="container border-bottom">
				<div className="row justify-content-between">
					<div className="col-4">Welcome Username</div>
					<div className="col-2">
						<button
							type="button"
							className="btn btn-primary rounded"
							//onClick={() => actions.signUp(user, email, password)}
						>
							Logout
						</button>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row justify-content-center">
					<div className="col">
						<img src={`data:image/png;base64,${store.buffers.img}`} />
					</div>
					<div className="col" />
					<div className="w-100" />
					<div className="col">Length =</div>
					<div className="col">{store.buffers.Length}</div>
					<div className="w-100" />
					<div className="col">Width =</div>
					<div className="col">{store.buffers.Width}</div>
					<div className="w-100" />
					<div className="col">Height =</div>
					<div className="col">{store.buffers.Height}</div>
					<div className="w-100" />
					<div className="col">Weight =</div>
					<div className="col">{store.buffers.Weight}</div>
				</div>
				<div className="row justify-content-center">
					<button
						type="button"
						className="btn btn-primary rounded"
						//onClick={() => actions.signUp(user, email, password)}
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};
