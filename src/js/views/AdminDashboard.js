import React from "react";
// import { Nav, Tab, Row, Col } from "react-bootstrap";
import { Banner } from "./../component/Banner";
import { Tab, Nav, Row, Col, Tabs } from "react-bootstrap";
import { dashboard } from "./../views/dashboard";
import { UserDashboard } from "./../component/UserDashboard";
import { Scanner } from "./../component/PackageScanner";
import { PackageDashboard } from "./../component/PackageDashboard";
import { Welcome } from "./../component/WelcomeDashboard";

export const AdminDashboard = () => {
	return (
		<>
			<Banner />

			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<Row>
					<Col sm={2}>
						<Nav variant="pills" className="flex-column">
							<Nav.Item>
								<Nav.Link eventKey="first">
									<i className="fas fa-tachometer-alt pr-1" />
									Welcome
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="second">
									<i className="fas fa-users pr-1" />
									Users
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="third">
									<i className="fas fa-cube pr-1" />
									New package
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="fourth">
									<i className="fas fa-cubes pr-1" />
									Packages
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="fifth">
									<i className="fas fa-money-check-alt pr-1" />
									Logistics
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={10}>
						<Tab.Content>
							<Tab.Pane eventKey="first">
								<Welcome />
							</Tab.Pane>
							<Tab.Pane eventKey="second">
								<UserDashboard />
							</Tab.Pane>
							<Tab.Pane eventKey="third">
								<Scanner />
							</Tab.Pane>
							<Tab.Pane eventKey="fourth">
								<PackageDashboard />
							</Tab.Pane>
							<Tab.Pane eventKey="fifth">
								Sorry this page is being built at the moment - come back later
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</>
	);
};
