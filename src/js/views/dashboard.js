import React from "react";
// import { Context } from "../store/appContext";
import { Table } from "react-bootstrap";
import { UserDashboard } from "./../component/UserDashboard";
import { Banner } from "./../component/Banner";

export const Dashboard = () => {
	// const { store, actions } = useContext(Context);
	// const [user, setUser] = useState("");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	return (
		<>
			<Banner />
			<UserDashboard />
		</>
	);
};
