import React from "react";

export const Warehouses = () => {
	return (
		<div className="container p-5 ">
			<h2>Warehouses</h2>
			<div className="listofwarehouse overflow-auto">
				<div className="row">
					<div className="d-flex flex-row pl-4">
						<div>
							<img src="https://placehold.it/200x200" />
						</div>
						<div className="pl-5">
							<h3>WAREHOUSE NAME</h3>
							<p>lorem lorem lorem</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="d-flex flex-row pl-4">
						<div>
							<img src="https://placehold.it/200x200" />
						</div>
						<div className="pl-5">
							<h3>WAREHOUSE NAME</h3>
							<p>lorem lorem lorem</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="d-flex flex-row pl-4">
						<div>
							<img src="https://placehold.it/200x200" />
						</div>
						<div className="pl-5">
							<h3>WAREHOUSE NAME</h3>
							<p>lorem lorem lorem</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
