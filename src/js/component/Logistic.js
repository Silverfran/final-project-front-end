import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Table } from "react-bootstrap";

export const Logistic = () => {
	const { store } = useContext(Context);
	return (
		<div>
			<div className="container mt-5">
				<h2>Packages</h2>
				<Table className="overflow-auto" bordered hover>
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Service Type</th>
							<th scope="col">Delivery Days</th>
							<th scope="col">Currency</th>
							<th scope="col">Amount</th>
						</tr>
					</thead>
					<tbody>
						{store.rates.rate_response.rates.length > 0
							? store.rates.rate_response.rates.map((item, index) => {
									if (item.package_type == "package") {
										return (
											<tr key={index}>
												<th scope="row">{index}</th>
												<td>{item.service_type}</td>
												<td>{item.delivery_days}</td>
												<td>{item.shipping_amount.currency}</td>
												<td>{item.shipping_amount.amount}</td>
											</tr>
										);
									}
							  })
							: "loading..."}
					</tbody>
				</Table>
				<br />
			</div>
		</div>
	);
	//  else {
	// 	return (
	// 		<div>
	// 			<button type="button" onClick={() => setVisible(true)} className="btn btn-primary mr-3">
	// 				Get Rates
	// 			</button>
	// 		</div>
	// 	);
	// }
};
