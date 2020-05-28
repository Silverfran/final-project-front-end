import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { PackageDashboard } from "./../component/PackageDashboard";
import { Banner } from "./../component/Banner";

export const ManagerStation = () => {
	return (
		<>
			<Banner />
			<PackageDashboard />
		</>
	);
};
