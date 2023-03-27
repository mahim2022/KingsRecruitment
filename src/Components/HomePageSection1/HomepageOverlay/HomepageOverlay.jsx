import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button } from "@mui/material";

function HomepageOverlay() {
	return (
		<div>
			<Grid2
				container
				spacing={0}
				style={{
					position: "absolute",
					// top: "50",
					bottom: "20vw",
					left: "20vw",
					// right: "10",
					zIndex: "10",
					// bottom: "50",
					// borderColor: "black",
					// borderWidth: "1px",
					// border: "solid",
					// width: "fit-content",
					// height: "200px",
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
							// borderWidth: "1px",
							// border: "solid",
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
			</Grid2>
		</div>
	);
}

export default HomepageOverlay;
