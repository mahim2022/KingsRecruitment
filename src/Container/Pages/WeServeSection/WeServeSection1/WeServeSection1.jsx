import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
function WeServeSection1() {
	return (
		<Paper
			elevation={4}
			style={{
				backgroundColor: "#6A84C1",
				// position: "relative",
				// bottom: "0px",
				// top: "0px",
				// display: "flex",
				// justifyContent: "center",
				// alignItems: "center",
				paddingTop: "30px",
				paddingBottom: "30px",
				// border: "solid",
				// borderWidth: "1px",
				// width: "100vw",
				// alignContent: "center",
				textAlign: "center",
			}}
		>
			<Typography variant="h2" style={{ width: "100%" }}>
				Our facilities and resources
			</Typography>
			<Typography variant="h4" style={{ width: "100%" }}>
				HOME OUR FACILITIES & RESOURCES
			</Typography>
		</Paper>
	);
}

export default WeServeSection1;
