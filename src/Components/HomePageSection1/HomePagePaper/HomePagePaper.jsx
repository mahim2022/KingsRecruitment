import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function HomePagePaper() {
	return (
		/// color
		<Paper
			elevation={4}
			style={{
				backgroundColor: "#414971",
				position: "relative",
				// bottom: "0px",
				top: "0px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				paddingTop: "30px",
				paddingBottom: "30px",
			}}
		>
			<Grid2 container spacing={50}>
				<Grid2 item xs={4}>
					<Typography>CALL US 24/7</Typography>
					<Typography>+88 01719 107 968, 01671 899 676</Typography>
				</Grid2>
				<Grid2 item xs={4}>
					<Typography>EMAIL ADDRESS</Typography>
					<Typography>info@imperialresourcesltd.com</Typography>
				</Grid2>
				<Grid2 item xs={4}>
					<Typography>OPEN HOURS</Typography>
					<Typography>Daily 9:00-20:00</Typography>
				</Grid2>
			</Grid2>
		</Paper>
	);
}

export default HomePagePaper;
