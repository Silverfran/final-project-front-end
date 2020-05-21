import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Scanner } from "./../component/PackageScanner";

export const ScanStation = () => {
	return <Scanner />;
};
