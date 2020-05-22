import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Scanner } from "./../component/PackageScanner";
import { Banner } from "./../component/Banner";

export const ScanStation = () => {
	return (
		<>
			<Banner />
			<Scanner />
		</>
	);
};
