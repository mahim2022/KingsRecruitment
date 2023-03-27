import { Container } from "@mui/material";
import React from "react";
import WeServeSection1 from "./WeServeSection1/WeServeSection1";
import WeServeSection2 from "./WeServeSection2/WeServeSection2";

function WeServeSection() {
	return (
		<div style={{ maxWidth: "100%" }}>
			<WeServeSection1></WeServeSection1>
			<WeServeSection2></WeServeSection2>
		</div>
	);
}

export default WeServeSection;
