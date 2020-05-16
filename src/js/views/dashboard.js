import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Table } from "react-bootstrap";

export const Dashboard = () => {
	const { store, actions } = useContext(Context);
	// const [user, setUser] = useState("");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	return (
		<div className="container mt-5">
			<h2>Dashboard</h2>
			<Table className="overflow-auto" striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Password</th>
						<th>Username</th>
						<th>Role</th>
					</tr>
				</thead>
				<tbody>
					{store.users.map((item, index) => {
						return (
							<tr key={index}>
								<td>{item.id}</td>
								<td>{item.first}</td>
								<td>{item.last}</td>
								<td>{item.password}</td>
								<td>{item.username}</td>
								<td>{item.role}</td>
								{/* <Link to={"/edit/" + e.id + "/" + index}> */}
								<button className="btn">
									<i className="fas fa-pencil-alt mr-3" />
								</button>
								{/* </Link> */}
								<button className="btn">
									{/* // onClick={() => { */}
									{/* // actions.deleteContact(e.id); */}
									{/* // }}> */}
									<i className="fas fa-trash-alt" />
								</button>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>

		// 	<div className="row justify-content-center">
		// 		<button
		// 			type="button"
		// 			className="btn btn-primary rounded"
		// 			//onClick={() => actions.signUp(user, email, password)}
		// 		>
		// 			Update
		// 		</button>
		// 	</div>
		// </div>
	);
};
