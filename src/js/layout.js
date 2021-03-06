import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";

import { ManagerStation } from "./views/managerStation";
import { ScanStation } from "./views/scanStation";
import { Dashboard } from "./views/dashboard";
import { Package } from "./views/package";
import { AdminDashboard } from "./views/AdminDashboard";
import { message } from "./views/message";
//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/scanStation" component={ScanStation} />
						<Route path="/managerStation" component={ManagerStation} />
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/package/:id" component={Package} />
						<Route path="/admindashboard" component={AdminDashboard} />
						<Route path="/message/:id" component={message} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
