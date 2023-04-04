import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button } from "@mui/material";
import { Container } from "@mui/system";

function HomepageOverlay() {
	return (
	<Container maxWidth>
			<Grid2
				container
				spacing={0}
				style={{
					position: "absolute",
					// top: "50",
					bottom: "25%",
					left: "13%",
					// right: "10",
					zIndex: "10",
					// bottom: "50",
					// borderColor: "black",
					// borderWidth: "1px",
					// border: "solid",
					// width: "fit-content",
					// height: "200px",
					width:"fit-content",
					height:"fit-content",

				}}
			>
				<Grid2 item xs={12}>
					<h1
						style={{
							fontSize: "5rem",
							// width: "fit-content",
							// height: "1rem",
							bottom: "50",
							// borderColor: "black",
							// borderWidth: "1px",
							// border: "solid",
						}}
					>
						Hire industry leading workforce
					</h1>
				</Grid2>

				<Grid2
					item
					xs={12}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						// bottom: "10px",
					}}
				>
					<Button
						variant="contained"
						style={{
							// borderColor: "black",
							
							// top: "30px",
							// postion: "absolute",
							bottom: "30px",
							right: "2vw",

							// display: "grid",
							// placeItems: "center",
						}}
					>
						Contact Us
					</Button>
				</Grid2>
			</Grid2></Container>
		
	);
}

export default HomepageOverlay;
