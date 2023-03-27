import { Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

function FooterSection3() {
	return (
		<div>
			<h1>Newsletter</h1>
			<Typography style={{ width: "60%" }}>
				Enter your email address here always to be updated. We promise not to
				spam!
			</Typography>
			<Button variant="outlined">Susbscribe to our newsletter</Button>
		</div>
	);
}

export default FooterSection3;
