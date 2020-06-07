import React from "react";
// import { Nav, Tab, Row, Col } from "react-bootstrap";
import { Banner } from "./../component/Banner";
import { Tab, Nav, Row, Col, Tabs } from "react-bootstrap";
import { dashboard } from "./../views/dashboard";
import { UserDashboard } from "./../component/UserDashboard";
import { Scanner } from "./../component/PackageScanner";
import { PackageDashboard } from "./../component/PackageDashboard";
import { Welcome } from "./../component/WelcomeDashboard";
import { Warehouses } from "../component/Warehouses";
import { Inbox } from "./../component/Inbox";
import { Logistic } from "./../component/Logistic";

export const AdminDashboard = () => {
	return (
		<>
			<Banner />

			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<Row noGutters>
					<Col sm={2}>
						<Nav variant="pills" className="flex-column">
							<Nav.Item>
								<Nav.Link eventKey="first">
									<i className="fas fa-tachometer-alt pr-1" />
									Welcome
								</Nav.Link>
								<Nav.Link eventKey="second">
									<i className="fas fa-inbox pr-1" />
									Inbox
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="third">
									<i className="fas fa-users pr-1" />
									Users
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="fourth">
									<i className="fas fa-cube pr-1" />
									New package
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="fifth">
									<i className="fas fa-cubes pr-1" />
									Packages
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="sixth">
									<i className="fas fa-money-check-alt pr-1" />
									Logistics
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="seven">
									<i className="fas fa-warehouse pr-1" />
									Warehouses
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={10}>
						<Tab.Content>
							<Tab.Pane eventKey="first">
								<div className="d-flex justify-content-end pr-2 pt-2">
									<i className="fas fa-cog  d-flex justify-content-end" />
								</div>
								<div className="d-flex justify-content-center pt-3 mb-0">
									<h2>Dashboard</h2>
								</div>
								<Welcome />
							</Tab.Pane>
							<Tab.Pane eventKey="second">
								<Inbox />
							</Tab.Pane>
							<Tab.Pane eventKey="third">
								<UserDashboard />
							</Tab.Pane>
							<Tab.Pane eventKey="fourth">
								<Scanner />
							</Tab.Pane>
							<Tab.Pane eventKey="fifth">
								<PackageDashboard />
							</Tab.Pane>
							<Tab.Pane eventKey="sixth">
								<Logistic />
							</Tab.Pane>
							<Tab.Pane eventKey="seven">
								<Warehouses />
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</>
	);
};
