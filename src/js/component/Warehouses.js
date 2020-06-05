import React from "react";
import spacex from "./../../img/spacex.jpg";
import bayer from "./../../img/bayer.png";

export const Warehouses = () => {
	return (
		<div className="container p-5 overflow-auto">
			<h2>Warehouses</h2>
			<div className="listofwarehouse overflow-auto">
				<div className="row warehouses">
					<div className="col-sm-3">
						<img src={spacex} style={{ height: "auto", width: "200px" }} />
					</div>
					<div className=" col-sm-7 pl-5">
						<h3>SpaceX </h3>
						<p>
							<strong>Direction:</strong>
							12301 Crenshaw Blvd, Hawthorne, CA 90250
						</p>
						<p>
							<strong>Hours to Ship :</strong> 8 am to 3 pm{" "}
						</p>
						<p>
							American aerospace manufacturer and space transportation services company headquartered in
							Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space
							transportation costs to enable the colonization of Mars.SpaceX has developed several launch
							vehicles and the Dragon spacecraft.{" "}
						</p>
					</div>
				</div>
				<div className="row warehouses">
					<div className=" col-sm-7 pl-5">
						<h3>Bayer Pharmaceutical </h3>
						<p>
							<strong>Direction:</strong>
							100 Bayer Boulevard Whippany, NJ 07981 USA
						</p>
						<p>
							<strong>Hours to Ship :</strong> 6 am to 8 pm{" "}
						</p>
						<p>
							German multinational pharmaceutical and life sciences company and one of the largest
							pharmaceutical companies in the world. Headquartered in Leverkusen, Bayer areas of business
							include human and veterinary pharmaceuticals; consumer healthcare products; agricultural
							chemicals, seeds and biotechnology products.{" "}
						</p>
					</div>
					<div className="col-sm-3">
						<img src={bayer} style={{ height: "auto", width: "200px" }} />
					</div>
				</div>
			</div>
		</div>
	);
};
