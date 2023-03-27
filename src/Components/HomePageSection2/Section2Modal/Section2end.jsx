import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function Section2End() {
	return (
		/// color
		<Paper
			elevation={4}
			style={{
				backgroundColor: "#6A84C1",
				position: "relative",
				// bottom: "0px",
				top: "0px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				paddingTop: "30px",
				paddingBottom: "30px",
				// border: "solid",
				// borderWidth: "1px",
			}}
		>
			<Grid2 container spacing={0}>
				<Grid2 item xs={6} style={{ textAlign: "right", paddingRight: "10%" }}>
					<Typography variant="h4">CALL US 24/7</Typography>
				</Grid2>
				<Grid2 item xs={6} style={{ textAlign: "left", paddingRight: "10%" }}>
					<Typography>
						In today's rapidly changing business climate, the efficient and
						effective organization wins - and that means having people who fit
						your needs perfectly, when you need them. Whether you need to staff
						a single facility or support a multi-location and multinational
						personnel operation with uniquely skilled, semi-skilled or low
						skilled people - Fastway has recruitment and staffing services to
						help you meet your goals.
					</Typography>
				</Grid2>
			</Grid2>
		</Paper>
	);
}

export default Section2End;
