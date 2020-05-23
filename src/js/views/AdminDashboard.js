import React from "react";
import { Banner } from "./../component/Banner";

export const AdminDashboard = () => {
	return (
		<>
			<Banner />
			<div className="row">
				<div className="col-1">
					<div
						className="nav flex-column nav-pills"
						id="v-pills-tab"
						role="tablist"
						aria-orientation="vertical">
						<a
							className="nav-link active"
							id="v-pills-home-tab"
							data-toggle="pill"
							href="#v-pills-home"
							role="tab"
							aria-controls="v-pills-home"
							aria-selected="true">
							Home
						</a>
						<a
							className="nav-link"
							id="v-pills-profile-tab"
							data-toggle="pill"
							href="#v-pills-profile"
							role="tab"
							aria-controls="v-pills-profile"
							aria-selected="false">
							Profile
						</a>
						<a
							className="nav-link"
							id="v-pills-messages-tab"
							data-toggle="pill"
							href="#v-pills-messages"
							role="tab"
							aria-controls="v-pills-messages"
							aria-selected="false">
							Messages
						</a>
						<a
							className="nav-link"
							id="v-pills-settings-tab"
							data-toggle="pill"
							href="#v-pills-settings"
							role="tab"
							aria-controls="v-pills-settings"
							aria-selected="false">
							Settings
						</a>
					</div>
				</div>
				<div className="col-11">
					<div className="tab-content" id="v-pills-tabContent">
						<div
							className="tab-pane fade show active"
							id="v-pills-home"
							role="tabpanel"
							aria-labelledby="v-pills-home-tab">
							HELLO
						</div>
						<div
							className="tab-pane fade"
							id="v-pills-profile"
							role="tabpanel"
							aria-labelledby="v-pills-profile-tab">
							HI
						</div>
						<div
							className="tab-pane fade"
							id="v-pills-messages"
							role="tabpanel"
							aria-labelledby="v-pills-messages-tab">
							OLA
						</div>
						<div
							className="tab-pane fade"
							id="v-pills-settings"
							role="tabpanel"
							aria-labelledby="v-pills-settings-tab">
							NELSON
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
